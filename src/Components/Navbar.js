import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const [showscroll, setShowscroll] = useState(false)

    const scrollToElement = (id) => {
        const element = document.getElementById(id)

        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }
    const toggleMenu = () => {
      setIsMenuVisible(true);
    }
  
    const hideMenu = () => {
      setIsMenuVisible(false);
    }
  return (
    <header className='relative'>
        <nav className='container h-10 flex items-center md:justify-between p-10 mx-auto lg:gap-64'>
            <div>
                <a href='#' className='text-4xl text-blue-500 uppercase font-serif'>
                    Jack<span className='text-yellow-500'>son</span>
                </a>
            </div>

            <div className={`fixed top-0 md:-mt-3 left-0 w-full h-full transition-transform bg-blue-100 duration-300 md:block md:relative md:w-auto md:h-auto md:bg-white md:rounded-md z-10 overflow-hidden ${isMenuVisible ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
                <ul className='flex flex-col p-4 md:flex-row text-center md:items-start gap-3 md:gap-3 lg:gap-7 cursor-pointer mt-3'>
                    <li>
                        <a href='#home' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('home')}} className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Home</a>
                    </li>
                    <li>
                        <a href='#tech' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('tech')}} className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Tech Stack</a>
                    </li>
                    <li>
                        <a href='#projects' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('projects')}} className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={(e) => {e.preventDefault(); hideMenu(); scrollToElement('contact')}} className='hover:text-yellow-500 text-blue-700 font-bold text-2xl'>Contact</a>
                    </li>
                    
                </ul>
                
            </div>

            <div className='absolute top-5 right-5 z-20'>
                {isMenuVisible ? <FontAwesomeIcon icon={faBars} onClick={hideMenu} className='cursor-pointer md:hidden text-2xl fixed right-10 top-10' /> : <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className='cursor-pointer md:hidden text-2xl'/>}
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar