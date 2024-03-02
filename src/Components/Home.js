import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TypeWriter from './TypeWriter'



function Home() {
  return (
    <section>
        <div className='container flex flex-col mx-auto items-center mt-24 md:flex-row md:gap-10'>

            <div className='w-full text-center md:basis-1/2'>
                <h2 className='text-3xl'>Hello, 
                    <span className='block'>My name is,</span>
                    <span className='block text-3xl text-sky-600'>Jackson</span>
                </h2>
                <h2 className='text-2xl'>
                    And I'm{" "}
                    <TypeWriter speed={100} words={["a Developer...", "an youTuber", "a Freelancer"]}/>
                </h2>
            </div>

            <div className='mt-10 md:basis-1/2'>
                <motion.img 
                    initial={{y:0}}
                    animate={{y: [-10, 10, -10]}}
                    transition={{
                        repeat:Infinity,
                        duration:3,
                        ease:'linear'
                    }}
                    className='h-80 rounded-full object-contain'
                    src='https://img.freepik.com/premium-psd/man-with-glasses-green-sweater-stands-front-photo-that-says-company_176841-36674.jpg?w=826'
                />
            </div>
        </div>
    </section>
  )
}

export default Home