import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/Navbar'
import SerImg from '../assets/Services_img.jpg'
import Footer from '../components/Footer'

const Services = () => {
  const { scrollY } = useScroll()

  // Scale the image as user scrolls (adjust values as needed)
  const scale = useTransform(scrollY, [0, 300], [0.6, 1])
  const opacity = useTransform(scrollY, [0, 300], [0.8, 1])
  return (
    <>
      <Navbar />
      <div>
        <motion.img
          src={SerImg}
          alt='About'
          className='w-full h-dvh object-cover'
          style={{
            scale,
            opacity
          }}
        />
        <div className='absolute top-1/2 left-5'>
          <h3 className='md:text-6xl text-3xl'>Services</h3>
        </div>
      </div>

      <div className=''>
        <div className='bg-white py-20'>
          <h5 className='text-black px-50 text-5xl'>
            Master Marine Works is a firm dedicated to provide one-stop solution
            services (Fabrication and Repair works) to suit for the Marine
            industry (onshore/offshore and Voyage jobs).
          </h5>
        </div>
        <div className='scroll_stack bg-white'>
         
        </div>
        
      </div>

      <Footer />

    </>
  )
}

export default Services
