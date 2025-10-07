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
import Img0 from '../../assets/services/off_shore/new-img.jpg'
import Img2 from '../../assets/services/off_shore/2.jpg'
import Img3 from '../../assets/services/off_shore/3.jpg'
import Img4 from '../../assets/services/off_shore/4.jpg'
import Img5 from '../../assets/services/off_shore/5.jpeg'
import Img6 from '../../assets/services/off_shore/6.jpeg'
import Img8 from '../../assets/services/off_shore/8.jpeg'



const OffShore = () => {
  return (
    <>
      <div className>
        <Navbar />
        <div className='px-5 py-30'>
          <h2 className='text-3xl text-center'>Off Shore Platform Fabrication & Install</h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img0} alt="" className='w-full h-[500px] object-cover'/>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img2} alt="" className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img3} alt="" className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img4} alt="" className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img5} alt="" className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img6} alt="" className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
             
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img8} alt="" className='w-full h-[500px] object-cover' />
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

export default OffShore