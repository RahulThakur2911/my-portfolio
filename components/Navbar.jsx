import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'My work' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Class strings for the scroll effect and mobile menu
  const navClass = `
    w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300
    ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100" : "py-5"}
  `

  const mobileMenuClass = `
    flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 bottom-0 w-64 right-0 z-50 h-screen bg-rose-50/95 backdrop-blur-sm
    transition-transform duration-500 transform
    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
  `

  return (
    <>
      {/* Background image is moved further back and made slightly less intrusive */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%] opacity-80'>
        <Image 
            src={assets.header_bg_color} 
            alt='background-Image' 
            className='w-full' 
            priority={true} 
        />
      </div>

      <nav className={navClass}>
        <Link href={'#top'}>
          <Image src={assets.logo} alt='Company Logo' className='w-32 cursor-pointer mr-14' />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='hidden md:flex items-center gap-7 lg:gap-10 font-medium text-gray-700'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className='hover:text-rose-600 transition-colors duration-200'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions & Mobile Toggle */}
        <div className='flex items-center gap-4'>
          <button aria-label='Toggle Dark Mode'>
            <Image src={assets.moon_icon} alt='Moon-icon' className='w-7 cursor-pointer' />
          </button>

          <Link 
            href={"#contact"} 
            className='hidden lg:flex items-center gap-3 px-8 py-2.5 rounded-full ml-4 cursor-pointer 
                       bg-rose-600 text-white font-medium hover:bg-rose-700 transition-all shadow-md'
          >
            Get In Touch
            <Image src={assets.arrow_icon} alt='arrow-icon' className='w-3 invert' />
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className='block md:hidden ml-3' 
            onClick={toggleMenu}
            aria-label='Open Menu'
          >
            <Image src={assets.menu_black} alt='Menu-icon' className='w-7' />
          </button>
        </div>

        {/* Mobile menu */}
        <ul className={mobileMenuClass}>
          {/* Close Button */}
          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <button aria-label='Close Menu'>
              <Image src={assets.close_black} alt='Close menu' className='w-7 cursor-pointer' />
            </button>
          </div>
          
          {navLinks.map((link) => (
            <li key={link.href} className='text-xl font-semibold text-gray-800 hover:text-rose-600 transition-colors'>
              <Link href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar