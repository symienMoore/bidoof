"use client";
import React from 'react'
// import { TestApi} from '../../convex/messages';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import Link from 'next/link';
import { api } from '../../convex/_generated/api';
import { motion } from "motion/react"
import { Menu } from '@/components/documentList';




// display page for users not logged in o r with no account
const UserSignIn = () => {
  const m = useQuery(api.messages.fetchData)
  console.log(m);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to Pressto!</h1>
      <p className="text-lg mb-6">Please sign in or create an account to continue.</p>
      <div className="flex gap-4">
        {/* Sign In and Sign Up buttons will be added here */}
        {/* Example usage: <button onClick={fetchData}>Fetch Data</button> */}
        {/* <button onClick={TestApi}>try me</button> */}
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
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
        className="p-2 bg-purple-500 text-white rounded font-bold">
        <Link href="/dashboard">go to dashboard</Link>
      </motion.button>
    </div>
  )
}

const Page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user, isSignedIn, isLoaded);
  return (
    <div>
        <Menu/>
        {user ? UserWelcome() : UserSignIn()}
    </div>
  )
}

export default Page
