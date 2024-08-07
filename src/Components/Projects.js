import React from 'react'

function Projects() {
  return (
    <section>
        <div className='container mx-auto text-center mt-14'>
            <h1 className='font-bold text-4xl'>Projects</h1>
            <p className='text-2xl font-light w- mt-2'>Projects I've built so far</p>

            <div className='flex flex-col mt-5 gap-5 md:flex-row'>

                <div className='md:w-1/3'>
                    <h3 className='font-bold text-2xl'>OneTimeDelivery</h3>

                    <div className='items-center mt-3'>

                        <a href='https://effortless-fenglisu-ad7a2f.netlify.app/'>
                            <img className='w-80 md:w-full h-60 mx-auto' src='/oneTimeDelivery.png' alt='onetime'/>
                        </a>
                    </div>
                    
                    <div className='text-center'>
                        <p className='mt-3 text-center md:h-48 lg:h-24 text-neutral-600'>
                            OneTimeDelivery is a platform designed to seamlessly connect customers with local
                            business, providing a fast, reliable and user-friendly experience. 
                        </p>
                        
                        <p className='mt-2 text-2xl text-neutral-600'> <span className='text-3xl'>Tech stack:</span> Javascript, Next Js, Tailwind</p>
                    </div>
                </div>

                <div className='md:w-1/3'>
                    <h3 className='font-bold text-2xl'>OneStop market</h3>

                    <div className='items-center mt-3'>
                        <a href='https://vocal-kashata-5b2a3f.netlify.app/'>
                            <img className='w-80 md:w-full h-60 mx-auto' src='/oneStop.png' alt='onestop'/>
                        </a>
                    </div>

                    <div className='text-center'>
                        <p className='mt-3 md:h-48 lg:h-24 text-neutral-600'>
                            OneStop Supermarket is a grocery ordering platform that brings convenience to users.
                            Our mission is to transform the grocery shopping experience through technology and innovation.
                        </p>
                        
                        <p className='mt-2 text-2xl text-neutral-600'> <span className='text-3xl'>Tech stack:</span> Javascript, React, Tailwind</p>
                    </div>
                </div>


                <div className='md:w-1/3'>
                    <h3 className='font-bold text-2xl'>Clink Technology</h3>

                    <div className='items-center mt-3'>
                        <a href='/'>
                            <img className='w-80 md:w-full h-60 mx-auto' src='/coming-soon.jpg' alt='clink_tech'/>
                        </a>
                    </div>

                    <div className='text-center'>
                        <p className='mt-3 md:h-48 lg:h-24 text-neutral-600'>
                            Advanced e-commerce platform dedicated to providing an exceptional
                            shopping experience for electronics enthusiasts.
                        </p>
                        
                        <p className='mt-2 text-2xl text-neutral-600'> <span className='text-3xl'>Tech stack:</span> Javascript, React, PHP, Tailwind</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Projects