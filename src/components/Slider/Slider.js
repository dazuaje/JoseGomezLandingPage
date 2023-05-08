
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './Slider.scss'
export const Slider = ({ slides }) => {
 // console.log(slides);
  return (
    <Swiper
    data-aos="fade-right" data-aos-duration="2000"
      className="swiper"
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      loop={false}
      speed={2000}
      /*
      */
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 10

        },
        680: {
          slidesPerView: 2,
          spaceBetween: 10

        },
        800: {
          slidesPerView: 2.5,
          spaceBetween: 10

        },
        970: {
          slidesPerView: 3,
          spaceBetween: 10

        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 10
        }
        /*
        */
      }}

      autoplay={{
        disableOnInteraction: false,
        delay: 2000,
      }}
      //slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
    //  onSlideChange={() => console.log('slide change')}
      //onSwiper={(swiper) => console.log(swiper)}

    /*
    effect={"cube"}
    cubeEffect={{
        shadow: true,
        slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
  }}
  */
    >
      {/*slides.map((slide) => (

        <SwiperSlide className="slider__container" key={slide.Latitude}>
            
            <div className="slider__container--container">
            <img className="slider--img" src={slide.images[0].asset.url} alt={slide.Title} />
             
            <h3 className="slider__container--index">0{slide.Beds}</h3>
        <div className="slider__container__title__container">

            <h5 className="slider__container--title">{slide.Direction}</h5>
        </div>
            <h5 className="slider__container--price">${slide.Price}</h5>
            </div>
          {/*
          
        </SwiperSlide>
      ))*/}





{slides.map((slide, index) => (
        
        <SwiperSlide className="slider__container" key={index}>
            
            <div className="slider__container--container">
            <img className="slider--img" src={slide.images[0]} alt={slide.property} />
             
            <h3 className="slider__container--index"></h3>
        <div className="slider__container__title__container">

            <h5 className="slider__container--title">{slide.direction}</h5>
        </div>
            <h5 className="slider__container--price">${slide.price}</h5>
            </div>
          {/*
          */}
        </SwiperSlide>
      ))}
    </Swiper>
  )

}