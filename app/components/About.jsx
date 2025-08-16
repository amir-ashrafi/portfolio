import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "motion/react"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const About = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id='about' className='w-full px-[12%] py-8 scroll-mt-20 mt-32'>
      <motion.h4
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1,delay:0.3}}
       className=' text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.5}}
       className='text-center text-5xl font-Ovo'>About me</motion.h2>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
       className='flex w-full flex-col lg:flex-row items-center gap-20 my-16'>
        <motion.div
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.6}}
         className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.8}}
         className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>I have experience in building responsive websites, optimizing performance, and working closely with designers and backend developers to deliver high-quality products. I'm always eager to learn new technologies, improve my skills, and take on new challenges in the ever-evolving world of web development.</p>
            <div className='flex justify-around m-5'>
              <Link className='border[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' href={`https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin`}>
                <CiLinkedin size={35}/>
              </Link>
              <Link className='border[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' rel="stylesheet" href="https://github.com/amir-ashrafi" >
                <FaGithub size={35}/>
              </Link>
            </div>
            
            <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8,delay:1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon , iconDark ,title ,description},index) => (
                    <motion.li
                    whileInView={{scale:1.05}}
                     className='border[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                        <Image src={isDarkMode?iconDark:icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white '>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
