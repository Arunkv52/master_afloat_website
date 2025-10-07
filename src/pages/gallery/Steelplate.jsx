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
import Img1 from '../../assets/services/steel_plate/1.jpg'
import Img2 from '../../assets/services/steel_plate/2.jpeg'



const Steelplate = () => {
  return (
    <>
      <div className>
        <Navbar />
         <div className='px-5 py-30'>
          <h2 className='text-3xl text-center'>Steel Plate Renewal</h2>
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
              
            </CarouselContent>
          </Carousel>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Steelplate