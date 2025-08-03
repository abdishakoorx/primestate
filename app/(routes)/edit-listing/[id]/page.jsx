"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/Utils/supabase/client'
import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'
import { ArrowLeft, Settings, Eye, Save, Globe } from 'lucide-react'

import BasicInfoForm from '@/components/listing/BasicInfoForm'
import PropertyDetailsForm from '@/components/listing/PropertyDetailsForm'
import LocationForm from '@/components/listing/LocationForm'
import DescriptionImagesForm from '@/components/listing/DescriptionImagesForm'
import { PropertyCardLoading } from '@/components/custom/PropertyCard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

function EditListing({ params }) {
    const { user } = useUser()
    const router = useRouter()
    const [listing, setListing] = useState(null)
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [initialLoading, setInitialLoading] = useState(true)

    const [formData, setFormData] = useState({
        type: 'Sell',
        propertyType: '',
        price: '',
        title: '',
        description: '',
        bedroom: '',
        bathroom: '',
        builtIn: '',
        parking: '',
        lotSize: '',
        area: '',
        hoa: '',
        address: '',
        profileImage: user?.imageUrl || '',
        username: user?.fullName || ''
    })

    useEffect(() => {
        if (user) {
            verifyUserRecord()
        }
    }, [user])

    const verifyUserRecord = async () => {
        try {
            const { data, error } = await supabase
                .from('listing')
                .select('*,listingImages(listing_id,url)')
                .eq('createdby', user?.primaryEmailAddress.emailAddress)
                .eq('id', params.id)

            if (error) throw error

            if (data && data.length > 0) {
                const listingData = data[0]
                setListing(listingData)
                setFormData({
                    type: listingData.type || 'Sell',
                    propertyType: listingData.propertyType || '',
                    price: listingData.price || '',
                    title: listingData.title || '',
                    description: listingData.description || '',
                    bedroom: listingData.bedroom || '',
                    bathroom: listingData.bathroom || '',
                    builtIn: listingData.builtIn || '',
                    parking: listingData.parking || '',
                    lotSize: listingData.lotSize || '',
                    area: listingData.area || '',
                    hoa: listingData.hoa || '',
                    address: listingData.address || '',
                    profileImage: user?.imageUrl || '',
                    username: user?.fullName || ''
                })
            } else {
                router.replace('/')
            }
        } catch (error) {
            console.error('Error fetching listing:', error)
            toast.error('Error loading listing data')
            router.replace('/')
        } finally {
            setInitialLoading(false)
        }
    }

    const handleInputChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const onSubmitHandler = async () => {
        setLoading(true)

        try {
            const { data, error } = await supabase
                .from('listing')
                .update(formData)
                .eq('id', params.id)
                .select()

            if (error) throw error

            if (images.length > 0) {
                for (const image of images) {
                    const fileName = Date.now().toString() + Math.random().toString(36).substring(7)

                    const { data: uploadData, error: uploadError } = await supabase.storage
                        .from('listingImages')
                        .upload(`${fileName}`, image, {
                            contentType: `image/${image.name.split('.').pop()}`,
                            upsert: false
                        })

                    if (!uploadError) {
                        const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL + fileName
                        await supabase
                            .from('listingImages')
                            .insert([{ url: imageUrl, listing_id: params.id }])
                    }
                }
            }

            toast.success('Listing updated successfully!')

        } catch (error) {
            console.error('Error updating listing:', error)
            toast.error('Error updating listing')
        } finally {
            setLoading(false)
        }
    }

    const publishHandler = async () => {
        setLoading(true)

        try {
            const { data, error } = await supabase
                .from('listing')
                .update({ active: true })
                .eq('id', params?.id)
                .select()

            if (error) throw error

            toast.success('Listing published successfully!')

        } catch (error) {
            console.error('Error publishing listing:', error)
            toast.error('Error publishing listing')
        } finally {
            setLoading(false)
        }
    }

    const handlePreview = () => {
        router.push(`/view-listing/${params.id}`)
    }

    if (initialLoading) {
        return (
            <PropertyCardLoading />
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            {/* Enhanced Header */}
            <div className="top-0 z-10 bg-background/80">
                <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div>
                                <h1 className="text-3xl font-bold text-primary">
                                    Edit Listing
                                </h1>
                                <p className="text-muted-foreground">
                                    Update your property details and photos
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="flex items-center px-4 py-2 space-x-2 border rounded-xl border-primary/10">
                                <Settings className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">
                                    {listing?.active ? 'Published' : 'Draft'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {/* Progress Indicator */}
                    <Card className="p-6 border-2 bg-background/80 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                <span className="font-semibold text-foreground">Editing Mode</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <span>Last updated:</span>
                                <span className="font-medium">{new Date().toLocaleDateString()}</span>
                            </div>
                        </div>
                    </Card>

                    {/* Form Sections */}
                    <div className="space-y-12">
                        {/* Basic Information */}
                        <BasicInfoForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            showTitle={true}
                        />

                        {/* Property Details */}
                        <PropertyDetailsForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                        />

                        {/* Location */}
                        <LocationForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                        />

                        {/* Description & Images */}
                        <DescriptionImagesForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            setImages={setImages}
                            imageList={listing?.listingImages || []}
                            loading={loading}
                            onSave={onSubmitHandler}
                            onPublish={publishHandler}
                            onPreview={handlePreview}
                            showActions={true}
                        />
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Status Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-10 p-4 border-t bg-background/95 backdrop-blur-sm border-border">
                <div className="flex items-center justify-between max-w-5xl mx-auto">
                    <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${listing?.active ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                        <span className="text-sm font-medium text-foreground">
                            Status: {listing?.active ? 'Live & Published' : 'Draft Mode'}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            onClick={handlePreview}
                            variant="ghost"
                            size="sm"
                            className="rounded-xl"
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                        </Button>
                        {listing?.active && (
                            <div className="flex items-center space-x-1 text-sm text-green-600">
                                <Globe className="w-4 h-4" />
                                <span>Live</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditListing