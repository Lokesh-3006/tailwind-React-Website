import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.JS</h1>
        <p className='py-4'>React is a free and open-source front-end JavaScript library for building user interfaces based on components.
             It is maintained by Meta and a community of individual
              developers and companies.</p>
              <div className='flex justify-between md:w-[75%] my-6'>
                 <FaFacebookSquare size={30} className="hover:text-[#41c99c] duration-300"/>
                 <FaInstagram size={30} className="hover:text-[#41c99c] duration-300"/>
                 <FaGithubSquare size={30} className="hover:text-[#41c99c] duration-300"/>
                 <FaTwitterSquare size={30} className="hover:text-[#41c99c] duration-300"/>
                 <FaDribbbleSquare size={30} className="hover:text-[#41c99c] duration-300"/>

              </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className=' font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerces</li>
                    <li className='py-2 text-sm'>Insights</li>
                
                </ul>
            </div>
            <div>
                <h6 className=' font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>guides</li>
                    <li className='py-2 text-sm'>API status</li>
                
                </ul>
            </div>
            <div>
                <h6 className=' font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>Careers</li>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>press</li>
                
                </ul>
            </div>
            <div>
                <h6 className=' font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                    <li className='py-2 text-sm'>Insights</li>
                
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Footer