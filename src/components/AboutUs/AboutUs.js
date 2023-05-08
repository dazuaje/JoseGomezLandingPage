import React from 'react'
import './AboutUs.scss';
import realtorPhoto1 from '../../assets/realtorPhoto1.jpg'
/*
import AboutUsPhoto from '../../assets/aboutUsPhoto.png';
import AboutUsBorder from "../../assets/aboutUsBorder.png"
*/
const AboutUs = () => {
  return (
    <section className='aboutUs__container' id='Us' data-aos="fade-down" data-aos-duration="1000">
      <div className="aboutUs__container__images">
        <div className="aboutUs__container__images__mini">
          {/*
          <img src={realtorPhoto1} alt="" />
          <img className="aboutUs__container--imagePhoto" src={AboutUsPhoto} alt="" srcset="" />
          
          <img className="aboutUs__container--imageBorder" src={AboutUsBorder} alt="" srcset="" />
           */}
        </div>
      </div>

      <div className="aboutUs__container__section">
        <div className="aboutUs__container__mini">
          <h2 className='aboutUs__container--title'>Jose Alejandro Gomez <span className='aboutUs__container--highlight'>Most recommended agent in Miami <span className='aboutUs__container--line'> -----</span></span></h2>
          
         {/**
          <p className='aboutUs__container--subtitle'>Lorem ipsum dolor si</p>
          */}

          <div className="aboutUs__container__container">
            <div className="aboutUs__container__number">
              <h3 className='aboutUs__container--number'>1</h3>
            </div>
            <div className="aboutUs__container__content__container">
              <h4 className='aboutUs__container__content--title'>Get to know me</h4>
              <p className='aboutUs__container__content--text'>I was born in Venezuela and base my services in Florida, US. With just 3 years of experience I have been able to study the market and use my skills for the good of citizens. I believe in helping one another and the joy of securing a new home for someone in need is beyond compare. I have close over 20 sales annually finding commodities for entire families so you know that you are in good hands when it comes to our team. We guarantee:</p>
            </div>
          </div>

{/*

          <div className="aboutUs__container__container">
            <div className="aboutUs__container__number">
              <h3 className='aboutUs__container--number'>2</h3>
            </div>
            <div className="aboutUs__container__content__container">
              <h4 className='aboutUs__container__content--title'>Duis aute irure dolor in reprehenderit</h4>
              <p className='aboutUs__container__content--text'>Lorem ipsum dolorvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
            </div>
          </div>



          <div className="aboutUs__container__container">

            <div className="aboutUs__container__number">

              <h3 className='aboutUs__container--number'>3</h3>
            </div>
            <div className="aboutUs__container__content__container">
              <h4 className='aboutUs__container__content--title'>Duis aute irure dolor in reprehenderit</h4>
              <p className='aboutUs__container__content--text'>Ipsum dopor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
            </div>
          </div>
        */}
        </div>

      </div>
    </section>
  )
}

export default AboutUs