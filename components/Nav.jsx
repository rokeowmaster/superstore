import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-blue-200 h-12 flex justify-between'>
        <Image src="/logo.png" width={80} height={50} className="" alt="superstore logo" />
        <ul className='sm:flex hidden m-2 justify-between'>
            <li className='mr-8 mt-2'><a href="">Home</a></li>
            <li className='mr-8 mt-2'><a href="">Cart</a></li>
            <li className='mr-8 mt-2'><a href="">Gift Box</a></li>
            <li className='mr-8 mt-2'><a href="">
            <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg></a>
            </li>
        </ul>
        
        <svg className="w-6 h-6 text-gray-800 dark:text-white mr-8 mt-2 sm:hidden flex" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
        </svg>

        
    </nav>
  )
}

export default Nav