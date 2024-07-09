"use client"
import React, { useEffect, useState } from 'react'
import Listing from './Listing'
import { supabase } from '@/Utils/supabase/client'


function ListingViewMap({type}) {
    const [listing, setListing] = useState([])
    const [searchedAddress, setSearchedAddress] = useState()
    const [bedCount, setBedCount] = useState(0)
    const [bathCount, setBathCount] = useState(0)
    const [parkingCount, setParkingCount] = useState(0)
    const [homeType, setHomeType] = useState()
    useEffect(()=>{
        getLatestListing()
    },[])
    const getLatestListing = async()=>{
        const {data,error} = await supabase
        .from ('listing')
        .select('* , listingImages(url, listing_id)')
        .eq('active', true)
        .eq('type',  type)
        .order('id', {ascending:false})

        if (data)
        {
            setListing(data)
        }
        if (error) {
            window.location.reload();
        }
    }

    const handleSearchClick = async () => {
        const searchTerm = searchedAddress?.value?.structured_formatting?.main_text || ''
        
        let query = supabase
            .from('listing')
            .select('*, listingImages(url, listing_id)')
            .eq('active', true)
            .eq('type', type)
            .order('id', { ascending: false })
    
        if (bedCount && bedCount !== 'All') {
            query = query.gte('bedroom', bedCount === '3' ? 3 : parseInt(bedCount))
        }
        if (bathCount && bathCount !== 'All') {
            query = query.gte('bathroom', bathCount === '3' ? 3 : parseInt(bathCount))
        }
        if (parkingCount && parkingCount !== 'All') {
            query = query.gte('parking', parkingCount === '3' ? 3 : parseInt(parkingCount))
        }
        if (homeType && homeType !== 'All') {
            query = query.eq('propertyType', homeType)
        }
        if (searchTerm) {
            query = query.ilike('address', `%${searchTerm}%`)
        }
    
        const { data, error } = await query
    
        if (data) {
            setListing(data)
        }
        if (error) {
            window.location.reload();
        }
    }


  return (
    <div className='grid grid-cols-1 p-10 px-10 md:grid-cols-2'>
        <div>
            <Listing listing={listing} handleSearchClick={handleSearchClick} searchedAddress={(v)=> setSearchedAddress(v)} setBedCount={setBedCount} setBathCount={setBathCount} setParkingCount={setParkingCount} setHomeType={setHomeType}/>
        </div>

        <div>
            Map
        </div>
    </div>
  )
}

export default ListingViewMap