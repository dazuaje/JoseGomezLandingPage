import React, {useState} from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './SliderTestimonial.scss';
const SliderTestimonial = ({ slide }) => {


    return (
        <>

            <Swiper
                className={`swiper-2`}
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween={20}
                loop={false}
                speed={2000}
                style={{margin: '0 20px'}}
                autoplay={{
                    disableOnInteraction: false,
                    delay: 2000,
                }}
                //slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false }}
          //      onSlideChange={() => console.log('slide change')}
            //    onSwiper={(swiper) => console.log(swiper)}

                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 15
                        
                    },
                    680: {
                        slidesPerView: 3,
                        spaceBetween: 20
                        
                    },
                    /*
                    800: {
                      slidesPerView: 2.5,
                      spaceBetween: 10
            
                    },
                    970: {
                      slidesPerView: 3,
                      spaceBetween: 10
            
                    },
                    1100: {
                      slidesPerView: 4,
                      spaceBetween: 10
                    }
                    */
                  }}
                
            >
                {/*
        {slides.map((slide) => (
          <img className="slider--img" src={slide.image} alt={slide.title} />
          ))}
        */}



                {slide.map((slides) => {
          
                    return (
                        

//{`${'swiper-slide' == 'swiper-slide-active'} `? 'activo' : ''}>
//className={`${currentSLide === "swiper-slide-active"}` ? "activo" : ""}
                        <SwiperSlide key={slides.index}>

{/*
                            ${'swiper-slide' === 'swiper-slide.swiper-slide-active'}` ? "tre" : ''}
 */}

                            <div className={`testimonial__container__background`}>

                                <div className='testimonial__container__background__mini'>
                                    <h4 className={`testimonial__container__background--title`}>{slides.title}</h4>
                                    <p className='testimonial__container__background--p'>{slides.subTitle}</p>
                                    <div className='testimonial__container__background__icon'>

                                        <AiFillStar className='testimonial__container__background--icon' />
                                        <AiFillStar className='testimonial__container__background--icon' />
                                        <AiFillStar className='testimonial__container__background--icon' />
                                        <AiFillStar className='testimonial__container__background--icon' />
                                        <AiFillStar className='testimonial__container__background--icon' />

                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>

                    )
                })
                }

            </Swiper>
        </>
    )
}

export default SliderTestimonial