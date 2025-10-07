import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Img1 from '../../assets/Home_next/engine-room.png'
import Img2 from '../../assets/Home_next/pre-fabrication.webp'



const Hydralics = () => {
  return (
    <>
      <div className>
        <Navbar />
        <div className='px-10 py-20'>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img1} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img2} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img1} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img2} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img1} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img2} alt="" />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Hydralics