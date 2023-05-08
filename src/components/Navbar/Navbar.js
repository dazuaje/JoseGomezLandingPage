import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import ArrowBtn from '../../components/ArrowBtn/ArrowBtn';
import Logo from '../../assets/realLogo.svg';
import "./Navbar.scss";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <header data-aos="fade-right" data-aos-duration="1000">
      <div className="logo__container">
        <img className="logo__container--logo" src={Logo} alt="" />
        <h3 className="logo__container--text">Jose Gomez Group</h3>
      </div>
      <nav className={`${show ? "responsive_nav" : ""}`}>
        <Link
          to="Us"
         onClick={handleShow}
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className="nav__item--anchor"
          
        >
          Us
        </Link>
        <Link
          to="Listing"
          onClick={handleShow}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav__item--anchor"
        >
          Listing
        </Link>
        <Link
          to="Search"
          onClick={handleShow}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav__item--anchor"
        >
          Properties
        </Link>

        <Link
          to="testimonial"
          onClick={handleShow}
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="nav__item--anchor"
        >
          Testimonial
        </Link>



        <Link
          to="contact"
      //    onClick={handleShow}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav__item--anchor"
        >
          <ArrowBtn content="Contact Us" background="#F9CD01" border="none" arrowColor="black" />
        </Link>



        <button className="nav-btn nav-close-btn" onClick={handleShow}>
          <FaTimes className="icon--x" />
        </button>
      </nav>
      <button className="nav-btn" onClick={handleShow}>
        <FaBars className="icon--bar" />
      </button>
    </header>
  );
};

export default Navbar;


