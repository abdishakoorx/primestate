import { Button } from '@/components/ui/button'
import { Bath, BedDouble, MapPin, Ruler, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function MarkerListingItem({ item, closeHandler }) {
    
    return (
        <div>
            <div className='rounded-lg cursor-pointer w-[180px]'>
                <X className='text-black bg-white rounded-full'  onClick={closeHandler}/>
                <Image src={item.listingImages[0].url} alt={item.address} width={800} height={150}
                    className='rounded-lg object-cover h-[120px] w-[180px]'
                />
                <div className='flex flex-col gap-2 p-2 mt-3 bg-black'>
                    <h2 className='text-xl font-bold'>Ksh. {item?.price}</h2>
                    <h2 className='flex gap-2 text-sm text-gray-500'><MapPin className='w-4 h-4 text-secondary' />{item.address}</h2>
                    <div className='flex justify-between gap-2 mt-3'>
                        <h2 className='flex items-center justify-center w-full gap-2 p-2 rounded-md text-md bg-slate-100 text-secondary'><BedDouble className='' />{item?.bedroom}</h2>
                        <h2 className='flex items-center justify-center w-full gap-2 p-2 rounded-md text-md bg-slate-100 text-secondary'><Bath className='' />{item?.bathroom}</h2>
                    </div>
                    
                <Button className='bg-tertiary hover:bg-tertiary'>View Details</Button>
                </div>
            </div>
        </div>
    )
}

export default MarkerListingItem