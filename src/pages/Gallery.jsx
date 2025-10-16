import React from 'react'
import SwiperGallery from '../components/SwiperGallery'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Gallery = () => {
    return (
        <>
            <Navbar />
                <div className='py-30'>
                    <SwiperGallery />
                </div>
            <Footer />
        </>
    )
}

export default Gallery
