import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PCard from "./PCard";
import slide1 from "../assets/Slider1/slide1.png";
import slide2 from "../assets/Slider1/slide2.png";
import slide3 from "../assets/Slider1/slide3.jpeg";
import Biten from "./Biten"


let selected = "Biten";

const ProjectSlide = () => {



    const [Slides, setSlides] = useState(Biten);



    return (
        <Swiper
            modules={[Navigation]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={4}
            spaceBetween={110}
            className="h-full w-full "
        >

            {Slides.map((slide, index) => (


                <SwiperSlide key={index}>

                    <PCard slide={slide} />
                </SwiperSlide>



            ))}



        </Swiper>
    );
};

export default ProjectSlide;
