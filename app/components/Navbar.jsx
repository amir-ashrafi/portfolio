import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'
const Navbar = ({isDarkMode,setIsDarkMode}) => {
    const [isScroll , setIsScroll] =useState(false)
    const sideMenu = useRef()
    const openMenu = () =>{
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () =>{
        sideMenu.current.style.transform = 'translateX(16rem)'
    }
    const menuItem =[
        {
            title:'Home',
            href:'#top',
        },
        {
            title:'About me',
            href:'#about',
        },
        {
            title:'My Skill',
            href:'#my-skill',
        },
        {
            title:'My Work',
            href:'#work',
        },
        {
            title:'Contact me',
            href:'#contact'
        }
    ]
    useEffect(() =>{
        window.addEventListener('scroll',() =>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    })
  return (
    <>
      <div className='fixed top-0 right-0 w-full -z-10 translate-y-[-70%]  '>
        <Image src={isDarkMode?assets.backgrund_dark:assets.header_bg_color} alt='' className='w-full'/>
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll?'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/15 dark:shadow-white/20':''}`}>
        <Link href={'#top'}>
            <Image src={isDarkMode?assets.logo_dark: assets.logo} className='w-28 cursor-pointer mr-14'
            alt='logo' priority={true}/>
        </Link>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "" :"bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-blue-900/50"} `}>
            {menuItem.map((item,index)=>(
                <li key={index}>
                    <a className='font-Ovo' key={index} href={item.href}>
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={() =>setIsDarkMode(pre =>!pre)}>
                <Image src={isDarkMode?assets.sun_icon :assets.moon_icon} alt='' className='w-6'/>
            </button>
            <Link href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact
                <Image src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon} alt='Contact' className='w-3' priority={true}/>
            </Link>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode? assets.menu_white:assets.menu_black} alt='' className='w-6'/>
            </button>
        </div>
        {/* ------ mobile menu -----*/}
        <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-blue-800/95 dark:text-white'>
            <div className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
                <Image src={isDarkMode?assets.close_white: assets.close_black} alt='' className='w-5'/>
            </div>
        {menuItem.map((item,index)=>(
                <li key={index}>
                    <a className='font-Ovo' key={index} onClick={closeMenu} href={item.href}
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
