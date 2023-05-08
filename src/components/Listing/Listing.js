import React, {useEffect, useState} from 'react'
import './Listing.scss';
// Import Swiper React components
import { Slider } from '../Slider/Slider';
//import mock from '../mock';
import sanityClient from "../../client.js";


// Import Swiper styles
import 'swiper/css';
import ArrowBtn from '../../components/ArrowBtn/ArrowBtn';
const Listing = () => {

  const [fetchData1, setFetchData1] = useState([]);
 //   const [search1, setSearch1] = useState([]);
 /*
    useEffect(() => {
     
      sanityClient.fetch(
        `*[_type == "Title"]{
              _id,
              Title,
              Price,
              Direction,
              Latitude,
              Longitude,
              Surface,
              Beds,
              Bathrooms,
              TypeProperty,
              images[]{
                  asset->{url}
                },
              TypeOfContract,
          }`
          ).then((data) => {
            //  setFetchData(data);
            //  setSearch(data)
            //setOriginalData(data)
            //console.log(search);
          })
          setFetchData1(data)
        }, []);
        */
        
    
    const handleFetch1 = async () => {
      const response = await fetch("./data.json"); //./data.json
      const data = await response.json();
      setFetchData1(data);
    //  setSearch1(data);
    };
    
    
    useEffect(() => {
      handleFetch1();
    }, []);
    
    
    //console.log(fetchData1);
  return (
    
    <section className='listing__container' id='Listing'>

      <div className="listing__container__header">
        <div className="listing__container__header__text">
          <h4 className='listing__container--title'>Excepteur sint occaecat</h4>
          <h3 className='listing__container--subtitle'>Lorem ipsum dolor</h3>
        </div>
        <div className="btnNone">

        <ArrowBtn content="Contact Us" background="#F9CD01" border="none" arrowColor="black" />
        </div>

      </div>

      <div className="carousel">
        {/*Carrousel 

*/}
    <Slider slides={fetchData1}/>
      </div>
    </section>
  )
}

export default Listing