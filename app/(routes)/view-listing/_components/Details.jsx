import React from 'react';
import { Home, Bath, Bed, Calendar, Car, DollarSign, MapPin, Clock, LandPlot, Share } from 'lucide-react';
import GoogleMapSection from '@/app/_components/GoogleMapSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

function Details({ listingDetail }) {
    const {
        address, area, bathroom, bedroom, builtIn, coordinates, price,
        description, hoa, lotSize, parking, propertyType, type, username, created_at, profileImage
    } = listingDetail;

    const parsedCoordinates = listingDetail.coordinates;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => toast('Link copied to clipboard!'))
            .catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <div className="min-h-screen p-8 text-primary">
            <div className="max-w-4xl mx-auto">
                <h1 className="mb-6 text-3xl font-bold">{propertyType}</h1>

                <div className="grid grid-cols-1 gap-8">
                    {/* Main Info Card */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                        <div className="flex items-start justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-secondary">{type} - Ksh {price.toLocaleString()}</h2>
                            <Button
                                onClick={handleShare}
                                className="flex items-center px-3 py-2 text-black transition-colors rounded bg-tertiary hover:bg-opacity-80 hover:bg-tertiary"
                            >
                                <Share size={18} className="mr-2" />
                                Share
                            </Button>
                        </div>
                        <p className="flex items-center mb-2"><MapPin className="mr-2 text-tertiary" size={20} /> {address}</p>
                    </div>

                    {/* Combined Features Card */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                        <h2 className="mb-4 text-xl font-semibold text-secondary">Property Details</h2>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            <div className="p-4 text-center bg-gray-800 rounded-lg">
                                <Bed className="mx-auto mb-2 text-tertiary" size={24} />
                                <p className="font-semibold">{bedroom}</p>
                                <p className="text-sm text-gray-400">Bedrooms</p>
                            </div>
                            <div className="p-4 text-center bg-gray-800 rounded-lg">
                                <Bath className="mx-auto mb-2 text-tertiary" size={24} />
                                <p className="font-semibold">{bathroom}</p>
                                <p className="text-sm text-gray-400">Bathrooms</p>
                            </div>
                            <div className="p-4 text-center bg-gray-800 rounded-lg">
                                <LandPlot className="mx-auto mb-2 text-tertiary" size={24} />
                                <p className="font-semibold">{area}</p>
                                <p className="text-sm text-gray-400">Sq Ft</p>
                            </div>
                            <div className="p-4 text-center bg-gray-800 rounded-lg">
                                <Car className="mx-auto mb-2 text-tertiary" size={24} />
                                <p className="font-semibold">{parking}</p>
                                <p className="text-sm text-gray-400">Parking</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <p className="flex items-center"><Calendar className="mr-2 text-tertiary" size={20} /> Built in {builtIn}</p>
                            <p className="flex items-center"><DollarSign className="mr-2 text-tertiary" size={20} /> HOA:Ksh {hoa}/month</p>
                        </div>
                    </div>

                    {/* Description Card */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
                        <h2 className="mb-4 text-xl font-semibold text-secondary">Description</h2>
                        <p className="mb-4">{description}</p>
                        <div className="flex items-center justify-between pt-4 text-sm text-gray-400 border-t border-gray-700">
                            <p className="flex items-center gap-2">
                                <Image src={profileImage} width={30} height={30} className="object-cover w-12 h-12 rounded-full" alt="profile" />
                                {username}
                            </p>
                            <p className="flex items-center">
                                <Clock className="mr-2" size={16} /> Published on {formatDate(created_at)}
                            </p>
                        </div>
                        <div className="mt-6">
                            <Button
                                variant="default"
                                size="lg"
                                className="w-full text-black bg-tertiary hover:bg-opacity-80 hover:bg-tertiary"
                            >Contact Agent                            
                            </Button>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg h-[580px]">
                        <h2 className="mb-4 text-xl font-semibold text-secondary">Location</h2>
                        <div className="h-[400px]">
                            <GoogleMapSection
                                coordinates={parsedCoordinates}
                                listing={[{ ...listingDetail, coordinates: parsedCoordinates }]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;