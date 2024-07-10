"use client"
import { supabase } from '@/Utils/supabase/client'
import React, { useEffect, useState } from 'react'
import Slider from '../_components/Slider'
import Details from '../_components/Details'

function ViewListing({ params }) {
    const [listingDetail, setListingDetail] = useState(null)

    useEffect(() => {
        GetListingDetail()
    }, [])

    const GetListingDetail = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select('*, listingImages(url, listing_id)')
            .eq('id', params.id)
            .eq('active', true)

        if (data) {
            setListingDetail(data[0])
        }
    }

    return (
        <div className='p-4 py-3 md:px-32 lg:px-56'>
            {listingDetail ? (
                <>
                    <Slider imageList={listingDetail.listingImages} />
                    <Details listingDetail={listingDetail} />
                </>
            ) : (
                <p></p> // You can replace this with a loader/spinner if you have one
            )}
        </div>
    )
}

export default ViewListing
