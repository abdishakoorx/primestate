"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Grid, List, Home, CircleDollarSign } from "lucide-react";
import { supabase } from '@/Utils/supabase/client';
import FilterSection from '@/components/custom/FilterSection';
import PropertyCard, { NoPropertiesFound, PropertyCardLoading } from "@/components/custom/PropertyCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Buy = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bedCount, setBedCount] = useState(0);
  const [bathCount, setBathCount] = useState(0);
  const [parkingCount, setParkingCount] = useState(0);
  const [homeType, setHomeType] = useState();
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    getLatestListing();
  }, []);

  const getLatestListing = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('listing')
      .select('* , listingImages(url, listing_id)')
      .eq('active', true)
      .eq('type', 'Sell')
      .order('id', { ascending: false });

    if (data) {
      setListing(data);
    }
    setLoading(false);
  };

  const handleSearchClick = async () => {
    setLoading(true);
    let query = supabase
      .from('listing')
      .select('*, listingImages(url, listing_id)')
      .eq('active', true)
      .eq('type', 'Sell')
      .order('id', { ascending: false });

    if (bedCount && bedCount !== 'All') {
      query = query.gte('bedroom', bedCount === '3' ? 3 : parseInt(bedCount));
    }
    if (bathCount && bathCount !== 'All') {
      query = query.gte('bathroom', bathCount === '3' ? 3 : parseInt(bathCount));
    }
    if (parkingCount && parkingCount !== 'All') {
      query = query.gte('parking', parkingCount === '3' ? 3 : parseInt(parkingCount));
    }
    if (homeType && homeType !== 'All') {
      query = query.eq('propertyType', homeType);
    }
    if (searchQuery.trim()) {
      query = query.ilike('address', `%${searchQuery}%`);
    }
    if (priceRange && priceRange !== '') {
      if (priceRange === '5000000+') {
        query = query.gte('price', 5000000);
      } else {
        const [min, max] = priceRange.split('-').map(Number);
        query = query.gte('price', min).lte('price', max);
      }
    }

    const { data, error } = await query;
    if (data) {
      setListing(data);
    }
    setLoading(false);
  };

  const propertyTypes = [
    'All',
    'Apartment',
    'Bungalow',
    'Single Family House',
    'Bedsitter',
    'Hostel',
    'Villa',
    'Penthouse'
  ];

  const clearFilters = () => {
    setSearchQuery("");
    setBedCount(0);
    setBathCount(0);
    setParkingCount(0);
    setHomeType();
    setPriceRange("");
    getLatestListing();
  };

  // Helper function to display selected values
  const getPriceRangeDisplay = (value) => {
    if (!value) return null;

    switch (value) {
      case "0-1000000":
        return "Under Ksh 1M";
      case "1000000-3000000":
        return "Ksh 1M - 3M";
      case "3000000-5000000":
        return "Ksh 3M - 5M";
      case "5000000+":
        return "Over Ksh 5M";
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Properties for Sale
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Find your dream home from our extensive collection of verified properties
            </p>

            {/* Enhanced Search Bar with Integrated Filters */}
            <div className="max-w-6xl p-6 mx-auto shadow-xl bg-white/95 backdrop-blur-sm rounded-2xl">
              {/* Main Search Row */}
              <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-4">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Search location, property type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Select
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                >
                  <SelectTrigger className="w-full h-12 text-black">
                    <CircleDollarSign className="w-5 h-5 mr-2 text-blue-500" />
                    <SelectValue>
                      <span className="text-gray-900">
                        {getPriceRangeDisplay(priceRange) || "Price Range"}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1000000">Under Ksh 1M</SelectItem>
                    <SelectItem value="1000000-3000000">Ksh 1M - 3M</SelectItem>
                    <SelectItem value="3000000-5000000">Ksh 3M - 5M</SelectItem>
                    <SelectItem value="5000000+">Over Ksh 5M</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  size="lg"
                  className="h-12 bg-blue-600 hover:bg-blue-700"
                  onClick={handleSearchClick}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>

              {/* Filter Section */}
              <div className="pt-4 border-t border-gray-200">
                <FilterSection
                  setBedCount={setBedCount}
                  setBathCount={setBathCount}
                  setParkingCount={setParkingCount}
                  setHomeType={setHomeType}
                  bedCount={bedCount}
                  bathCount={bathCount}
                  parkingCount={parkingCount}
                  homeType={homeType}
                  propertyTypes={propertyTypes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              {loading ? "Loading..." : `${listing.length} properties found`}
            </Badge>
            {(searchQuery || bedCount || bathCount || parkingCount || homeType || priceRange) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </Button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex border rounded-lg border-input">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <PropertyCardLoading key={item} />
            ))}
          </div>
        ) : listing.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="p-6 mb-6 bg-gray-100 rounded-full">
              <Home className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">No Properties Found</h3>
            <p className="max-w-md mb-6 text-gray-600">
              We couldn't find any properties matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <Button onClick={clearFilters} variant="outline" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Clear Filters & Show All
            </Button>
          </div>
        ) : (
          <div className={`grid gap-6 ${viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
            }`}>
            {listing.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.propertyType}
                price={`Ksh ${property.price?.toLocaleString()}`}
                location={property.address}
                bedrooms={property.bedroom}
                bathrooms={property.bathroom}
                area={`${property.area} Ft²`}
                type="Sell"
                imageUrl={property.listingImages?.[0]?.url || "/placeholder.png"}
                builtIn={property.builtIn}
                lotSize={property.area}
                propertyType={property.propertyType}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;