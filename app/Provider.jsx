"use client"
import React from 'react'
import { LoadScript } from '@react-google-maps/api'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'

function Provider({ children }) {
  return (
    <div className='text-primary'>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY} libraries={['places']}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </LoadScript>
    </div>
  )
}

export default Provider