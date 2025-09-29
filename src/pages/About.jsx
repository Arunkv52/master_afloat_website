import React from 'react'
import Navbar from '../components/Navbar'
import AboutImg from '../assets/About-us.webp'
import { motion, useScroll, useTransform } from 'framer-motion'
import Footer from '../components/Footer'
import WaterSplash from '../assets/water_splash.png'
import AbtImg from '../assets/abt-img.jpg'

const About = () => {
  const { scrollY } = useScroll()

  // Scale the image as user scrolls (adjust values as needed)
  const scale = useTransform(scrollY, [0, 300], [0.6, 1])
  const opacity = useTransform(scrollY, [0, 300], [0.8, 1])
  return (
    <>
      <div>
        <Navbar />
        <div>
          <motion.img
            src={AboutImg}
            alt='About'
            className='w-full h-dvh object-cover'
            style={{
              scale,
              opacity
            }}
          />
          <div className='absolute top-1/2 left-5'>
            <h3 className='md:text-6xl text-3xl'>“SUCCESS THROUGH <br /> CUSTOMER SATISFACTION”</h3>
          </div>
        </div>
        <div className='md:flex justify-around items-start gap-20 px-5 md:py-30 py-15'>
          <div>
            <h6 className='md:text-2xl text-base'>Who we are</h6>
          </div>
          <div>
            <p className='md:text-4xl text-[18px] md:pt-0 pt-5'>
              Master Marine works was established in 2011, and registered in
              Singapore. Since then, Master Marine works has grown step by step,
              albeit on a nominal scale.
            </p>
            <p className='md:text-4xl text-[18px] pt-5'>
              Master Marine work is specialized in all round Ship Repairs. To
              stay competitive and abreast of technological expertise and
              know-how, it has employed qualified personnel as it workforce.
            </p>
            <p className='md:text-4xl text-[18px] pt-5 text-white/60'>
              Treading through the new horizons and diversifying for the future
              endeavor.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className=''>
          <div className='md:flex justify-start items-end gap-5'>
            <div>
              <img src={AbtImg} alt='' className='w-full ' />
            </div>
            <div className='md:py-0 py-15 md:px-0 px-5'>
              <h6 className='text-white/50'>Corporate Mission</h6>
              <p className='md:text-4xl text-[18px] py-3'>
                Master Marine Works philosophy is to serve all its clientele to
                their entire level of satisfaction with pride and excellence
                through its vast experience with highly motivated personnel.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className=''>
          <div className='md:py-20 px-5 bg-white md:flex justify-around items-start text-black'>
            <h5 className='py-5'>Corporate Vision</h5>
            <p className='md:text-6xl text-3xl uppercase font-semibold'>
              Leading ship <br /> repairing company <br /> locally <br />{' '}
              globally
            </p>
          </div>
        </div>

       
        <Footer />
      </div>
    </>
  )
}

export default About
