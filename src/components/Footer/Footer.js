import React from 'react'
import { Link } from 'react-scroll';
import './Footer.scss';
import Image from '../../assets/realLogo.svg'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className="padding_4x" /*data-aos="fade-right" data-aos-duration="2000"*/>
            <div className="flex">
                <section className="flex-content padding_1x">
                    <div className="logo__container">
                        <img className="logo__container--logo" src={Image} alt="" />
                        <h3 className="logo__container--text">Jose Gomez Group</h3>
                    </div>
                    {/*
                    <img src={Image} width="60px" alt="" style={{ marginLeft: '40px' }} />
             */}
                    <a className="a" href="#"><i style={{ color: 'transparent' }} className="fa fa-facebook"></i></a>
                    <AiFillFacebook className='icons' />
                    <AiFillInstagram className='icons' />
                    <AiFillTwitterSquare className='icons' />
                </section>

                <section className="flex-content padding_1x">
                    <h3>Site Map</h3>
                    <a className="a">
                        <Link
                            to="Us"
                            spy={true}
                            smooth={true}
                        //    offset={100}
                            duration={500}
                        //className="nav__item--anchor"
                        >Us</Link></a>

                    <a className='a'>
                        <Link
                            to="Listing"
                            spy={true}
                            smooth={true}
                          //  offset={-100}
                            duration={500}
                        // className="nav__item--anchor"
                        >Listing</Link></a>


<a className="a">
                        <Link
                            to="Search"
                            spy={true}
                            smooth={true}
                            //offset={-100}
                            duration={500}
                        // className="nav__item--anchor"
                        >Properties</Link>
                    </a>


                    <a className="a">
                        <Link
                            to="testimonial"
                            spy={true}
                            smooth={true}
                            //offset={-100}
                            duration={500}
                        // className="nav__item--anchor"
                        >Testimonial</Link>
                    </a>

                </section>

                <section className="flex-content padding_1x">
                    <h3>Contact Us</h3>
                    <a className="a" href="#"><i style={{ marginRight: "10px" }} className='fa fa-envelope'></i>name@gmail.com</a>
                    <a className="a" href="#"><i style={{ marginRight: "10px" }} className='fa fa-phone'></i>1305345290</a>
                    <a className="a" href="#"><i style={{ marginRight: "10px" }} className='fa fa-map-marker'></i>Florida, St 123</a>
                    {/*
      <a href="#">Agencies</a>
       */}
                </section>
                <section className="flex-content padding_1x">
                    <h3>Newsletter</h3>
                    <p style={{ marginBottom: '10px' }}>You can trust us. we only send promo offers,</p>
                    <fieldset className="fixed_flex">
                        <input type="email" name="newsletter" placeholder="Your Email Address" />
                        <button className="btn btn_2"><i className="fa fa-arrow-right" style={{ color: "#000" }}></i></button>

                    </fieldset>
                </section>
            </div>
            {/*
            <hr />
        */}
            <div className="copyright" style={{ visibility: 'hidden' }}>
                <p>Copyright ©2023 All rights reserved || La Aldea Restaurant</p>
                <section className="flex-content padding_1x"> </section>
            </div>
        </footer>

    )
}

export default Footer