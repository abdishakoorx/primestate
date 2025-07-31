import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Mail, Building } from "lucide-react";
import Image from "next/image";
import LoadingComponent from "./LoadingComponent";
import Link from "next/link";

// Default static data for missing information
const DEFAULT_SPECIALTIES = ["Luxury", "Commercial", "Residential"];
const DEFAULT_RATING = 4.5;
const DEFAULT_REVIEW_COUNT = 127;
const DEFAULT_LOCATION = "Nairobi, Kenya";
const DEFAULT_PHONE = "+254 700 123 456";

const AgentCard = ({
    id,
    username,
    profileImage,
    createdby,
    listingCount,
    // Optional props that can override defaults
    specialties = DEFAULT_SPECIALTIES,
    rating = DEFAULT_RATING,
    reviewCount = DEFAULT_REVIEW_COUNT,
    location = DEFAULT_LOCATION,
    phone = DEFAULT_PHONE,
}) => {

    return (
        <div className="p-6 transition-all duration-200 rounded-lg shadow-md bg-card hover:shadow-lg">
            {/* Agent Header */}
            <div className="flex items-center mb-4 space-x-4">
                <Image
                    src={profileImage || "/placeholder.png"}
                    alt={username || 'Agent'}
                    width={64}
                    height={64}
                    className="object-cover w-16 h-16 border-2 rounded-full border-primary/20"
                />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                        {username || 'Real Estate Agent'}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center mt-1 space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{rating}</span>
                        <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
                    </div>
                </div>
            </div>

            {/* Specialties */}
            <div className="mb-4">
                <h4 className="mb-2 text-sm font-medium text-foreground">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="p-3 mb-4 rounded-lg bg-muted">
                <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                        {listingCount || 0}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {listingCount === 1 ? 'Property Listed' : 'Properties Listed'}
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="mb-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{phone}</span>
                </div>
                {createdby && (
                    <div className="flex items-center space-x-2 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate text-muted-foreground">{createdby}</span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
                <Button variant="default" size="sm" className="flex-1">
                    Contact Agent
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link href={`/buy`}>
                        View Properties
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default AgentCard;

// Individual Agent Card Loading Component
export const AgentCardLoading = () => {
    return (
        <div className="flex items-center justify-center rounded-lg shadow-md bg-card h-80">
            <LoadingComponent
                variant="spinner"
                size="large"
            />
        </div>
    );
};