import React, {useRef} from 'react'
import './ContactUs.scss';
const ContactUs = () => {



  const nameRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();

    const nombre = nameRef.current.value;
    const correo = emailRef.current.value;
    const description = descriptionRef.current.value;
    const ramdonNumber = Math.floor(1000 + Math.random() * 9000);

    const messsgeTemplate = `https://api.whatsapp.com/send/?phone=541171535651&text=*Welcome%20to+Jose%20Gomez%20Group*%0A%0A*Name*:%20${nombre}%0A*Mi%20Email*:%20${correo}%0A*Message*:%20${description}%0A%0AOrder+Number%${ramdonNumber}%23&type=phone_number&app_absent=0  `;
    window.open(messsgeTemplate); 



    nameRef.current.value = "";
    emailRef.current.value = "";
    descriptionRef.current.value = "";
  };
      return (



        <section className='contactUs__container' data-aos="fade-up" data-aos-duration="2000"id='contactUs'>
            <div className="contactUs__container__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38943765465!2d-80.29949878247598!3d25.7825453114591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sar!4v1678813052885!5m2!1sen!2sar" className='contactUs__container--map' style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contactUs__container__content">
                <div className="contactUs__container__mini__content">
                    <h3 className='contactUs__container--title'>Get in Touch</h3>
                    <h2 className='contactUs__container--subtitle'>Contact Us</h2>
                    {/*
                    <p className='contactUs__container--p'>Lorem ipsum dolor sit amet consectet?</p>
                     */}
                    <div className="contactUs__container__info__icons">
                        <div className="contactUs__container__info__icon">

                            <i style={{ marginRight: "10px", color: '#F9CD01' }} className='fa fa-envelope'></i>
                            <p>Realtor@gmail.com</p>
                        </div>

                        <div className="contactUs__container__info__icon">


                            <i style={{ marginRight: "10px", color: '#F9CD01' }} className='fa fa-phone'></i>
                            <p>1 (435) 3534 3546</p>
                        </div>
                        <div className="contactUs__container__info__icon">


                            <i style={{ marginRight: "10px", color: '#F9CD01' }} className='fa fa-map-marker'></i>
                            <p>St Miami Ave 234</p>
                        </div>
                        {/*
                */}

                    </div>

                    <div className="contactUs__container__form__mini">
                        <form onSubmit={handleSubmit} className='contactUs__container__form'>
                            <input ref={nameRef}className='contactUs__container--input' placeholder='Name' type="text" />
                            <input ref={emailRef}className='contactUs__container--input' type="email" placeholder='Email' />
                            <textarea ref={descriptionRef}className='contactUs__container--textarea' cols="30" placeholder='Message' rows="10"></textarea>
                            <input className='contactUs__container--btn' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactUs