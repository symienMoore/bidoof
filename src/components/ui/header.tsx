'use client'
import React from 'react'
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton} from '@clerk/nextjs'




// const UserSigninedIn = () =>{
//   const {user} = useUser()
//   return(
//     <>
//       welcome, {user?.firstName}
//     </>
//   )
// }

const Header = () => {
  return (
    <>
     <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
               Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
           <UserButton />
        </SignedIn>
      </header>
      {/* <UserSigninedIn /> */}
      {/* <div>
        <h3>Welcome {user}</h3>
      </div> */}
    </>
  )
}

export default Header