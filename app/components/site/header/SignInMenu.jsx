
import React from 'react'
import Link from 'next/link'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignOutButton from '../signoutbutton/SignOutButton'

export default async function SignInMenu() {

  const   session = await getServerSession(authOptions)
  return (
  <>
  {session?.user ? (
        <>
        <SignOutButton />
        <Link href="/admin" className="text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Admin
        </Link>
        
        </>
  ) :
  (
    <>
    <Link href="/login" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign In</button>
    </Link>
        <Link href="/register" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        {/* <button>{JSON.stringify(session)}</button> */}
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>
      </Link>
      </>
    
  )
}

</>
)
}
