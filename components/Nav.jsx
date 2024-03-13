import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <nav className='bg-blue-200 h-12 fixed flex w-full z-20 justify-between'>
        <Image src="/logo.png" width={80} height={50} className="" alt="superstore logo" />
        <ul className='sm:flex hidden m-2 justify-between'>
            <li className='mr-8 mt-2'><a href="/">Home</a></li>
            <li className='mr-8 mt-2'><a href="/cart">Cart</a></li>
            <li className='mr-8 mt-2'><a href="/gift">Gift Box</a></li>
            <li className='mr-8 mt-2'><a href="/sign-in">Login</a></li>
            <li className='mr-8 mt-2'><a href="/sign-up">Signup</a></li>
            <li className='mr-8 mt-2'><a href="/profile">
            <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg></a>
            </li>
            <li><UserButton /></li>
        </ul>
        <button data-collapse-toggle="navbar-hamburger" type="button" className="sm:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        
        
    </nav>
  )
}

export default Nav