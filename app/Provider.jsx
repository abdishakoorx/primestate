"use client"
import React from 'react'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'
import { usePathname } from 'next/navigation'

function Provider({ children }) {
  const pathname = usePathname()

  // Define routes where header and footer should be hidden
  const authRoutes = ['/sign-in', '/sign-up']

  // Check if current path is an auth route
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
  return (
    <div className='text-primary'>
      {!isAuthRoute && <Header />}
      <div>
        {children}
      </div>
      {!isAuthRoute && <Footer />}
    </div>
  )
}

export default Provider