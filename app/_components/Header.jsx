"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Header() {
  const {user, isSignedIn}=useUser()

  return (
    <div className='fixed top-0 z-10 flex justify-between w-full p-6 px-10 shadow-sm bg-bgprimary shadow-quantenary'>
      <div className='flex items-center gap-20'>
        <Image src='/logo.png' alt='logo' width={150} height={150}/>

        <ul className='hidden gap-10 md:flex'>
          <li className='font-medium cursor-pointer hover:text-tertiary'>Buy Property</li>
          <li className='cursor-pointer hover:text-tertiary'>Rent Property</li>
          <li className='cursor-pointer hover:text-tertiary'>Agent Finder</li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <Link href={'/add_new_listing'}><Button className='gap-1 bg-secondary hover:bg-tertiary'><Plus className='w-5 h-5'/>Post Ad</Button></Link>
        {isSignedIn?
        <UserButton/> : <Link href={'/sign-up'}><Button className='bg-secondary hover:bg-tertiary'>Sign in</Button></Link>}
      </div>
    </div>
  )
}

export default Header