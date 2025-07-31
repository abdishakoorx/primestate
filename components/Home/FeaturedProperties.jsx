"use client"
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { supabase } from '@/Utils/supabase/client';
import PropertyCard, { PropertyCardLoading } from '../custom/PropertyCard';

function FeaturedProperties() {
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFeaturedProperties();
    }, []);

    const getFeaturedProperties = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('listing')
                .select('*, listingImages(url, listing_id)')
                .eq('active', true)
                .order('id', { ascending: false })
                .limit(6); // Get latest 6 properties for featured section

            if (error) {
                console.error('Error fetching properties:', error);
                return;
            }

            if (data) {
                // Transform the data to match the expected format
                const transformedData = data.map(property => {
                    // Get the first image if available
                    const firstImage = property.listingImages && property.listingImages.length > 0
                        ? property.listingImages[0].url
                        : null;

                    // Format price based on type
                    const formattedPrice = property.type === 'rent'
                        ? `KES ${property.price?.toLocaleString()}/month`
                        : `KES ${property.price?.toLocaleString()}`;

                    return {
                        id: property.id.toString(),
                        propertyType: property.propertyType || 'Property',
                        price: formattedPrice,
                        location: property.address || 'Location not specified',
                        bedrooms: property.bedroom || 0,
                        bathrooms: property.bathroom || 0,
                        builtIn: property.builtIn || 'N/A',
                        lotSize: property.lotSize ? `${property.lotSize} sqm` : 'N/A',
                        type: property.type || 'sale',
                        imageUrl: firstImage,
                        agent: {
                            name: property.username,
                            avatar: property.profileImage || null
                        }
                    };
                });

                setFeaturedProperties(transformedData);
            }
        } catch (error) {
            console.error('Error in getFeaturedProperties:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-muted">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col mb-12 space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
                            Featured Properties
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Handpicked properties from our premium listings
                        </p>
                    </div>
                    <Link href="/buy">
                        <Button variant="outline">
                            View All Properties
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {loading ? (
                        // Show 6 loading cards with individual loading components
                        [...Array(6)].map((_, index) => (
                            <PropertyCardLoading key={`loading-${index}`} />
                        ))
                    ) : featuredProperties.length === 0 ? (
                        // Show empty state in the center spanning all columns
                        <div className="flex items-center justify-center h-64 col-span-full">
                            <div className="text-lg text-muted-foreground">No properties available at the moment.</div>
                        </div>
                    ) : (
                        // Show actual property cards
                        featuredProperties.map((property) => (
                            <PropertyCard key={property.id} {...property} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProperties;