"use client"
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import { supabase } from '@/Utils/supabase/client'
import { useUser } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner'

function AddNewListing() {
  const [selectedAddress, setSelectedAddress] = useState()
  const [coordinates, setCoordinates] = useState()
  const {user} = useUser()
  const [loading, setLoading] = useState(false)
  const nextHandler = async() =>{
    setLoading(true)
    const { data, error } = await supabase
    .from('listing')
    .insert([
      { address: selectedAddress.label, 
        coordinates: coordinates, 
        createdby: user?.primaryEmailAddress.emailAddress },
    ])
    .select();
    if (data){
      setLoading(false)
      console.log("New data added",data);
      toast('New listing added successfully')
    }
    if (error){
      setLoading(false)
      console.log("Error",error);
      toast('Server side error')
    }
            
  }
  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
      <div className='flex flex-col items-center justify-center gap-5 p-12'>
        <h2 className='text-2xl font-bold'>Add Listing</h2>
        <div className='flex flex-col w-full gap-5 p-5 border rounded-lg shadow-sm'>
          <h2 className='text-gray-500'>Enter the address you want to list</h2>
          <GoogleAddressSearch
            selectedAddress={(value) =>setSelectedAddress(value)}
            setCoordinates={(value) => setCoordinates(value)}
          />
          <Button className='font-semibold bg-secondary hover:bg-tertiary'
          onClick={nextHandler} disabled={!selectedAddress || !coordinates || loading}>
          {loading?<Loader className='animate-spin'/>:'Next'}</Button>
        </div>
      </div>
    </div>
  )
}

export default AddNewListing