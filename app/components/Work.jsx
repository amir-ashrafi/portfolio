import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import Link from 'next/link'
const Work = (isDarkMode) => {
  return (
    <motion.div
    initial={{opacity:0 }}
      whileInView={{opacity:1 }}
      transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{opacity:0 ,y:-20}}
      whileInView={{opacity:1,y:0 }}
      transition={{duration:0.5,delay:0.3}}
       className=' text-center mb-2 text-lg font-Ovo'>my portfolio</motion.h4>
      <motion.h2 
      initial={{opacity:0 ,y:-20}}
      whileInView={{opacity:1,y:0 }}
      transition={{duration:0.5,delay:0.5}}
      className='text-center text-5xl font-Ovo'>My latest work</motion.h2>
      <motion.p
      initial={{opacity:0 }}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        welcome to m
      </motion.p>
      <motion.div
      initial={{opacity:0 }}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.9}}
      className='grid grid-cols-auto my10 gap-5 dark:text-black'> 
        {workData.map((project , index) =>(
          <Link
          href={project.Link}
          key={index} style={{backgroundImage:`url(${project.bgImage})`}} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>
            <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py3 px-5 flex items-center duration-500 group-hover:bottom-7 justify-between'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send icon' className='w-5'/>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
      <motion.a
      initial={{opacity:0 }}
      whileInView={{opacity:1}}
      transition={{duration:1.1,delay:0.5}}
      href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </motion.a>
    </motion.div>
  )
}

export default Work
