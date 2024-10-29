"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { Plus, Menu, X } from 'lucide-react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };


  const NavItem = ({ href, children }) => (
    <Link href={href} onClick={handleLinkClick}>
      <li className={`font-medium cursor-pointer hover:text-tertiary ${pathname === href ? 'text-tertiary' : ''}`}>
        {children}
      </li>
    </Link>
  );

  return (
    <div className='fixed top-0 z-10 w-full bg-black shadow-sm shadow-quantenary'>
      <div className='flex items-center justify-between p-6 md:px-10'>
        <div className="flex items-center gap-20">
          <Link href={'/'}>
            <Image src='/logo.png' alt='logo' width={120} height={120} />
          </Link>
          
          <ul className='hidden gap-10 md:flex'>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/buy">Buy Property</NavItem>
            <NavItem href="/rent">Rent Property</NavItem>
            <NavItem href="/agent-finder">Agent Finder</NavItem>
          </ul>
        </div>
        
        <div className='flex items-center gap-2 md:gap-6'>
          <Link href={isSignedIn ? '/add_new_listing' : 'sign-in'}>
            <Button className='bg-tertiary hover:bg-tertiary'>
              <Plus className='w-5 h-5 mr-1' />Post
            </Button>
          </Link>
          
          {isSignedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image src={user?.imageUrl} width={40} height={40} alt='user' className='rounded-full cursor-pointer' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'><Link href={'/user'}>My Listing</Link></DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'><SignOutButton>Logout</SignOutButton></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={'/sign-in'}><Button className='bg-secondary hover:bg-secondary'>Sign in</Button></Link>
          )}
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/buy">Buy Property</NavItem>
            <NavItem href="/rent">Rent Property</NavItem>
            <NavItem href="/agent-finder">Agent Finder</NavItem>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header