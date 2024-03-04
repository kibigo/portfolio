import React from 'react'

function Projects() {
  return (
    <section>
        <div className='container mx-auto text-center mt-14'>
            <h1 className='font-bold text-4xl'>Projects</h1>
            <p className='text-2xl font-light w- mt-2'>Things I've built so far</p>

            <div className='flex'>

                <ul className='grid grid-cols-1'>

                    <li>

                        <div className='grid place-items-center'>
                            <img className='w-1/2 h-auto' src='https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?t=st=1709582431~exp=1709586031~hmac=7d1b3c0177c98223dc1a8d24fd2f63155b20155366edc0146cd5d96a5c125497&w=740'/>
                        </div>

                        <div className='text-center'>
                            <h3 className='font-bold'>Project Titlte goes here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            
                            <p className='mt-2'> <span>Tech stack:</span> HTML, Javascript, SASS, React</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Projects