import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/Navbar'
import ServiceImg from '../assets/Services_img.jpg'
import Footer from '../components/Footer'
import Serve from '../assets/Welding.jpg'

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
            <h2 className='md:text-4xl text-2xl'>
              One-Stop Fabrication & Repair Solutions for the Marine Industry
            </h2>
            <div className='md:pt-20 pt-5'>
              <img src={Serve} alt='' className='w-full h-auto' />
              <p className='pt-3 text-base'>
                Our other services are: – Scaffold works, Riding crew supply,
                Tank cleaning, hydro jetting, Vessel Name, IMO change, Shipside
                fender renewal, Anchor renewal works etc.,
              </p>
            </div>
          </div>
        </div>
        <div className='md:w-[66%] w-full md:py-0 py-10'>
          <div>
            <p className='md:text-2xl text-2xl'>
              {' '}
              Master Marine Works is a firm dedicated to provide one-stop
              solution services (Fabrication and Repair works) to suit for the
              Marine industry (onshore/offshore and Voyage jobs).
            </p>
          </div>
          <div className='md:grid grid-cols-2 gap-5 py-10'>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>Piping Works</h5>
              <p className='text-[18px] pt-3'>
                Engine room, Main deck, cargo line, Ballast line, Firefighting.
                Overboard pipes modifications and renewal Bellow fabrication and
                installation.{' '}
              </p>
            </div>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>Structural Works</h5>
              <p className='text-[18px] pt-3'>
                We are specialized in Cell guide, shell plate, Steel structure,
                Offshore platform, Aluminium Ladder repair fabrication and
                installation with load test.
              </p>{' '}
            </div>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>Electrical Works</h5>
              <p className='text-[18px] pt-3'>
                We provide Alternator Generator servicing, motor Rewinding,
                troubleshoot control panel, Cable laying and termination works.
              </p>
            </div>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>Mechanical Works</h5>
              <p className='text-[18px] pt-3'>
                Main Engine Servicing, Tail shaft bearing alignment, Anchor
                windlass, Deck mooring winches and Cargo Pump & Butterfly Valve
                servicing and install. in Anchorage / Voyage.
              </p>
            </div>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>Hydraulic Works</h5>
              <p className='text-[18px] pt-3'>
                Service and troubleshooting for Cranes, hydraulic cylinder
                overhauling, Repair /testing of hydraulic pump and Tank Gauging
                automation .
              </p>
            </div>
            <div className='md:py-0 py-5'>
              <h5 className='text-[#006994] text-2xl'>
                Accommodation Flooring & Carpentry Works
              </h5>
              <p className='text-[18px] pt-3'>
                We provides all types of accommodation repairs and supply wooden
                furniture items with installation, Water tight Doors, Port
                holes, marine floor tiles renewal and Bridge toughen glass
                fabrication and installation.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Services
