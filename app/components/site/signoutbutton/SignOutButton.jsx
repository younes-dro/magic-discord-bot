"use client";
import Link from "next/link";
import React from "react";
// import { signOut } from './auth';
// import { useRouter } from 'next/navigation';

const SignOutButton = () => {
  // const router = useRouter();

  // const handleSignOut = async () => {
  //   alert('sigout 1')
  //   await signOut();
  //   alert('sigout 2')
  //   router.push('/')
  // };

  return (
    <Link href="/api/auth/signout">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign Out
      </button>
    </Link>
  );
};

export default SignOutButton;
