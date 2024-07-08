import { Bath, BedDouble, BedDoubleIcon, MapPin, Ruler } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Listing({ listing }) {
  return (
    <div>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
        {listing?.length > 0 ? listing.map((item, index) => (
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
        ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div>
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
      ))
        }
    </div>
    </div >
  )
}

export default Listing