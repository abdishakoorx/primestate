import Link from "next/link"
import { Button } from "../ui/button"
import LoadingComponent from "./LoadingComponent"
import { Bath, BedDouble, Edit, Eye, House, LandPlot, MapPin, Trash2 } from "lucide-react"
import { Badge } from "../ui/badge"
import Image from "next/image"

const PropertyListingCard = ({ listing, onDelete }) => {
    return (
        <div className="overflow-hidden transition-colors duration-200 border rounded-lg bg-background border-border hover:border-primary/50">
            {/* Image Section */}
            <div className="relative">
                <Image
                    src={listing?.listingImages?.[0]?.url || '/placeholder.png'}
                    alt={listing.address}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-white bg-green-500">
                        {listing.active ? 'Published' : 'Draft'}
                    </Badge>
                </div>

                {/* Actions Dropdown */}
                <Button size="icon" variant="destructive" className="absolute text-white top-3 right-3" onClick={() => onDelete(listing.id, listing.address)}>
                    <Trash2 className="w-5 h-5" />
                </Button>
            </div>

            {/* Content Section */}
            <div className="p-4">
                {/* Property Type & Price Header */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <House className="w-4 h-4 mr-2 text-primary" />
                        <Badge variant={listing.type === 'Sell' ? 'default' : 'secondary'} className="text-xs">
                            For {listing.type}
                        </Badge>
                    </div>
                    <div className="text-lg font-bold text-primary">
                        Ksh. {listing.price?.toLocaleString()}
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center mb-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="flex-1 text-sm truncate">{listing.address}</span>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="flex items-center justify-center py-2 rounded-md bg-secondary/20">
                        <BedDouble className="w-4 h-4 mr-1 text-primary" />
                        <span className="text-sm font-medium">{listing.bedroom}</span>
                    </div>
                    <div className="flex items-center justify-center py-2 rounded-md bg-secondary/20">
                        <Bath className="w-4 h-4 mr-1 text-primary" />
                        <span className="text-sm font-medium">{listing.bathroom}</span>
                    </div>
                    <div className="flex items-center justify-center py-2 rounded-md bg-secondary/20">
                        <LandPlot className="w-4 h-4 mr-1 text-primary" />
                        <span className="text-sm font-medium">{listing.area} Ft²</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                    <Link href={`/view-listing/${listing.id}`}>
                        <Button variant="outline" size="sm" className="w-full border-black">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                        </Button>
                    </Link>
                    <Link href={`/edit-listing/${listing.id}`}>
                        <Button variant="default" size="sm" className="w-full">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyListingCard



// Loading Skeleton Component
export const PropertyListingCardLoading = () => {
    return (
        <div className="flex items-center justify-center rounded-lg shadow-md bg-card h-96">
            <LoadingComponent
                variant="spinner"
                size="large"
            />
        </div>
    )
}