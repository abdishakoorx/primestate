"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Bath, Bed, Calendar, Heart, MapPin, Square } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import LoadingComponent from "./LoadingComponent";

const PropertyCard = ({
    id,
    propertyType,
    price,
    location,
    bedrooms,
    bathrooms,
    lotSize,
    builtIn,
    type,
    imageUrl,
    agent,
}) => {
    return (
        <div className="overflow-hidden transition-all duration-200 rounded-lg shadow-md bg-card hover:shadow-lg group">
            <Link href={`/view-listing/${id}`}>
                <div className="relative">
                    <Image
                        src={imageUrl || "/placeholder.png"}
                        alt={propertyType}
                        height={300}
                        width={400}
                        className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                        <Badge variant={type === "Sell" ? "default" : "secondary"}>
                            For {type === "Sell" ? "Sell" : "Rent"}
                        </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                        <div className="px-3 py-1 font-semibold rounded-lg bg-primary text-primary-foreground">
                            {price}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold transition-colors text-foreground hover:text-primary line-clamp-2">
                        {propertyType}
                    </h3>

                    <div className="flex items-center mb-3 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{location}</span>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <Bed className="w-4 h-4 mr-1" />
                                <span>{bedrooms}</span>
                            </div>
                            <div className="flex items-center">
                                <Bath className="w-4 h-4 mr-1" />
                                <span>{bathrooms}</span>
                            </div>
                            <div className="flex items-center">
                                <Square className="w-4 h-4 mr-1" />
                                <span>{lotSize}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{builtIn}</span>
                            </div>
                        </div>
                    </div>

                    {/* Agent Info */}
                    {agent && (
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={agent.avatar || "/placeholder.png"}
                                    alt={agent.name}
                                    height={24}
                                    width={24}
                                    className="w-6 h-6 rounded-full"
                                />
                                <span className="text-sm text-muted-foreground">{agent.name}</span>
                            </div>
                            <Link href={`/view-listing/${id}`}>
                                <Button variant="outline" size="sm">
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default PropertyCard;

// Individual Property Card Loading Component
export const PropertyCardLoading = () => {
    return (
        <div className="flex items-center justify-center rounded-lg shadow-md bg-card h-96">
            <LoadingComponent
                variant="spinner"
                size="large"
            />
        </div>
    );
};
