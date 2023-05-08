import React from 'react'
import './Testimonial.scss';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import SliderTestimonial from '../SliderTestimonial.js/SliderTestimonial';
//import {AiFillStar} from 'react-icons/ai'
import mock from '../mock.js';

//import './Slider.scss'
const Testimonial = () => {
  return (
    <section id='testimonial' data-aos="fade-up" data-aos-duration="2000" className='testimonial__container'>

      <div className="testimonial__container__mini">
        <div className="testimonial__container__content">
          <h3 className='testimonial__container--title'>What They Say</h3>
          <h2 className='testimonial__container--subtitle'>Testimonials</h2>
          <p className='testimonial__container--p'>Lorem ipsum sit amt, consetetut adfsd sit sed momnuv tempor ut</p>
          <ArrowBtn content="Contact Us" color="white" background="#F9CD01" border="none" arrowColor="white" />

        </div>

      </div>
      <div className="testimonial__container__carousel">
<SliderTestimonial slide={mock}/>


      </div>
    </section>
  )
}

export default Testimonial