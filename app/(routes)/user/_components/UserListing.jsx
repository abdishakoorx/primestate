import { Button } from '@/components/ui/button'
import { supabase } from '@/Utils/supabase/client'
import { useUser } from '@clerk/nextjs'
import { Bath, BedDouble, LandPlot, MapPin, Ruler, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function UserListing() {
    const { user } = useUser()
    const [userListing, setUserListing] = useState()

    useEffect(() => {
        user && GetUserListing()
    }, [user])

    const GetUserListing = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select('*, listingImages(url, listing_id)')
            .eq('createdby', user?.primaryEmailAddress.emailAddress)
            .eq('active', true)
        console.log(data)
        setUserListing(data)
    }

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {userListing?.length > 0 ? userListing.map((item, index) => (
                <div key={index} className='relative p-3 my-4 bg-black rounded-lg cursor-pointer hover:border hover:border-primary'>
                    <div className='relative'>
                        <Image src={item?.listingImages[0] ? item?.listingImages[0].url : '/placeholder.png'} alt={item.address} width={800} height={150}
                            className='rounded-lg object-cover h-[180px] w-full'
                        />
                        <div className='absolute top-0 left-0 px-2 py-1 text-sm text-gray-900 rounded-tl-lg rounded-br-lg bg-tertiary'>
                            {item.active ? 'Published' : 'Draft'}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-3'>
                        <h2 className='text-xl font-bold text-primary'>Ksh. {item?.price}</h2>
                        <h2 className='flex gap-2 text-sm text-gray-500'><MapPin className='w-4 h-4 text-tertiary' />{item.address}</h2>
                        <div className='flex justify-between gap-2 mt-3'>
                            <h2 className='flex items-center justify-center w-full gap-2 p-2 text-gray-900 rounded-md bg-slate-100 text-md'><BedDouble className='' />{item?.bedroom}</h2>
                            <h2 className='flex items-center justify-center w-full gap-2 p-2 text-gray-900 rounded-md bg-slate-100 text-md'><Bath className='' />{item?.bathroom}</h2>
                            <h2 className='flex items-center justify-center w-full gap-2 p-2 text-gray-900 rounded-md bg-slate-100 text-md'><LandPlot className='' />{item?.area} Ft²</h2>
                        </div>
                        <div className='flex gap-2 my-3'>
                            <Link href={'/view-listing/'+item.id} className='w-full'><Button size="sm" varinat='outline' className='w-full text-black'>View</Button></Link>
                            <Link href={'/edit-listing/'+item.id} className='w-full'><Button size="sm" className='w-full bg-secondary hover:bg-secondary'>Edit</Button></Link>
                            <Button size="sm" variant='destructive'><Trash /></Button>
                        </div>
                    </div>
                </div>
            )) :
                [1, 2, 3, 4].map((item, index) => (
                    <div key={index}>
                        <div className='animate-pulse bg-gray-600 h-[180px] rounded-lg my-4'></div>
                        <div className='flex flex-col gap-2 mt-3'>
                            <div className='w-1/2 h-4 bg-gray-600 rounded-lg animate-pulse'></div>
                            <div className='w-3/4 h-4 bg-gray-600 rounded-lg animate-pulse'></div>
                            <div className='flex justify-between gap-2 mt-3'>
                                <div className='w-1/3 h-8 bg-gray-600 rounded-lg animate-pulse'></div>
                                <div className='w-1/3 h-8 bg-gray-600 rounded-lg animate-pulse'></div>
                                <div className='w-1/3 h-8 bg-gray-600 rounded-lg animate-pulse'></div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='w-2/5 h-8 bg-gray-600 rounded-lg animate-pulse'></div>
                                <div className='w-2/5 h-8 bg-gray-600 rounded-lg animate-pulse'></div>
                                <div className='w-1/5 h-8 bg-gray-600 rounded-lg animate-pulse'></div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default UserListing