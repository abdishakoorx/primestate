"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function HeroSection() {

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 text-primary-foreground bg-[url('/hero-image.webp')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-hero opacity-35"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Find Your Perfect
                            <span className="block text-secondary">Property</span>
                        </h1>
                        <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl text-primary-foreground/90">
                            Discover thousands of properties for sale and rent. Your dream home is just a click away.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-4xl p-6 mx-auto mb-8 shadow-xl bg-white/30 backdrop-blur-sm rounded-2xl">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        placeholder="Search by location or keywords..."
                                        className="w-full h-12 px-4 py-3 border rounded-lg border-input focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                                    />
                                </div>
                                <Select className="w-full md:col-span-1">
                                    <SelectTrigger className="h-12 text-black">
                                        <SelectValue placeholder="Select Property" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Apartment">Apartment</SelectItem>
                                        <SelectItem value="Bungalow">Bungalow</SelectItem>
                                        <SelectItem value="Single Family House">Single Family House</SelectItem>
                                        <SelectItem value="Bedsitter">Bedsitter</SelectItem>
                                        <SelectItem value="Hostel">Hostel</SelectItem>
                                        <SelectItem value="Villa">Villa</SelectItem>
                                        <SelectItem value="Penthouse">Penthouse</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button asChild size="lg" className="h-12">
                                    <Link href="/buy" className="flex items-center">
                                        <Search className="w-5 h-5 mr-2" />
                                        Search
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/buy">
                                <Button variant="secondary" size="lg">
                                    Browse Properties for Sale
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/rent">
                                <Button variant="outline" size="lg" className="text-white bg-white/10 border-white/30 hover:bg-white/20 hover:text-white/50">
                                    Find Rental Properties
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-muted">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        <div>
                            <div className="mb-2 text-3xl font-bold text-primary">10K+</div>
                            <div className="text-muted-foreground">Properties Listed</div>
                        </div>
                        <div>
                            <div className="mb-2 text-3xl font-bold text-primary">500+</div>
                            <div className="text-muted-foreground">Trusted Agents</div>
                        </div>
                        <div>
                            <div className="mb-2 text-3xl font-bold text-primary">95%</div>
                            <div className="text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="mb-2 text-3xl font-bold text-primary">24/7</div>
                            <div className="text-muted-foreground">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default HeroSection