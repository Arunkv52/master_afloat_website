import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Video from '../assets/main-video.mp4'
import UsNavy from '../assets/us-navy.webp'
import HorizontalScroll from '../components/HorizontalScrollCarousal'
import AerialView from '../assets/Aerial_view.jpg'
import WaterSplash from '../assets/water_splash.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CircularGallery from '../components/CircularGallery'
import MobileBanner from '../assets/mobile_banner.jpg'


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
        <video src={Video} autoPlay muted loop className='-z-50 md:block hidden'></video>
        <img src={MobileBanner} alt="" className='md:hidden block' />
        <div className='md:absolute md:top-1/3 lg:top-1/2 absolute top-50 left-0 md:left-5 md:px-0 px-5'>
          <h1 className='md:text-6xl text-2xl text-left uppercase font-bold'>
            Success through
            <br /> customer satisfaction
          </h1>
          <p className='pt-5'>
            Master Marine Works corporate philosophy is to serve all its
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
              Industry-leading solutions to simplify
              <br /> and scale IT for industrial networks
            </h4>
            <img src={UsNavy} alt='' className='md:w-3/4 w-full' />
          </div>
          <div>
            <p className='md:text-base text-[18px] pt-5'>
              Master Marine works was established in 2011, and registered in
              Singapore. Since then, Master Marine works has grown step by step,
              albeit on a nominal scale.
            </p>
            <p className='md:text-base text-[18px] pt-5'>
              Master Marine works was established in 2011, and registered in
              Singapore. Since then, Master Marine works has grown step by step,
              albeit on a nominal scale.
            </p>
            <p className='md:text-base text-[18px] pt-5'>
              Master Marine works was established in 2011, and registered in
              Singapore. Since then, Master Marine works has grown step by step,
              albeit on a nominal scale.
            </p>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className='md:py-20 py-10 px-5'>
        <h2 className='text-[#dcdcdc]'>Core Business</h2>
        <h3 className='md:text-8xl text-5xl text-stroke-2 md:relative top-35'>
          Ship Repairs at Anchorage & Voyage
        </h3>
        <div>
          <HorizontalScroll />
        </div>
      </div>
      {/* Section 4 */}
      <div className='md:text-center text-left md:px-100 px-5 md:py-10 py-5'>
        <p className='pb-5 text-white/50'>Our Crew</p>
        <h6 className='md:text-3xl text-[18px]'>
          The crew is the lifeblood of Okains Bay Seafood and the Kawatea. It
          takes a special kind of person to brave the harsh conditions of the
          Southern Ocean for up to six weeks at a time.
        </h6>
        <h6 className='md:text-3xl text-[18px]'>
          This is deeply respected and the crew is well looked after in return
          for their efforts. It is a very rare occurrence to have staff
          turnover, with most of the current team having been with the business
          for over 10 years.
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
          <p className='md:text-4xl text-2xl pb-5'>
            We have refined a longstanding <br /> traditional method of fishing{' '}
            <br /> down to a fine art.
          </p>
          <button className='bg-white text-black px-7 py-3 font-semibold cursor-pointer hover:bg-black hover:text-white shadow-2xs'>
            Connect With us
          </button>
        </div>
      </motion.div>
      {/* Section 6 */}
      <div className='text-white md:py-15 py-5 md:px-0 px-5'>
        <div className='text-center'>
          <h5 className='md:text-4xl text-3xl font-semibold'>Our Projects</h5>
          <p className='md:text-2xl text-base pt-3'>Here’s a look at our recent work—
            a list of <strong> completed projects.</strong></p>
        </div>
        <div>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </div>
      </div>
      {/* Section 7 */}
      <div>
        <img src={WaterSplash} alt="" className='w-full'/>
      </div>

      <Footer />
    </>
  )
}

export default Home
