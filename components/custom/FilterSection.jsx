import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Bath, BedDouble, CarFront, Home } from 'lucide-react'

function FilterSection({
    setBedCount,
    setBathCount,
    setParkingCount,
    setHomeType,
    bedCount,
    bathCount,
    parkingCount,
    homeType,
    propertyTypes = [
        'All',
        'Apartment',
        'Bungalow',
        'Single Family House',
        'Bedsitter',
        'Hostel',
        'Villa',
        'Penthouse'
    ]
}) {

    // Helper function to display selected values
    const getDisplayValue = (value, type) => {
        if (!value || value === 'All') return null;

        switch (type) {
            case 'bed':
                return value === '3' ? '3+ Beds' : `${value} Bed${value > 1 ? 's' : ''}`;
            case 'bath':
                return value === '3' ? '3+ Baths' : `${value} Bath${value > 1 ? 's' : ''}`;
            case 'parking':
                return value === '3' ? '3+ Spaces' : `${value} Space${value > 1 ? 's' : ''}`;
            case 'home':
                return value;
            default:
                return value;
        }
    };

    return (
        <div className='flex flex-wrap items-center gap-3 md:gap-4'>

            {/* Bedrooms Filter */}
            <Select value={bedCount} onValueChange={(value) => setBedCount(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[120px] bg-white border-gray-300 hover:border-gray-400 focus:border-blue-500">
                    <BedDouble className='w-4 h-4 mr-2 text-blue-500' />
                    <SelectValue>
                        <span className="text-gray-900">
                            {getDisplayValue(bedCount, 'bed') || 'Any'}
                        </span>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">
                        <div className='flex items-center gap-2'>
                            <span>Any</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="1">
                        <div className='flex items-center gap-2'>
                            <span>1 Bed</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="2">
                        <div className='flex items-center gap-2'>
                            <span>2 Beds</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="3">
                        <div className='flex items-center gap-2'>
                            <span>3+ Beds</span>
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>

            {/* Bathrooms Filter */}
            <Select value={bathCount} onValueChange={(value) => setBathCount(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[120px] bg-white border-gray-300 hover:border-gray-400 focus:border-blue-500">
                    <Bath className='w-4 h-4 mr-2 text-blue-500' />
                    <SelectValue>
                        <span className="text-gray-900">
                            {getDisplayValue(bathCount, 'bath') || 'Any'}
                        </span>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">
                        <div className='flex items-center gap-2'>
                            <span>Any</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="1">
                        <div className='flex items-center gap-2'>
                            <span>1 Bath</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="2">
                        <div className='flex items-center gap-2'>
                            <span>2 Baths</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="3">
                        <div className='flex items-center gap-2'>
                            <span>3+ Baths</span>
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>

            {/* Parking Filter */}
            <Select value={parkingCount} onValueChange={(value) => setParkingCount(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[130px] bg-white border-gray-300 hover:border-gray-400 focus:border-blue-500">
                    <CarFront className='w-4 h-4 text-blue-500' />
                    <SelectValue>
                        <span className="text-gray-900">
                            {getDisplayValue(parkingCount, 'parking') || 'Any'}
                        </span>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">
                        <div className='flex items-center gap-2'>
                            <span>Any</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="1">
                        <div className='flex items-center gap-2'>
                            <span>1 Space</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="2">
                        <div className='flex items-center gap-2'>
                            <span>2 Spaces</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="3">
                        <div className='flex items-center gap-2'>
                            <span>3+ Spaces</span>
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>

            {/* Property Type Filter */}
            <Select value={homeType} onValueChange={(value) => setHomeType(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[160px] bg-white border-gray-300 hover:border-gray-400 focus:border-blue-500">
                    <Home className='w-4 h-4 text-blue-500' />
                    <SelectValue>
                        <span className="text-gray-900">
                            {getDisplayValue(homeType, 'home') || 'All'}
                        </span>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                            <div className='flex items-center gap-2'>
                                <span className="truncate">{type}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default FilterSection