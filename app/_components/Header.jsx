"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function Header() {
  const { user, isSignedIn } = useUser()
  const pathname = usePathname();

  return (
    <div className='fixed top-0 z-10 flex justify-between w-full p-6 px-10 bg-black shadow-sm shadow-quantenary'>
      <div className='flex items-center gap-20'>
        <Image src='/logo.png' alt='logo' width={150} height={150} />
        <ul className='hidden gap-10 md:flex'>
          <Link href={'/'}>
            <li className={`font-medium cursor-pointer hover:text-tertiary ${pathname === '/' ? 'text-tertiary' : ''}`}>
              Buy Property
            </li>
          </Link>
          <Link href={'/rent'}>
            <li className={`font-medium cursor-pointer hover:text-tertiary ${pathname === '/rent' ? 'text-tertiary' : ''}`}>
              Rent Property
            </li>
          </Link>
          <Link href={'/'}>
            <li className={`font-medium cursor-pointer hover:text-tertiary ${pathname === '/agent-finder' ? 'text-tertiary' : ''}`}>
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <Link href={'/add_new_listing'}><Button className='gap-1 bg-secondary hover:bg-tertiary'><Plus className='w-5 h-5' />Post Ad</Button></Link>
        {isSignedIn ?
          <UserButton /> : <Link href={'/sign-up'}><Button className='bg-secondary hover:bg-tertiary'>Sign in</Button></Link>}
      </div>
    </div>
  )
}

export default Header