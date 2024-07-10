"use client"
import React from 'react'
import Header from './_components/Header'
import { LoadScript } from '@react-google-maps/api'
import FooterSection from './(routes)/home/_components/FooterSection'

function Provider({children}) {
  return (
    <div className='text-primary'>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY} libraries={['places']}>
        <Header/>
        <div className='mt-20'>
          {children}
        </div>
        
        </LoadScript>
    </div>
  )
}

export default Provider