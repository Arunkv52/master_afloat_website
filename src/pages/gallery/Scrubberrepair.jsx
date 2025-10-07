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
import Img1 from '../../assets/services/scrubber/1.png'
import Img2 from '../../assets/services/scrubber/2.png'
import Img3 from '../../assets/services/scrubber/3.png'
import Img4 from '../../assets/services/scrubber/4.png'
import Img5 from '../../assets/services/scrubber/5.png'



const Scrubberrepair = () => {
  return (
    <>
      <div className>
        <Navbar />
         <div className='px-5 py-30'>
          <h2 className='text-3xl text-center'>Scrubber Repair Works</h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img1}  className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img2}  className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img3}  className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img4}  className='w-full h-[500px] object-cover' />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img5}  className='w-full h-[500px] object-cover' />
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

export default Scrubberrepair