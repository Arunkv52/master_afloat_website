import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Video from '../assets/main-video.webm'
import UsNavy from '../assets/us-navy.webp'
import HorizontalScroll from '../components/HorizontalScrollCarousal'
import AerialView from '../assets/Aerial_view.jpg'
import WaterSplash from '../assets/water_splash.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CircularGallery from '../components/CircularGallery'
import MobileBanner from '../assets/mobile_banner.jpg'
import { Link } from 'react-router'


const Home = () => {
  const ref = useRef(null)

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'] // start when enters viewport → end when fully visible
  })

  // Transform scale (0.8 → 1) while scrolling
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <>
      <Navbar />
      <div className='hero-section'>
        <video
          src={Video}
          autoPlay
          muted
          loop
          className='-z-50 md:block hidden'
        ></video>
        <img src={MobileBanner} alt='' className='md:hidden block' />
        <div className='md:absolute md:top-1/3 lg:top-1/2 absolute top-50 left-0 md:left-5 md:px-0 px-5'>
          <h1 className='md:text-6xl text-2xl text-left uppercase font-bold'>
            Success through
            <br /> customer satisfaction
          </h1>
          <p className='pt-5'>
            Master Afloat Repair Works corporate philosophy is to serve all its
            clientele to their entire level of <br /> satisfaction with pride
            and excellence through its vast experience collective team work{' '}
            <br /> with motivated personnel
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className='md:px-20 px-5 md:py-20 py-10 bg-white text-black'>
        <div className='md:flex justify-between'>
          <div>
            <h4 className='md:text-5xl text-3xl pb-10'>
              About Master Afloat Repair Works
            </h4>
            <img src={UsNavy} alt='' className='md:w-3/4 w-full' />
          </div>
          <div>
            <p className='md:text-base text-[18px] pt-5'>
              With years of dedicated service in the maritime industry, Master Afloat Repair Works has established itself as a trusted partner for ship
              owners and operators worldwide. Our journey began with a singular
              vision: to provide unparalleled ship repair and maintenance
              services that stand the test of time and the rigors of the sea.
            </p>
            <p className='md:text-base text-[18px] pt-5'>
              Our team comprises highly skilled and certified mariners,
              engineers, and technicians who bring a wealth of practical
              experience to every project. We pride ourselves on our proactive
              approach, problem-solving capabilities, and unwavering commitment
              to safety and environmental standards. We believe in building
              long-term relationships based on trust, transparency, and
              consistent delivery of quality work.
            </p>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className='md:py-20 py-10 px-5'>
        <h2 className='text-[#dcdcdc]'>Core Business</h2>
        <h3 className='md:text-6xl text-5xl text-stroke-2 md:relative top-0'>
          Ship Repairs at Anchorage & Voyage
        </h3>
        <div>
          <HorizontalScroll />
        </div>
      </div>
      {/* Section 4 */}
      <div className='md:text-center text-left md:px-10 lg:px-100 px-5 md:py-10 py-5'>
        <p className='pb-5 text-white/50'>
          Ship Repairs at Anchorage and on Voyage
        </p>
        <h6 className='md:text-3xl text-[18px]'>
          Our specialized teams are equipped to perform critical repairs at
          anchorage or while your vessel is on voyage. This flexibility ensures
          that essential maintenance and emergency fixes are carried out without
          disrupting your crucial schedule. We come to you, reducing logistics
          challenges and keeping your operations flowing smoothly.
        </h6>
      </div>
      {/* Section 5 */}
      <motion.div
        ref={ref}
        style={{
          scale,
          backgroundImage: `url(${AerialView})`
        }}
        className='bg-cover bg-center h-[600px] py-10 flex flex-col md:justify-center justify-end md:items-start items-end text-white'
      >
        <div className='text-left md:px-10 px-5'>
          <p className='md:text-4xl text-2xl pb-5 w-1/2'>
            Ready to experience the Master Afloat Repair Works difference?
          </p>
          <Link to={'/contact'}>
            <button className='bg-white text-black px-7 py-3 font-semibold cursor-pointer hover:bg-black hover:text-white shadow-2xs'>
              Connect With us
            </button>
          </Link>

        </div>
      </motion.div>
      {/* Section 6 */}
      <div className='text-white md:py-15 py-5 md:px-0 px-5'>
        <div className='text-center'>
          <h5 className='md:text-4xl text-3xl font-semibold'>Our Projects</h5>
          <p className='md:text-2xl text-base pt-3'>
            Here’s a look at our recent work— a list of{' '}
            <strong> completed projects.</strong>
          </p>
        </div>
        <div className='py-10'>
          <div>
            <CircularGallery />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
