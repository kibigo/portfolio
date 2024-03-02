import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const hideMenu = () => {
        setIsMenuVisible(false);
    }

    const toggleMenu = () => {
        setIsMenuVisible(true);
    }
  return (
    <header className='w-full'>
        <nav className='container py-10 relative flex justify-between items-center mx-auto'>
            <div>
                <a href='#' className='text-2xl text-blue-500 uppercase font-serif'>
                    Jack<span className='text-yellow-500'>son</span>
                </a>
            </div>

            <div className={`absolute top-0 w-full md:block md:static md:w-auto ${isMenuVisible ? '' : 'hidden'}`}>
                <ul className='flex flex-col mt-8 text-center gap-5 md:flex-row md:mt-0 lg:gap-20'>
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

                <div className='absolute right-48 bg-red-400 top-[1.85rem] text-3xl cursor-pointer md:hidden lg:hidden'>
                    <FontAwesomeIcon onClick={hideMenu} icon={faX}/>
                </div>
            </div>



            <div className='mt-8 md:mt-0'>
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
            </div>

            <div className='mt-7 mr-10 md:absolute'>
                <FontAwesomeIcon onClick={toggleMenu} className={`cursor-pointer text-xl ${isMenuVisible ? 'hidden' : ''} md:hidden`} icon={faBars}/>
            </div>

            
        </nav>
    </header>
  )
}

export default Navbar