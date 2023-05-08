import React from 'react'
import './Search.scss';
import { SwiperSlide } from "swiper/react";

const SearchSlider = ({ images, typeOfContract }) => {
 //   console.log(images);
 console.log(images);
    return (
    
<>
        
     
                <SwiperSlide key={images}>

                <div className="overlay">
            <p className="overlay-text">{typeOfContract}</p>
                
                return (

                    <img
                      style={{width: '100%'}}
                    className="search__container__right--img"
                    src={images.asset.url}
                    alt="apartment"
                    />
                    )
                    
                    
                    </div >
                </SwiperSlide>
            
</>
            
    )
}

export default SearchSlider