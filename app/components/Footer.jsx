import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({isDarkMode}) => {
    const footerData =[
        {
            title:'GitHub',
            source:'https://github.com/amir-ashrafi',
        },
        {
            title:'LinkedIn',
            source:'https://linkedin.com/in/amir-ashrafi-2481222ba',
        },
        {
            title:'instagram',
            source:'',
        },
        {
            title:'twitter',
            source:'https://x.com/AmirRezaAs98669',
        }
    ]
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode?assets.logo_dark: assets.logo} alt='' className = 'w-32 mx-auto mb-2 ' />
        <div className='flex w-max items-center gap-2 mx-auto' >
            <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6'/>
            ashrfya628@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>0 2025 AmirReza Ashrafi.All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            {footerData.map((item,index)=>(
                <li key={index}>
                    <Link target='_blank' href={item.source}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
