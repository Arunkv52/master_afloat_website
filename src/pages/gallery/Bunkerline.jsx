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
import Img1 from '../../assets/services/bunker_line/1.jpg'
import Img2 from '../../assets/New-whatsapp/IMG-20251014-WA0007.jpg'
import Img3 from '../../assets/New-whatsapp/IMG-20251014-WA0008.jpg'
import Img4 from '../../assets/New-whatsapp/IMG-20251014-WA0012.jpg'
import Img5 from '../../assets/New-whatsapp/IMG-20251014-WA0015.jpg'
import Img6 from '../../assets/New-whatsapp/IMG-20251014-WA0021.jpg'
import Img7 from '../../assets/New-whatsapp/IMG-20251014-WA0023.jpg'
import Img8 from '../../assets/New-whatsapp/IMG-20251014-WA0031.jpg'
import Img9 from '../../assets/New-whatsapp/IMG-20251014-WA0033.jpg'
import Img10 from '../../assets/New-whatsapp/IMG-20251014-WA0045.jpg'
import Img11 from '../../assets/New-whatsapp/IMG-20251014-WA0047.jpg'







const Bunkerline = () => {
  return (
    <>
      <div className>
        <Navbar />
         <div className='px-5 py-30'>
          <h2 className='text-3xl text-center'>Bunker Line Modification</h2>
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
               <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img9} alt="" />
                </div>
              </CarouselItem>
               <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img10} alt="" />
                </div>
              </CarouselItem>
               <CarouselItem className="basis-1/3">
                <div className='p-3'>
                  <img src={Img11} alt="" />
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

export default Bunkerline