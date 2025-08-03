"use client"

import { supabase } from '@/Utils/supabase/client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
    MapPin, Bed, Bath, Square, Heart, Share2, Calendar,
    Phone, Mail, MessageCircle, Star, Camera, ArrowLeft,
    Car, Home, Clock
} from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { PropertyCardLoading } from '@/components/custom/PropertyCard'

function ViewListing({ params }) {
    const [listingDetail, setListingDetail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isFavorited, setIsFavorited] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [date, setDate] = useState()
    const [isScheduleOpen, setIsScheduleOpen] = useState(false)

    useEffect(() => {
        GetListingDetail()
    }, [])

    const GetListingDetail = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('listing')
            .select('*, listingImages(url, listing_id)')
            .eq('id', params.id)
            .eq('active', true)

        if (data && data.length > 0) {
            setListingDetail(data[0])
        }
        setLoading(false)
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: listingDetail?.propertyType || 'Property',
                text: `Check out this amazing property`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => toast.success('Link copied to clipboard!'))
                .catch(() => toast.error('Failed to copy link'));
        }
    }

    const handleScheduleTour = () => {
        if (!date) {
            toast.error('Please select a date first')
            return
        }

        // Simulate booking process
        setIsScheduleOpen(false)

        setTimeout(() => {
            toast.success(`Tour scheduled! The agent will meet with you on ${date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}`)
        }, 1000)
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <PropertyCardLoading />
        )
    }

    if (!listingDetail) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="text-center">
                    <h2 className="mb-2 text-2xl font-bold">Property not found</h2>
                    <p className="mb-4 text-muted-foreground">The property you're looking for doesn't exist or has been removed.</p>
                    <Link href="/buy">
                        <Button>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Listings
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    const images = listingDetail.listingImages || []
    const hasImages = images.length > 0

    return (
        <div className="min-h-screen py-16 bg-background">
            {/* Image Gallery */}
            <div className="px-4 mx-auto mb-8 max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-96 md:h-[500px]">
                    <div className="relative md:col-span-3">
                        {hasImages ? (
                            <Image
                                src={images[currentImageIndex]?.url || '/placeholder.png'}
                                alt={listingDetail.propertyType}
                                fill
                                className="object-cover rounded-lg cursor-pointer"
                                onClick={() => {
                                    const nextIndex = (currentImageIndex + 1) % images.length;
                                    setCurrentImageIndex(nextIndex);
                                }}
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg">
                                <Home className="w-16 h-16 text-gray-400" />
                            </div>
                        )}

                        <div className="absolute flex space-x-2 top-4 left-4">
                            <Badge variant={listingDetail.type === "Sale" ? "default" : "secondary"}>
                                For {listingDetail.type}
                            </Badge>
                        </div>

                        <div className="absolute flex space-x-2 top-4 right-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`bg-white/80 hover:bg-white ${isFavorited ? "text-red-500" : "text-gray-600"
                                    }`}
                                onClick={() => setIsFavorited(!isFavorited)}
                            >
                                <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-600 bg-white/80 hover:bg-white"
                                onClick={handleShare}
                            >
                                <Share2 className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Navigation Arrows */}
                        {hasImages && images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute text-white transform -translate-y-1/2 left-4 top-1/2 bg-black/50 hover:bg-black/70"
                                    onClick={() => {
                                        const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
                                        setCurrentImageIndex(prevIndex);
                                    }}
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute text-white transform -translate-y-1/2 right-4 top-1/2 bg-black/50 hover:bg-black/70"
                                    onClick={() => {
                                        const nextIndex = (currentImageIndex + 1) % images.length;
                                        setCurrentImageIndex(nextIndex);
                                    }}
                                >
                                    <ArrowLeft className="w-5 h-5 transform rotate-180" />
                                </Button>
                            </>
                        )}

                        {hasImages && (
                            <div className="absolute flex items-center px-3 py-1 text-white rounded-lg bottom-4 right-4 bg-black/60">
                                <Camera className="w-4 h-4 mr-1" />
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        )}
                    </div>

                    {hasImages && (
                        <div className="flex-col hidden space-y-4 md:flex">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`relative flex-1 cursor-pointer hover:opacity-80 transition-opacity ${currentImageIndex === index ? 'ring-2 ring-primary' : ''
                                        }`}
                                >
                                    <Image
                                        src={image.url}
                                        alt={`Property ${index + 1}`}
                                        fill
                                        className="object-cover rounded-lg"
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Property Header */}
                        <div>
                            <h1 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                                {listingDetail.propertyType}
                            </h1>
                            <div className="flex items-center mb-4 text-muted-foreground">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span className="text-lg">{listingDetail.address}</span>
                            </div>
                            <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row md:items-center">
                                <div className="text-3xl font-bold text-primary">
                                    Ksh {listingDetail.price?.toLocaleString()}
                                </div>
                                <div className="flex items-center space-x-6 text-muted-foreground">
                                    <div className="flex items-center">
                                        <Bed className="w-5 h-5 mr-1" />
                                        <span>{listingDetail.bedroom} bed</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Bath className="w-5 h-5 mr-1" />
                                        <span>{listingDetail.bathroom} bath</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Square className="w-5 h-5 mr-1" />
                                        <span>{listingDetail.area} sq ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <Card className="p-6">
                            <h2 className="mb-4 text-2xl font-semibold">Description</h2>
                            <p className="mb-6 leading-relaxed text-muted-foreground">
                                {listingDetail.description}
                            </p>
                            <div className="flex flex-col items-start justify-between gap-4 pt-4 text-sm border-t sm:flex-row sm:items-center text-muted-foreground border-border">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={listingDetail.profileImage || '/placeholder.png'}
                                        width={40}
                                        height={40}
                                        className="object-cover w-10 h-10 rounded-full"
                                        alt="profile"
                                    />
                                    <span className="font-medium">{listingDetail.username}</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2" />
                                    Published on {formatDate(listingDetail.created_at)}
                                </div>
                            </div>
                        </Card>

                        {/* Property Details */}
                        <Card className="p-6">
                            <h2 className="mb-4 text-2xl font-semibold">Property Details</h2>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="flex justify-between py-3 border-b border-border">
                                    <span className="text-muted-foreground">Built Year</span>
                                    <span className="font-medium">{listingDetail.builtIn || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-border">
                                    <span className="text-muted-foreground">Property Type</span>
                                    <span className="font-medium">{listingDetail.propertyType}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-border">
                                    <span className="text-muted-foreground">Parking</span>
                                    <span className="font-medium">{listingDetail.parking || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-border">
                                    <span className="text-muted-foreground">Lot Size</span>
                                    <span className="font-medium">{listingDetail.lotSize || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-border">
                                    <span className="text-muted-foreground">HOA Fee</span>
                                    <span className="font-medium">Ksh {listingDetail.hoa || 0}/month</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-border">
                                    <span className="text-muted-foreground">Listing Type</span>
                                    <span className="font-medium">{listingDetail.type}</span>
                                </div>
                            </div>
                        </Card>

                        {/* Features Grid */}
                        <Card className="p-6">
                            <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                <div className="p-4 text-center rounded-lg bg-muted">
                                    <Bed className="mx-auto mb-2 text-primary" size={24} />
                                    <p className="font-semibold">{listingDetail.bedroom}</p>
                                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                                </div>
                                <div className="p-4 text-center rounded-lg bg-muted">
                                    <Bath className="mx-auto mb-2 text-primary" size={24} />
                                    <p className="font-semibold">{listingDetail.bathroom}</p>
                                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                                </div>
                                <div className="p-4 text-center rounded-lg bg-muted">
                                    <Square className="mx-auto mb-2 text-primary" size={24} />
                                    <p className="font-semibold">{listingDetail.area}</p>
                                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                                </div>
                                <div className="p-4 text-center rounded-lg bg-muted">
                                    <Car className="mx-auto mb-2 text-primary" size={24} />
                                    <p className="font-semibold">{listingDetail.parking || '0'}</p>
                                    <p className="text-sm text-muted-foreground">Parking</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Contact Agent */}
                        <Card className="p-6 top-8">
                            <h3 className="mb-4 text-xl font-semibold">Contact Agent</h3>

                            <div className="flex items-center mb-6 space-x-4">
                                <Image
                                    src={listingDetail.profileImage || '/placeholder.png'}
                                    alt={listingDetail.username}
                                    width={64}
                                    height={64}
                                    className="object-cover w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold">{listingDetail.username}</h4>
                                    <div className="flex items-center space-x-1 text-sm">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="font-medium">4.8</span>
                                        <span className="text-muted-foreground">(127 reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <p className="mb-6 text-sm text-muted-foreground">
                                Licensed real estate professional with years of experience in the local market.
                                Specializing in residential properties and client satisfaction.
                            </p>

                            <div className="space-y-3">
                                <Button className="w-full">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Agent
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Email Agent
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>

                                <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="w-full">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Schedule Tour
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Schedule a Property Tour</DialogTitle>
                                            <DialogDescription>
                                                Select a date for your property viewing. The agent will confirm the exact time.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex flex-col items-center space-y-4">
                                            <CalendarComponent
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                disabled={(date) => date < new Date()}
                                                className="border rounded-md"
                                            />
                                            <div className="flex w-full space-x-2">
                                                <Button variant="outline" onClick={() => setIsScheduleOpen(false)} className="flex-1">
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleScheduleTour} className="flex-1">
                                                    Book Tour
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewListing