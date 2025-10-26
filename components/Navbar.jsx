import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <nav className=' w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
        <Link href={'#top'}>
        <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14'/>
        </Link>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
            <li><Link  href={"#top"} className='font-[var(--font-ovo)]'>Home</Link></li>
            <li><Link  href={"#aboout"}>About</Link></li>
            <li><Link  href={"#services"}>Services</Link></li>
            <li><Link  href={"#work"}>My work</Link></li>
            <li><Link  href={"#contact"}>Contact</Link></li>
        </ul>

        <div >
            <Link href={"#contact"} className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-2.5'>Contact
            <Image src={assets.arrow_icon} alt='arrow-icon' className='w-3 flex'/>
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar 