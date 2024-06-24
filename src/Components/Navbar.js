import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);


    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }
  return (
    <header className='relative'>
        <nav className='container relative h-10 flex items-center md:justify-between p-10 mx-auto lg:gap-64'>
            <div>
                <a href='#' className='text-2xl text-blue-500 uppercase font-serif'>
                    Jack<span className='text-yellow-500'>son</span>
                </a>
            </div>

            <div className={`z-10 md:z-0 md:block mt-40 md:mt-0 bg-white rounded-md ${isMenuVisible ? '' : 'hidden'}`}>
                <ul className='flex flex-col p-4 md:flex-row text-center md:items-start gap-3 md:gap-3 lg:gap-7 cursor-pointer mt-3'>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Home</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Tech Stack</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Projects</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Contact</a>
                    </li>
                    
                </ul>
                
            </div>



            {/* <div className='mt-8 md:mt-0'>
                <ul className='text-center gap-4 text-2xl hidden md:flex flex-row'>
                    <li>
                        <FontAwesomeIcon className='cursor-pointer' icon={faFacebook}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='cursor-pointer' icon={faTwitter}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='cursor-pointer' icon={faLinkedin}/>
                    </li>
                </ul>
            </div> */}

            <div className='absolute right-20'>
                <FontAwesomeIcon onClick={toggleMenu} icon={faBars} className='cursor-pointer md:hidden text-2xl' />
            </div>

            
        </nav>
    </header>
  )
}

export default Navbar