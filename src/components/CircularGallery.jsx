import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Img1 from '../assets/Home_next/Bellow-renewal.webp'
import Img2 from '../assets/Home_next/Bunker-line.png'
import Img3 from '../assets/Home_next/BWTS pipes Fabrication and installation.jpg'
import Img4 from '../assets/Home_next/engine-room.png'
import Img5 from '../assets/Home_next/Hanging-staging.jpg'
import Img6 from '../assets/Home_next/Hydraulic-job.jpg'
import Img7 from '../assets/Home_next/L-T Cooler Pipe Renewal.webp'
import Img8 from '../assets/Home_next/off-source.jpg'
import Img9 from '../assets/Home_next/pre-fabrication.webp'
import Img10 from '../assets/Home_next/Scrubber-repair-works.jpg'
import Img11 from '../assets/Home_next/sea-fastening-job.jpg'
import Img12 from '../assets/Home_next/Steel-plate.jpeg'
import Img13 from '../assets/Home_next/Vessel Name Change.jpeg'
import { Link } from 'react-router'





const CircularGallery = () => {
    return (
        <>
            <div className='md:px-15 px-0'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/Offshore'}>
                                <div>
                                    <img src={Img8} alt="" />
                                    <p className='md:text-2xl py-5'>Offshore Platform Fabrication & Install</p>
                                </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/engine'}>
                                <div>
                                    <img src={Img4} alt="" />
                                    <p className='md:text-2xl py-5'>Engine Room Piping</p>
                                </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/steelplate'}>
                            <div>
                                <img src={Img12} alt="" />
                                <p className='md:text-2xl py-5'>Steel Plate Renewal</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/bunkerline'}>
                            <div>
                                <img src={Img2} alt="" />
                                <p className='md:text-2xl py-5'>Bunker Line Modification</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/seafastening'}>
                            <div>
                                <img src={Img11} alt="" />
                                <p className='md:text-2xl py-5'>Sea Fastening Job</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/bellowrenewal'}>
                            <div>
                                <img src={Img1} alt="" />
                                <p className='md:text-2xl py-5'>Bellow Renewal </p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/prefabrication'}>
                            <div>
                                <img src={Img9} alt="" />
                                <p className='md:text-2xl py-5'>Pre Fabrication</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/hydralics'}>
                            <div>
                                <img src={Img6} alt="" />
                                <p className='md:text-2xl py-5'>Hydraulic Job</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/coolerpipes'}>
                            <div>
                                <img src={Img7} alt="" />
                                <p className='md:text-2xl py-5'>L-T Cooler Pipe Renewal</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/antiheeling'}>
                            <div>
                                <img src={Img1} alt="" />
                                <p className='md:text-2xl py-5'>Anti heeling- Pump Servicing</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/hanging'}>
                            <div>
                                <img src={Img5} alt="" />
                                <p className='md:text-2xl py-5'>Hanging Staging</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/scrubber'}>
                            <div>
                                <img src={Img10} alt="" />
                                <p className='md:text-2xl py-5'>Scrubber Repair Works</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/vesselname'}>
                            <div>
                                <img src={Img13} alt="" />
                                <p className='md:text-2xl py-5'>Vessel Name Change</p>
                            </div>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <Link to={'/bwtspipes'}>
                            <div>
                                <img src={Img3} alt="" />
                                <p className='md:text-2xl py-5'>BWTS pipes Fabrication and installation</p>
                            </div>
                            </Link>
                        </CarouselItem>
                    </CarouselContent>
                    <div className='hidden md:block'>
                        <CarouselPrevious className='bg-black cursor-pointer' />
                        <CarouselNext className='bg-black cursor-pointer' />
                    </div>

                </Carousel>
            </div>

        </>
    )
}

export default CircularGallery
