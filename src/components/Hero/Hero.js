import React from 'react';
import './Hero.scss';
import { Link } from 'react-scroll';
import HeroNumber from '../../assets/heroNumber.png';
import {FaPhoneAlt} from 'react-icons/fa'
const Hero = () => {
    return (
        <section className='hero__container' data-aos="fade-right" data-aos-duration="2500">
            <div className="hero__container__mini">
                <h1 className='hero__container--title'>POINT ME IN THE DIRECTION OF <span className='hero__container--highlight'>YOUR BRAND NEW HOME</span></h1>
                <p className='hero__container--subtitle'>Trust you residential real estate agent.</p>
           {/*
                <form className='hero__container__form'>
                    <input className='hero__container--input' type="text" />
                    <input className='hero__container--input submit' type="submit" value="Search" />
           
                </form>
                */}
                <Link
          to="contactUs"
          //onClick={handleShow}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
                <div className="hero__container__contact">
          
                    {/*
                    <img className='hero__container__contact--img' src={HeroNumber} alt="" />
                */}
                     <div className="hero__container__contact__icon">

                     <FaPhoneAlt className='hero__container__contact--icon'/>
                     </div>
                    <p className='hero__container__contact--text' >+1 (890) 123 - 4355</p>
                </div>
                </Link>
            </div>
        </section>
    )
}

export default Hero