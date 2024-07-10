"use client"
import { UserButton, UserProfile } from '@clerk/nextjs'
import {  Castle } from 'lucide-react'
import React from 'react'
import UserListing from '../_components/UserListing'

function User() {
  return (
    <div className='flex items-center justify-center bg-black'>
        <UserProfile>
            <UserButton.UserProfilePage label='My Listing' labelIcon ={<Castle className='w-5 h-5'/>} url="my-listing" >
                <UserListing />
            </UserButton.UserProfilePage>
        </UserProfile>
    </div>
  )
}

export default User