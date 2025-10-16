import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// ✅ Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Additional css
import '../components/SwiperGallery.css'

// ✅ Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


// Import images
import Img1 from '../assets/Gallery/1.jpg'
import Img2 from '../assets/Gallery/2.jpg'
import Img3 from '../assets/Gallery/3.jpg'
import Img4 from '../assets/Gallery/4.jpg'
import Img5 from '../assets/Gallery/5.jpg'
import Img6 from '../assets/Gallery/6.jpg'
import Img7 from '../assets/Gallery/7.jpg'
import Img8 from '../assets/Gallery/8.jpg'
import Img9 from '../assets/Gallery/9.jpg'
import Img10 from '../assets/Gallery/10.jpg'
import Img11 from '../assets/Gallery/11.jpg'
import Img12 from '../assets/Gallery/12.jpg'
import Img13 from '../assets/Gallery/13.jpg'



export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className='md:px-30'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src={Img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img8} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img9} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img10} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img11} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img12} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img13} />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={10}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img8} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img9} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img10} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img11} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img12} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img13} />
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}
