import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import React from 'react'

function AddNewListing() {
  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
      <div className='flex flex-col items-center justify-center gap-5 p-12'>
        <h2 className='text-2xl font-bold'>Add Listing</h2>
        <div className='flex flex-col w-full gap-5 p-5 border rounded-lg shadow-sm'>
          <h2 className='text-gray-500'>Enter the address you want to list</h2>
          <GoogleAddressSearch/>
          <Button className='font-semibold bg-secondary hover:bg-tertiary'>Next</Button>
        </div>
      </div>
    </div>
  )
}

export default AddNewListing