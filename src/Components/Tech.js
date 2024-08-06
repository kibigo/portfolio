import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faCss3, faHtml5, faJs, faReact, faPhp, faGithub, fa } from '@fortawesome/free-brands-svg-icons'



function Tech() {
  return (
    <section className='bg-neutral-100 mt-10'>

        <div className='items-center mx-auto'>

            <div className='text-center'>
                <h1 className='font-bold text-4xl'>My Tech Stack</h1>
                <p className='text-2xl font-light mt-5'>Technologies I've been working with recently</p>
            </div>

            <div className='items-center text-center mt-10'>
                <ul className='grid grid-cols-3 gap-2 lg:grid-cols-4'>
                    <li className='text-4xl md:text-8xl'>
                        <FontAwesomeIcon icon={faJs} size='2xl' style={{color:'#FFD43B'}}/>
                    </li>

                    <li className='text-4xl md:text-6xl'>
                        <FontAwesomeIcon icon={faPython} size='2xl' style={{color:'#74c0fc'}}/>
                    </li>

                    <li className='text-4xl md:text-6xl'>
                        <FontAwesomeIcon icon={faCss3} size='2xl' style={{color:'#B197FC'}}/>
                    </li>

                    <li className='text-4xl md:text-6xl'>
                        <FontAwesomeIcon icon={faHtml5} size='2xl' style={{color:'#ddab22'}}/>
                    </li>

                    <li className='text-4xl md:text-6xl'>
                        <FontAwesomeIcon icon={faReact} size='2xl' style={{color:'#74C0FC'}}/>
                    </li>

                    <li className='text-4xl md:text-6xl'>
                        <FontAwesomeIcon icon={faPhp} size='2xl' style={{color:'#B197FC'}}/>
                    </li>

                    <li className='text-4xl md:text-6xl'>
                        <FontAwesomeIcon icon={faGithub} size='2xl' style={{color:'#171617'}}/>
                    </li>

                </ul>
            </div>
        </div>
    </section>
  )
}

export default Tech