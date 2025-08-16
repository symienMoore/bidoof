'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'


const menuItem = () => {
  return (
    <>

    </>
   )
}

const Submenu = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  return (
    <div className='sticky top-50'>
      <h1 className='text-xl font-bold'>Welcome, {user?.fullName}</h1>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Submenu
