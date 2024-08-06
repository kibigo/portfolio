import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TypeWriter from './TypeWriter'



function Home() {
  return (
    <section>
        <div className='container flex flex-col lg:flex-row mx-auto items-center mt-2 md:gap-10'>

            <div className='w-full text-center md:basis-1/2'>

                <a className='ml-2 text-2xl'>
                    Hello, My name is
                    <span className='block text-3xl text-sky-600'>Jackson</span>
                </a>

                <h2 className='text-2xl'>
                    And I'm{" "}
                    <TypeWriter speed={100} words={["a Developer", "a youTuber", "a Freelancer"]}/>
                </h2>
            </div>

            <div className='w-2/3'>
                <p className='text-neutral-600 mt-6 text-start'>
                    I'm an ambitious student on a dynamic learning path within 
                    the ever-evolving world of technology. While I'm in the process 
                    of completing my studies, my practical experience and passionate 
                    self-guided learning have allowed me to develop a versatile skill 
                    set encompassing full stack web development, networking, cloud 
                    technologies, and penetration testing.
                </p>
            </div>

            <div className='w-full h-full flex items-start justify-center lg:items-center mt-10'>
                <motion.img 
                    initial={{y:0}}
                    animate={{y: [-10, 10, -10]}}
                    transition={{
                        repeat:Infinity,
                        duration:3,
                        ease:'linear'
                    }}
                    className='h-72 w-72 rounded-full'
                    src='/jackson.jpeg'
                />
            </div>
        </div>
    </section>
  )
}

export default Home