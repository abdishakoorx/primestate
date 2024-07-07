"use client"
import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({selectedAddress, setCoordinates}) {
  return (
    <div className='flex items-center w-full gap-4 mt-2 text-black'>
      <MapPin className='w-12 h-12 p-2 rounded-l-lg text-primary bg-tertiary' />
      <GooglePlacesAutocomplete 
        apiKey = {process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          placeholder:'Search property address',
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