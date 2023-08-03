'use client'

import {CgDarkMode} from 'react-icons/cg'
import Link from 'next/link'
import { useState } from 'react'
export default  () => 
{
  const [DarkMode , setDarkMode] = useState(true)
    return (
     <div className={DarkMode ? "dark" : ""}>
     <nav className='relative py-4 md:px-8  top-0 w-full bg-white shadow-sm z-50 dark:bg-black'>
            <div className='container mx-auto w-3/4  flex items-center justify-between'>
              <Link href='/' className='text-4xl font-bold text-red-600'>Kirat</Link>
                <div className='flex flex-col gap-1 md:hidden cursor-pointer'>
                  <span className='  w-10 h-1 bg-black '></span>
                  <span className='  w-10 h-1 bg-black '></span>
                  <span className='  w-10 h-1 bg-black '></span>
                  
                </div>
              <ul className='hidden items-center gap-6 flex-col absolute md:static md:flex-row  shadow-md md:shadow-none top-[67px] right-0 w-full md:w-fit z-30 py-4  md:flex dark:text-white'>
                <li className='font-bold capitalize hover:text-black transition-all text-gray-600 active:border active:text-red-600 dark:text-white'>
                    <Link href="/">Home</Link>
                </li>
                <li className='font-bold capitalize hover:text-black transition-all text-gray-600 dark:text-white'>
                    <Link href="/about">About</Link>
                </li>
                <li className='font-bold capitalize hover:text-black transition-all text-gray-600 dark:text-white'>
                    <Link href="/services">Services</Link>
                </li>
                <li className='font-bold capitalize hover:text-black transition-all text-gray-600 dark:text-white'>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className='font-bold capitalize hover:text-black transition-all text-gray-600 dark:text-white md:bg-red-600 md:px-4 md:py-2  rounded-md md:text-white '>
                    <Link href="/contact">Contact me</Link>
                </li>
                <li>
                  <CgDarkMode className='text-2xl cursor-pointer' />
                </li>
              </ul>
            </div>
          </nav>
     </div> 
    )
}