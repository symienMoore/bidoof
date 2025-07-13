import React from 'react'

// display page for users not logged in o r with no account
const userSignIn = () => {
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

const userWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
      <p className="text-lg mb-6">You are logged in. Enjoy your stay!</p>
      {/* Additional user-specific content can be added here */}
    </div>
  )
}

const page = () => {
    const user = null; // Replace with actual user state from Clerk or your auth provider
  return (
    <div>
        {user ? userSignIn() : userWelcome()}
    </div>
  )
}

export default page