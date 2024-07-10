import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function User() {
  return (
    <div className='flex items-center justify-center bg-black'>
        <UserProfile/>
    </div>
  )
}

export default User