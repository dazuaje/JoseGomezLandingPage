import React, { useState, useEffect } from "react";
import "./Search.scss";
import SearchSlider from "./SearchSlider";
import sanityClient from "../../client.js";
import imageUrlBuilder from '@sanity/image-url';
//import { urlFor } from '@sanity/image-url/urlForImage';


//import { createImageUrlBuilder } from "@sanity/image-url";
import ArrowBtn from "../ArrowBtn/ArrowBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
//Image
import bedImage from "../../assets/bed.png";
import surfaceImage from "../../assets/surface.png";
import bathroomImage from "../../assets/bathroom.png";
//import image1 from "../../assets/building1.jpg";
//import LocationImage from "../../../"
import { Icon } from "leaflet";
import yellowMarker from '../../assets/Pin Location-01.png';
import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    TileLayer,
    Popup,
    Marker
} from "react-leaflet";
//import { MarkerLayer, Marker } from "react-leaflet-marker";
import image1 from "../../assets/building6.jpg"

//import markerIconPng from "leaflet/dist/images/marker-icon.png"
/*
const builder = createImageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
*/

const builder = imageUrlBuilder({
    projectId: "00v2934v",
    apiVersion: '2021-10-21',
    useCdn: false,
    dataset: "production"
})




const Search = () => {

    const handleFetch = async () => {
        /*
        const response = await fetch("./data.json");
        const data = await response.json();
        setFetchData(data);
        setSearch(data);
        */
    };
    const [fetchData, setFetchData] = useState([]);
    const [search, setSearch] = useState([]);

    //   images[]->{asset->{url}},

    useEffect(() => {
        handleFetch();
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
            setFetchData(data);
            setSearch(data)
            //setOriginalData(data)
            //console.log(search);
        })
    }, []);

    /*
    const handleSelect1 = (e) => {
        if (e.target.value === "") {
            setSearch(fetchData);
        } else {
            const filterArray = fetchData.filter((property) => property.typeProperty === e.target.value);
            setSearch(filterArray);
        }
    };
    
    const handleSelect2 = (e) => {
        console.log(search);
        if (e.target.value === "") {
            setSearch(fetchData);
        } else {
            const filterArray = fetchData.filter((property) => property.typeOfContract === e.target.value);
            setSearch(filterArray);
        }
    }
    */



    const handleSelect1 = (e) => {
        const typeFilter = e.target.value;
        const contractFilter = document.getElementById("contract-select").value;
        //Fetch Data
        const filteredData = fetchData.filter(
            (property) =>
                (!typeFilter || property.typeProperty === typeFilter) &&
                (!contractFilter || property.typeOfContract === contractFilter)
        );

        setSearch(filteredData);
    };



    const handleSelect2 = (e) => {
        const contractFilter = e.target.value;
        const typeFilter = document.getElementById("type-select").value;
        //FETCH DATA
        const filteredData = fetchData.filter(
            (property) =>
                (!typeFilter || property.typeProperty === typeFilter) &&
                (!contractFilter || property.typeOfContract === contractFilter)
        );

        setSearch(filteredData);
    };













    const [value, setValue] = useState(0);
    //const { property}  = info[fetchData];

    //  console.log(fetchData);
    // copy const { property, typeOfContract, price, image, direction, bathroom, surface, bed, typeProperty } = fetchData[value] || {};
    const {
        Title,
        Price,
        Direction,
        Latitude,
        Longitude,
        Surface,
        Beds,
        images,
        Bathrooms,
        TypeProperty,
        TypeOfContract, } = fetchData[value] || {};


    // console.log(images?.map((image) => image?.asset)); //?.url
    const handleMarkerClick = (index) => {
        setValue(index);
      };
      
    return (
        <section
            className="search__container"
            id="Search"
            data-aos="fade-up"
            data-aos-duration="2000"
        >

            <div className="search__container__container__map">

                <form className="dropdown" action="">

                    <select onChange={handleSelect1} className="dropdown__select1" id="type-select" name="typeHouse" >
                        <option className="All" value="" id="typeOfProp" >Typeof Prop</option>
                        <option className="dropdown--selectOne" value="Apartment">Apartment</option>
                        <option className="dropdown--selectOne" value="House">House</option>
                    </select>

                    <select onChange={handleSelect2} className="dropdown__select2" id="contract-select" name="typePay">
                        <option className="All" value="" >Typeof Status</option>

                        <option className="dropdown--selectTwo" value="Sale">Sale</option>
                        <option className="dropdown--selectTwo" value="Rent">Rent</option>
                    </select>
                </form>

                <MapContainer
                    className="search__container__container--map"
                    center={[25.77427, -80.19366]}
                    zoom={9.5}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/*
 icon={new Icon({ iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png", iconSize: [25, 41], iconAnchor: [12, 41] })} => Works BLue marker
                    */}


                    {
                        search.map((item, index) => {
                            console.log(item);
                            console.log(search);
                            //console.log(fetchData);
                            //console.log(`Index ${index}, value: ${value}`)
                            return (
                                <Marker
                                    eventHandlers={{
                                        click: (e) => { setValue(index) }
                                    }}

                                    key={item._id}
                                    position={[item.Latitude, item.Longitude]}
                                    icon={new Icon({
                                        iconUrl: yellowMarker
                                        // "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png"
                                        , iconSize: [25, 41], iconAnchor: [12, 41]
                                    })}>
                                    <Popup
                                    >
                                        <div className="container__popup">
                                            <img className="container__popup--img" src={image1} />
                                            <div className="container__popup--price">
                                                ${item.Price}
                                            </div>
                                            <h1>{item.Direction}</h1>
                                        </div>
                                    </Popup>
                                </Marker>

                            );
                        })}
                </MapContainer>
            </div>
            <div className="search__container__right">
                <div className="search__container__right__mini">
                    <h3 className="search__container__right--title">
                        {Title}
                        {/*Excepteur sint occaecat*/}
                    </h3>
                    {/*
                    <h5>Lorem ipsum</h5>
                     */}
                    {/*
                    <div className="overlay">
                        <p className="overlay-text">{typeOfContract}</p> <div/>
                         */}








                    <Swiper

                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectCube]}
                        spaceBetween={50}
                        loop={false}
                        speed={2000}
                        /*
                        */
                        breakpoints={{
                            /*
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
                                 slidesPerView: 2,
                                 spaceBetween: 40

                             },
                             970: {
                                 slidesPerView:2,
                                 spaceBetween: 50
  

                             },
                             */
                            1200: {
                                slidesPerView: 1.5,
                                spaceBetween: 30
                            },
                            /*
                            1350: {
                                slidesPerView: 1,
                                spaceBetween: 60
                            }
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

                    >





                        {images?.map((imageUrl, index) => {
                            // console.log(imageUrl.asset.url);
                            return (

                                <SwiperSlide>



                                    <div className="overlay">
                                        <p className="overlay-text">{TypeOfContract}</p>
                                        <img
                                            className="search__container__right--img"
                                            src={imageUrl.asset.url}
                                            alt="apartment"
                                        />
                                    </div>

                                </SwiperSlide>
                            )
                        })}


                        {/*
                            fetchData.map((items) => {
                                console.log(items.images.asset);
                                return (
                                    <SwiperSlide key={items._id}>
                                        {items.images && items.images.asset && items.images.asset.url && (
                                            <img
                                                style={{ width: '100%' }}
                                                className="search__container__right--img"
                                                src={builder.image(items.images.asset).url()}
                                                alt="apartment"
                                            />
                                        )}
                                    </SwiperSlide>

                                )
                            })
                        */}










                        {/*
                                        <SearchSlider images={images} typeOfContract={TypeOfContract}/>
                        {
                            fetchData.map((items) => {
                                items.images && items.images.asset && items.images.asset.url && 

                                    
                                        <SwiperSlide key={items._id}>

                                        <img
                                            style={{ width: '100%' }}
                                            className="search__container__right--img"
                                            src={items.images.asset.url}
                                            alt="apartment"
                                            />


                                    </SwiperSlide>
                              
                              
                            })}








                        <SwiperSlide>
                            <img
                                className="search__container__right--img"
                                src={image}
                                alt="apartment"
                            />
                        </SwiperSlide>


                        <SwiperSlide>
                            <img
                                className="search__container__right--img"
                                src={image}
                                alt="apartment"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className="search__container__right--img"
                                src={image}
                                alt="apartment"
                            />
                        </SwiperSlide>
                    */}

                    </Swiper>































                    {/*

                    </div>
 */}
                    <h2 className="search__container__right--subtitle">
                        {Direction}
                        {/*
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod
                         */}
                    </h2>
                    <p className="search__container__right--p">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam {Title}
                        nonumy eirmod tempor invidunt ut labore et dolore magna
                    </p>

                    <div className="search__container__right__icons">
                        <h5 className="search__container__right--price">${Price}</h5>
                        <div className="search__container__right__icon">
                            <img
                                className="search__container__right--icon"
                                src={surfaceImage}
                                alt=""
                            />
                            <p className="search__container__right--quantity">{Surface}ft</p>
                        </div>

                        <div className="search__container__right__icon">
                            <img
                                className="search__container__right--icon"
                                src={bathroomImage}
                                alt=""
                            />
                            <p className="search__container__right--quantity">{Bathrooms}</p>
                        </div>

                        <div className="search__container__right__icon">
                            <img
                                className="search__container__right--icon"
                                src={bedImage}
                                alt=""
                            />
                            <p className="search__container__right--quantity">{Beds}</p>
                        </div>
                    </div>

                    <ArrowBtn
                        content="Contact Us"
                        background="#F9CD01"
                        border="none"
                        arrowColor="black"
                    />
                </div>
            </div>

            {/*
/*
                            //Which is click, Onclick, defaultState
                            //Headless CMS replace Json File
                            ..Search => algolia
                            //BLur
                            //Mailchimp =>

                            icon={
                                new divIcon({
                                    //className: 'map__container--img',
                                    html: `
                                    <div className="map__container">
                                    <img className="map__container--img" src=${image1}/>
                                    <h3 className="map__container--title">${property}</h3>
                                    </div>`,
                                    //   iconSize: [25, 41],
                                    //   iconAnchor: [12, 41],
                                })
                            }
                            */}



        </section>
    );
};

export default Search;
