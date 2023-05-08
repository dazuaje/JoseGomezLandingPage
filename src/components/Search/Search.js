import React, { useState, useEffect, useCallback } from "react";
import "./Search.scss";

//import Map from '../Map';
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




const Search = () => {
    const [fetchData, setFetchData] = useState([]);
    const [search, setSearch] = useState([]);

    const handleFetch = async () => {
        const response = await fetch("./data.json");
        const data = await response.json();
        setFetchData(data);
        setSearch(data);
    };


    useEffect(() => {
        handleFetch();
    }, []);

 

    const handleSelect1 = (e) => {
        const typeFilter = e.target.value;
        const contractFilter = document.getElementById("contract-select").value;

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
    const { property, typeOfContract, price, images, direction, bathroom, surface, bed, typeProperty } = fetchData[value] || {};

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
                          
                            return (
                                <Marker
                                    eventHandlers={{
                                        click: (e) => {
                                            // console.log("Marker", e);
                                            setValue(index)
                                        }
                                    }}
                                    // onClick={() => alert("hi")}
                                    key={item.id}
                                    position={[item.latitud, item.longitud]}
                                    icon={new Icon({
                                        iconUrl: yellowMarker
                                        // "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png"
                                        , iconSize: [25, 41], iconAnchor: [12, 41]
                                    })}>
                                    <Popup
                                    >
                                        <div className="container__popup">
                                            <img className="container__popup--img" src={item.images[0]} />
                                            <div className="container__popup--price">
                                                ${item.price}
                                            </div>
                                            <h1>{item.direction}</h1>
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
                        {property}
                        {/*Excepteur sint occaecat*/}
                    </h3>
                    {/*
                    <h5>Lorem ipsum</h5>
                     */}








                    <Swiper

                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectCube]}
                        spaceBetween={50}
                        loop={false}
                        speed={2000}
                        /*
                        */
                        breakpoints={{

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



                        {images?.map((imageUrl, index) => (
                            <SwiperSlide>

                                
                                <div className="overlay">
                                    <p className="overlay-text">{typeOfContract}</p>
                                <img
                                    className="search__container__right--img"
                                    src={imageUrl}
                                    alt="apartment"
                                    />
                                    </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>









                    {/*

                    </div>
 */}
                    <h2 className="search__container__right--subtitle">
                        {direction}
                        {/*
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod
                         */}
                    </h2>
                    <p className="search__container__right--p">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam {property}
                        nonumy eirmod tempor invidunt ut labore et dolore magna
                    </p>

                    <div className="search__container__right__icons">
                        <h5 className="search__container__right--price">${price}</h5>
                        <div className="search__container__right__icon">
                            <img
                                className="search__container__right--icon"
                                src={surfaceImage}
                                alt=""
                            />
                            <p className="search__container__right--quantity">{surface}</p>
                        </div>

                        <div className="search__container__right__icon">
                            <img
                                className="search__container__right--icon"
                                src={bathroomImage}
                                alt=""
                            />
                            <p className="search__container__right--quantity">{bathroom}</p>
                        </div>

                        <div className="search__container__right__icon">
                            <img
                                className="search__container__right--icon"
                                src={bedImage}
                                alt=""
                            />
                            <p className="search__container__right--quantity">{bed}</p>
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
