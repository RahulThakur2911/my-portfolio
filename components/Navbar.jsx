import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }
    return (
        <>

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='background-Image' className='w-full' />
            </div>
            <nav className=' w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
                <Link href={'#top'}>
                    <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14' />
                </Link>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                    <li><Link href={"#top"} className='font-[var(--font-ovo)]'>Home</Link></li>
                    <li><Link href={"#aboout"}>About</Link></li>
                    <li><Link href={"#services"}>Services</Link></li>
                    <li><Link href={"#work"}>My work</Link></li>
                    <li><Link href={"#contact"}>Contact</Link></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} alt='Moon-icon' className='w-6' />
                    </button>

                    <Link href={"#contact"} className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-2.5'>Contact
                        <Image src={assets.arrow_icon} alt='arrow-icon' className='w-3 flex' />
                    </Link>

                    <button className='block md:hidden ml-3'
                        onClick={toggleMenu}
                    >
                        <Image src={assets.menu_black} alt='Menu-icon' className='w-6' />
                    </button>

                </div>

                {/* Mobile menu */}
                <ul className={`
    flex md:hidden flex-col gap-4 py-20 px-10 fixed 
    top-0 bottom-0 w-64
    right-0  
    z-50 h-screen bg-rose-50 transition duration-500
    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
`}>

                    <div className='absolute top-6 right-6'
                        onClick={toggleMenu}
                    >
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><Link href={"#top"} onClick={toggleMenu}>Home</Link></li>
                    <li><Link href={"#aboout"} onClick={toggleMenu}>About</Link></li>
                    <li><Link href={"#services"} onClick={toggleMenu}>Services</Link></li>
                    <li><Link href={"#work"} onClick={toggleMenu}>My work</Link></li>
                    <li><Link href={"#contact"} onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar 