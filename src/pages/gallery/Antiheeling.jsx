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
import Img1 from '../../assets/services/anti_heeling/1.jpg'
import Img2 from '../../assets/services/anti_heeling/2.jpg'
import Img3 from '../../assets/services/anti_heeling/3.png'
import Img4 from '../../assets/services/anti_heeling/4.png'



const Antiheeling = () => {
  return (
    <>
      <div className>
        <Navbar />
        <div className='px-5 py-30'>
          <h2 className='text-3xl text-center'>Anti heeling- Pump Servicing</h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img1} alt="" className='w-full h-[500px] object-cover' />
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
             
            </CarouselContent>
          </Carousel>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Antiheeling