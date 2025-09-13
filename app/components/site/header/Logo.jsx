import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <>
    <Link
          className="pointer-events-none flex items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/assets/images/express-tech-software.png"
            alt="ExpressTechsoftware"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
    </>
  )
}

export default Logo