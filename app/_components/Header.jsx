"use client"
import { Button } from '@/components/ui/button'
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const { user, isSignedIn } = useUser()
  const pathname = usePathname();

  const ProtectedLink = ({ href, children }) => {
    return isSignedIn ? (
      <Link href={href}>{children}</Link>
    ) : (
      <Link href="/sign-in">{children}</Link>
    );
  };

  return (
    <div className='fixed top-0 z-10 flex justify-between w-full p-6 px-10 bg-black shadow-sm shadow-quantenary'>
      <div className='flex items-center gap-20'>
        <div className="flex items-center justify-center">
          <Link href={'/'} >
            <Image src='/logo.png' alt='logo' width={120} height={120} 
            />
          </Link>
        </div>
        
        <ul className='hidden gap-10 md:flex'>
          <Link href={'/'} className={`font-medium cursor-pointer hover:text-tertiary ${pathname === '/' ? 'text-tertiary' : ''}`}>
            Home
          </Link>
          <Link href={'/buy'}>
            <li className={`font-medium cursor-pointer hover:text-tertiary ${pathname === '/buy' ? 'text-tertiary' : ''}`}>
              Buy Property
            </li>
          </Link>
          <Link href={'/rent'}>
            <li className={`font-medium cursor-pointer hover:text-tertiary ${pathname === '/rent' ? 'text-tertiary' : ''}`}>
              Rent Property
            </li>
          </Link>
          <Link href={'/agent-finder'}>
            <li className={`font-medium cursor-pointer hover:text-tertiary ${pathname === '/agent-finder' ? 'text-tertiary' : ''}`}>
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      <div className='flex items-center gap-2 md:gap-6'>
        <Link href={isSignedIn ? '/add_new_listing' : 'sign-in'}><Button className='bg-opacity-90 bg-tertiary hover:bg-opacity-100 hover:bg-tertiary'><Plus className='w-5 h-5 ' />Post</Button></Link>
        {isSignedIn ?
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Image src={user?.imageUrl} width={40} height={40} alt='user' className='rounded-full cursor-pointer' /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='cursor-pointer'><Link href={'/user'}>My Listing</Link></DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'> <SignOutButton>Logout</SignOutButton></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          :
          <Link href={'/sign-in'}><Button className='bg-secondary hover:bg-tertiary'>Sign in</Button></Link>}
      </div>
    </div>
  )
}

export default Header