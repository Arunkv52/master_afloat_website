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
import Img1 from '../../assets/services/bellow-renewal/1.png'
import Img2 from '../../assets/services/bellow-renewal/2.png'
import Img3 from '../../assets/services/bellow-renewal/3.png'
import Img4 from '../../assets/services/bellow-renewal/4.png'
import Img5 from '../../assets/services/bellow-renewal/5.png'



const Bellowrenewal = () => {
  return (
    <>
      <div className>
        <Navbar />
        <div className='px-5 py-30'>
          <h2 className='text-3xl text-center'>Bellow Renewal</h2>
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
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img5} alt="" className='w-full h-[500px] object-cover' />
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

export default Bellowrenewal