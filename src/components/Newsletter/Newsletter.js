import React from 'react'
import './Newsletter.scss';
const Newsletter = () => {
  return (
    <div className="newsletter"   data-aos="fade-up" data-aos-duration="2000">

    <div className='newsletter__container'>
        <div className='newsletter__container__mini'>
            <h1 className='newsletter__container--title'>Never Miss An Opportunity</h1>
            <p className='newsletter__container--p'>Lorem ipsum dolor, sit amet consect nulla, magni, odit consequatur.</p>
            <form className='newsletter__container__form'>
                <input  className='newsletter__container--input'type="text" />
                <input  className='newsletter__container--submit'type="submit" value="Subscribe" />
            </form>
        </div>
    </div>
    </div>
  )
}

export default Newsletter