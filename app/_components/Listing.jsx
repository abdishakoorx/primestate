import { Bath, BedDouble, MapPin, Ruler, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import GoogleAddressSearch from './GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import FilterSection from './FilterSection'
import Link from 'next/link'

function Listing({ listing, handleSearchClick, searchedAddress, setBedCount, setBathCount, setHomeType, setParkingCount, setCoordinates }) {
  const [address, setAddress] = useState()
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    handleSearchClick()
    setShowResults(true)
  }

  return (
    <div>
      <div className='flex items-stretch gap-4 p-3 '>
        <div className='flex-grow'>
          <GoogleAddressSearch
            selectedAddress={(v) => { searchedAddress(v); setAddress(v); setShowResults(false) }}
            setCoordinates={setCoordinates}
          />
        </div>
        <Button
          onClick={handleSearch}
          className='flex items-center self-end gap-2 text-black bg-secondary hover:bg-secondary'
        >
          <Search className='w-4 h-4' />Search
        </Button>
      </div>
      <FilterSection setBedCount={setBedCount} setBathCount={setBathCount} setParkingCount={setParkingCount} setHomeType={setHomeType} />
      {showResults && address &&
        <div className='px-3 my-6'>
          <h2 className='text-lg'><span className='font-bold'>{listing?.length}</span> results in <span className='text-secondary'>{address?.label}</span></h2>
        </div>}
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        {listing?.length > 0 ? listing.map((item, index) => (
          <Link href={'/view-listing/' + item.id}>
            <div key={index} className='p-3 rounded-lg cursor-pointer hover:border hover:border-primary'>
              <Image src={item.listingImages[0].url} alt={item.address} width={800} height={150}
                className='rounded-lg object-cover h-[180px]'
              />
              <div className='flex flex-col gap-2 mt-3'>
                <h2 className='text-xl font-bold'>Ksh. {item?.price}</h2>
                <h2 className='flex gap-2 text-sm text-gray-500'><MapPin className='w-4 h-4 text-secondary' />{item.address}</h2>
                <div className='flex justify-between gap-2 mt-3'>
                  <h2 className='flex items-center justify-center w-full gap-2 p-2 rounded-md text-md bg-slate-100 text-secondary'><BedDouble className='' />{item?.bedroom}</h2>
                  <h2 className='flex items-center justify-center w-full gap-2 p-2 rounded-md text-md bg-slate-100 text-secondary'><Bath className='' />{item?.bathroom}</h2>
                  <h2 className='flex items-center justify-center w-full gap-2 p-2 rounded-md text-md bg-slate-100 text-secondary'><Ruler className='' />{item?.area} Ft²</h2>
                </div>
              </div>
            </div>
          </Link>
        ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index}>
              <div className='animate-pulse bg-slate-100 h-[180px] rounded-lg'></div>
              <div className='flex flex-col gap-2 mt-3'>
                <div className='w-1/2 h-4 rounded-lg animate-pulse bg-slate-100'></div>
                <div className='w-3/4 h-4 rounded-lg animate-pulse bg-slate-100'></div>
                <div className='flex justify-between gap-2 mt-3'>
                  <div className='w-1/3 h-8 rounded-lg animate-pulse bg-slate-100'></div>
                  <div className='w-1/3 h-8 rounded-lg animate-pulse bg-slate-100'></div>
                  <div className='w-1/3 h-8 rounded-lg animate-pulse bg-slate-100'></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Listing