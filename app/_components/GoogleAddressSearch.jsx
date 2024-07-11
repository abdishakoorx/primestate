"use client"
import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({selectedAddress, setCoordinates}) {
  return (
    <div className='flex items-center w-full mt-2 text-black'>
      <MapPin className='p-2 rounded-l-lg w-11 h-11 text-primary bg-tertiary' />
      <GooglePlacesAutocomplete className=' h-[44px]' 
        apiKey = {process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          placeholder:'Address',
          isClearable:true,
          className:'w-full',
          onChange:(place)=>{
            selectedAddress(place)
            geocodeByAddress(place.label)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
              setCoordinates({lat, lng})
            })
          }
        }}
      />
    </div>
  )
}

export default GoogleAddressSearch