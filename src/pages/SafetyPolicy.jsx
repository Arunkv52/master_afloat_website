import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ServiceImg from '../assets/Services_img.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SafetyPolicy = () => {
  const { scrollY } = useScroll()

  // Scale the image as user scrolls (adjust values as needed)
  const scale = useTransform(scrollY, [0, 300], [0.6, 1])
  const opacity = useTransform(scrollY, [0, 300], [0.8, 1])
  return (
    <>
      <Navbar />

      <div>
        <motion.img
          src={ServiceImg}
          alt='Services'
          className='w-full h-dvh object-cover'
          style={{
            scale,
            opacity
          }}
        />
        <div className='absolute top-1/2 left-5'>
          <h3 className='md:text-6xl text-3xl'>
            Expert <br /> Fabrication & Repair Works <br /> for the Marine
            Sector
          </h3>
        </div>
      </div>

      <div className='bg-white md:px-30 px-5 md:py-20 py-10 text-black md:flex justify-around items-start gap-20'>
        <div className='md:w-[33%] w-full'>
          <div>
            <h2 className='md:text-4xl text-2xl'>Safety Policy</h2>
          </div>
        </div>
        <div className='md:w-[66%] w-full md:py-0 py-10'>
          <div>
            <p className='md:text-2xl text-2xl'>
              At Master Marine Works, the health and safety of our employees is
              our highest priority. All activities are carried out in full
              compliance with the relevant legislation of the Singapore
              Government’s safety standards.
            </p>
          </div>
          <div className='md:grid grid-cols-2 gap-5 py-10'>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>Safety Policy</h5>
              <p className='text-[18px] pt-3'>
                All works are carried out full health and safety of the
                employees at all times. Our safety policy fully complies with
                the requirements of the relevant legislation of Singapore
                government safety policy.
              </p>
            </div>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>It's our policy to</h5>
              <p className='text-[18px] pt-3'>
                Safety consciousness in our employees to promote improved code
                of practice and safety precautions. Recognize the important
                about safety commitment of the employees towards achieving ZERO
                accident/incident of this policy.
              </p>{' '}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default SafetyPolicy
