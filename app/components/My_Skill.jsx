import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import OrbitingCircles from "./OrbitingCircles";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiGithub ,
  SiExpress ,
  SiMongodb ,
  SiPostman ,
  SiVercel ,
  SiAxios ,
  SiFigma ,
  SiTypescript 
} from 'react-icons/si';
import './OrbitingCircles.css'
const MY_Skill = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
     id='my-skill' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h2
      initial={{opacity:0 ,y:-20}}
      whileInView={{opacity:1 ,y:0}}
      transition={{duration:0.5 ,delay:0.5}}
      className='text-center text-5xl font-Ovo'>My Skill</motion.h2>
      <motion.p
      initial={{opacity:0 }}
      whileInView={{opacity:1 }}
      transition={{duration:0.5 ,delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-6 font-Ovo'>
        Over the years, I have developed a solid set of skills that help me work efficiently, solve problems creatively, and adapt quickly to new challenges. I enjoy learning and constantly strive to improve both my technical and personal abilities. Whether working independently or as part of a team, I approach every task with focus, responsibility, and a desire to deliver the best possible results.
      </motion.p>
      <motion.div
      initial={{opacity:0 }}
      whileInView={{opacity:1 }}
      transition={{duration:0.6 ,delay:0.9}}
       className='grid grid-cols-auto gap-6 my-10' style={{ position: "relative", height: "600px", width: "100%" }}>
      <OrbitingCircles
        className='orbiting-item1'
        radius={80}
        duration={12}
        iconSize={30}
        items={[FaHtml5, FaCss3Alt, FaJs ,SiFigma ]}
      />

      <OrbitingCircles
       className='orbiting-item2'
        radius={140}
        duration={18}
        iconSize={30}
        reverse
        items={[FaReact, SiNextdotjs, SiTailwindcss ,SiVercel ,SiAxios]}
      />

      <OrbitingCircles
        className='orbiting-item3'
        radius={200}
        duration={25}
        iconSize={30}
        items={[FaGitAlt, SiGithub,SiExpress,SiMongodb ,SiPostman ,SiTypescript  ]}
      />
       
      </motion.div>
      
    </motion.div>
  )
}

export default MY_Skill
