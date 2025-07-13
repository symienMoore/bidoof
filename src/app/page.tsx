"use client";
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

// display page for users not logged in o r with no account
const UserSignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to Bidoof!</h1>
      <p className="text-lg mb-6">Please sign in or create an account to continue.</p>
      <div className="flex gap-4">
        {/* Sign In and Sign Up buttons will be added here */}
      </div>
    </div>
  )
}

const UserWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
      <p className="text-lg mb-6">You are logged in. Enjoy your stay!</p>
      {/* Additional user-specific content can be added here */}
      <button className="p-2 bg-purple-500 text-white rounded font-bold">
        <Link href="/dashboard">go to dashboard</Link>
      </button>
    </div>
  )
}

const Page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user, isSignedIn, isLoaded);
  return (
    <div>
        {user ? UserWelcome() : UserSignIn()}
    </div>
  )
}

export default Page
