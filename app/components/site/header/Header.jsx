import React from 'react';
import Link from 'next/link';
import SignInMenu from './SignInMenu';
import Logo from './Logo';

function Header() {
  return (
    <header className="w-full top-0 left-0 right-0 z-10 flex items-center justify-between font-mono text-sm lg:flex">
      <div className="flex justify-center items-center w-full bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:bg-zinc-800/30 lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <SignInMenu />
        <Link href='/' className="ml-4 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          Features
        </Link>
        <Link href='/' className="ml-4 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          Pricing
        </Link>
        <Link href='/' className="ml-4 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          News
        </Link>
      </div>

      <div className="flex items-end justify-center h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:w-auto lg:h-auto lg:bg-none">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
