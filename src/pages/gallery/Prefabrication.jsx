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
import Img1 from '../../assets/services/pre-fabrication/1.jpg'
import Img2 from '../../assets/services/pre-fabrication/2.jpg'
import Img3 from '../../assets/services/pre-fabrication/3.png'
import Img4 from '../../assets/services/pre-fabrication/4.png'
import Img5 from '../../assets/services/pre-fabrication/5.png'
import Img6 from '../../assets/services/pre-fabrication/6.png'
import Img7 from '../../assets/services/pre-fabrication/7.png'
import Img8 from '../../assets/services/pre-fabrication/8.png'



const Prefabrication = () => {
  return (
    <>
      <div className>
        <Navbar />
        <div className='px-5 py-30'>
          <h2 className='text-3xl text-center'>Pre Fabrication</h2>
          <Carousel>
            <CarouselContent>

              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img2} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img3} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img4} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img5} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img6} alt="" />
                </div>
              </CarouselItem>
               <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img7} alt="" />
                </div>
              </CarouselItem>
               <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img8} alt="" />
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

export default Prefabrication