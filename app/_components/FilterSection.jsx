import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Bath, BedDouble, CarFront } from 'lucide-react'

function FilterSection({ setBedCount, setBathCount, setParkingCount, setHomeType, bedCount, bathCount, parkingCount, homeType }) {
    return (
        <div className='grid grid-cols-4 py-3 ml-3 md:p-4 md:gap-5 '>
            <Select value={bedCount} onValueChange={(value) => setBedCount(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[70px] md:w-[100px] bg-gray-900">
                    <SelectValue placeholder="Bed" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="1"><h2 className='flex gap-2'><BedDouble className='w-5 h-5 text-secondary' />1</h2></SelectItem>
                    <SelectItem value="2"><h2 className='flex gap-2'><BedDouble className='w-5 h-5 text-secondary' />2</h2></SelectItem>
                    <SelectItem value="3"><h2 className='flex gap-2'><BedDouble className='w-5 h-5 text-secondary' />3+</h2></SelectItem>
                </SelectContent>
            </Select>
            <Select value={bathCount} onValueChange={(value) => setBathCount(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[70px] md:w-[100px] bg-gray-900 ">
                    <SelectValue placeholder="Bath" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="1"><h2 className='flex gap-2'><Bath className='w-5 h-5 text-secondary' />1</h2></SelectItem>
                    <SelectItem value="2"><h2 className='flex gap-2'><Bath className='w-5 h-5 text-secondary' />2</h2></SelectItem>
                    <SelectItem value="3"><h2 className='flex gap-2'><Bath className='w-5 h-5 text-secondary' />3+</h2></SelectItem>
                </SelectContent>
            </Select>
            <Select value={parkingCount} onValueChange={(value) => setParkingCount(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[70px] md:w-[100px] bg-gray-900">
                    <SelectValue placeholder="Parking" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="1"><h2 className='flex gap-2'><CarFront className='w-5 h-5 text-secondary' />1</h2></SelectItem>
                    <SelectItem value="2"><h2 className='flex gap-2'><CarFront className='w-5 h-5 text-secondary' />2</h2></SelectItem>
                    <SelectItem value="3"><h2 className='flex gap-2'><CarFront className='w-5 h-5 text-secondary' />3+</h2></SelectItem>
                </SelectContent>
            </Select>
            <Select value={homeType} onValueChange={(value) => setHomeType(value === 'All' ? null : value)}>
                <SelectTrigger className="w-[65px] md:w-[100px] bg-gray-900">
                    <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="Bungalow">Bungalow</SelectItem>
                    <SelectItem value="Single Family House">Single Family House</SelectItem>
                    <SelectItem value="Bedsitter">Bedsitter</SelectItem>
                    <SelectItem value="Hostel">Hostel</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Penthouse">Penthouse</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default FilterSection