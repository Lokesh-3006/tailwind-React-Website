import React from 'react'
import Laptop from '../images/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Manage Data Analytics Centrally</h1>
                <p>Data analytics is a multidisciplinary field that employs a 
                   wide range of analysis techniques, including math, statistics, and 
                   computer science, to draw insights from data sets. Data analytics is a broad term 
                   that includes everything from simply analyzing data to theorizing ways of 
                   collecting data and creating the frameworks needed to store it.</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 md:mx-0 hover:text-[#f3f7f7] duration-300'>
                  Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics