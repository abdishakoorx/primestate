"use client"

import { Button } from '@/components/ui/button'
import { supabase } from '@/Utils/supabase/client'
import { RedirectToSignIn, useAuth, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import PropertyListingCard, { PropertyListingCardLoading } from '@/components/custom/PropetyListingCard'

function UserListing() {
    const { isLoaded, isSignedIn } = useAuth()
    const { user } = useUser()
    const [userListing, setUserListing] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleteDialog, setDeleteDialog] = useState({ open: false, listingId: null, title: '' })
    const [deleting, setDeleting] = useState(false)

    // Redirect to sign in if not authenticated
    if (isLoaded && !isSignedIn) {
        return <RedirectToSignIn />
    }

    // Show loading while auth is being determined
    if (!isLoaded) {
        return <PropertyListingCardLoading />
    }

    useEffect(() => {
        user && GetUserListing()
    }, [user])

    const GetUserListing = async () => {
        setLoading(true)
        try {
            const { data, error } = await supabase
                .from('listing')
                .select('*, listingImages(url, listing_id)')
                .eq('createdby', user?.primaryEmailAddress.emailAddress)
                .eq('active', true)

            if (error) throw error
            setUserListing(data || [])
        } catch (error) {
            toast.error("Failed to fetch listings")
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteListing = async () => {
        setDeleting(true)
        try {
            const { error } = await supabase
                .from('listing')
                .update({ active: false })
                .eq('id', deleteDialog.listingId)

            if (error) throw error

            // Update local state
            setUserListing(prev => prev.filter(item => item.id !== deleteDialog.listingId))

            toast.success("Listing deleted successfully")

            setDeleteDialog({ open: false, listingId: null, title: '' })
        } catch (error) {
            toast.error("Failed to delete listing")
        } finally {
            setDeleting(false)
        }
    }

    const openDeleteDialog = (listingId, title) => {
        setDeleteDialog({ open: true, listingId, title })
    }

    if (loading) {
        return <PropertyListingCardLoading />
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            {userListing.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {userListing.map((listing) => (
                        <PropertyListingCard
                            key={listing.id}
                            listing={listing}
                            onDelete={openDeleteDialog}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-12 text-center">
                    <div className="mb-4 text-6xl">🏠</div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">No listings yet</h3>
                    <p className="mb-6 text-muted-foreground">Create your first property listing to get started</p>
                    <Link href="/add-new-listing">
                        <Button>Create Listing</Button>
                    </Link>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteDialog.open} onOpenChange={(open) =>
                setDeleteDialog({ open, listingId: null, title: '' })
            }>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Listing</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete "{deleteDialog.title}"? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setDeleteDialog({ open: false, listingId: null, title: '' })}
                            disabled={deleting}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleDeleteListing}
                            disabled={deleting}
                        >
                            {deleting ? "Deleting..." : "Delete"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UserListing