import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='hero-section'>
        <div className='absolute top-1/2 left-1/12'>
          <h1 className='text-6xl text-left'>
            "Success<span className='italic'> through</span>  customer satisfaction"
          </h1>
          <p>
            Master Marine Works corporate philosophy is to serve all its
            clientele to their entire level of satisfaction with pride and
            excellence through its vast experience collective team work with
            motivated personnel
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
