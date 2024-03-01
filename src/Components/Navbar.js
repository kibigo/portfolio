import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <header className='fixed left-0 w-full'>
        <nav className='container relative flex justify-between items-center bg-white'>
            <div>
                <a href='#' className='text-2xl text-blue-500 uppercase font-serif'>
                    Jack<span className='text-yellow-500'>son</span>
                </a>
            </div>

            <div className='absolute top-0 w-full md:block md:static md:w-auto'>
                <ul className='flex flex-col text-center gap-5 md:flex-row'>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-gray-700'>Home</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-gray-700'>Tech Stack</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-gray-700'>Projects</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-gray-700'>Contact</a>
                    </li>
                    
                </ul>

                <div className='absolute right-4 top-[0.75rem] text-2xl cursor-pointer md:hidden lg:hidden'>
                    <FontAwesomeIcon icon={faX}/>
                </div>
            </div>
            <div className='right-0'>
                <ul className='text-center gap-3 hidden md:flex flex-row'>
                    <li>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar