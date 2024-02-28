import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-blue-200 h-12 flex justify-between'>
        <Image src="/logo.png" width={80} height={50} className="" alt="superstore logo" />
        <ul className='flex m-2'>
            <li>user</li>
        </ul>
    </nav>
  )
}

export default Nav