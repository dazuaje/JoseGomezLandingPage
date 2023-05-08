import { useEffect, useState } from 'react';
import Spinner from './components/Spinner/Spinner'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Newsletter from './components/Newsletter/Newsletter';
import Copyright from './components/Copyright/Copyright';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer'
import Listing from './components/Listing/Listing';
import Search from './components/Search/Search';
import SearchSanity from "./components/SearchSanity/Search"
import SearchSanity1 from './components/SearchSanity1/SearchSanity1';
import Testimonial from './components/Testimonial/Testimonial';
import AOS from "aos";
import 'aos/dist/aos.css';
function App() {
  useEffect( () => {
    
    AOS.init({
      duration: 200
    });
    AOS.refresh();
  }, [])

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])


  return (
    <div className="App">

      {
        loading ? <Spinner />
          :
          <>
            <div className="background" data-aos="fade-left" data-aos-duration="2000">
              <Navbar />
              <Hero />
            </div>
            <AboutUs />
            <Listing />
            <SearchSanity1/>
            {/*
          <Search/>
          <SearchSanity/>
          */}
            <Newsletter />
            <Testimonial />
            <ContactUs />
            <Footer />
            <Copyright />
          </>
      }

    </div>
  );
}

export default App;



{/**

  "id": 5,
    "property": "Miami House 5",
    "latitud": 25.785009676407324,
    "longitud": -80.26554311128515,
    "price": 500,
    "images": ["./building2.jpg", "./building1.jpg", "./building3.jpg"],
    "bathroom": 4,
    "surface": "900ft",
    "bed": 4,
    "direction": "Av. Florida",
    "typeProperty": "House",
    "typeOfContract": "Sale"
*/}