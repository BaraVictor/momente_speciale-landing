import React, {useEffect} from 'react'
import './offer.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {MdKingBed} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdBathtub} from 'react-icons/md'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'


// Images ======================>
import img12 from '../../Assets/image (12).jpg'
import img13 from '../../Assets/image (13).jpg'
import img11 from '../../Assets/image (11).jpg'
// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
 
  {
  id:1,
  imgSrc: img11,
  destTitle: 'Machu Picchu',
  location: 'Peru',
  price: 'Ofertă Nuntă+',
  mama: 'de la 4000 lei',
  tata: '2 albume'
  },

  {
  id:2,
  imgSrc: img12,
  destTitle: 'Guanajuato',
  location: 'Mexico',
  price: 'Ofertă Botez+',
  mama: 'de la 3000 lei',
  tata: '2 albume'
  },

  {
  id:3,
  imgSrc: img13,
  destTitle: 'Angkor Wat',
  location: 'Cambodia',
  price: 'Ofertă Majorat+', 
  mama: 'de la 600 lei',
  tata: '1 albume'
  },
  

]

 
 const Offer = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, []) 


   return (
     <section className='offer section container'>
      <div className="secContainter">

        <div data-aos="fade-up" data-aos-duration="2000"  className="secIntro">
          <h2 className='secTitle'>
          Oferte Extra-Speciale
          </h2>
          <p>
            Oferte extra-speciale pentru momente extra-speciale
          </p>
 
        </div>

        <div className="mainContent grid">
          {/* Single Offer from the map Array */}

          {
            Data.map(({id, imgSrc, destTitle, location, price, mama, tata })=>{
              return (
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={destTitle} />

             <span className="discount">
              +Album Cadou
             </span>
            </div>

              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    {price}
                  </h4>
                  <span className="price flex">
                    {mama}
                  </span>
                </div>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                      <small>1 Fotograf</small>
                  </div>
                  <div className="singleAmenity flex">
                      <small>1 CameraMan Mobil</small>
                  </div>
                  <div className="singleAmenity flex">
                      <small>1 CameraMan Static</small>
                  </div>
                  <div className="singleAmenity flex">
                      <small>Filmare Dronă</small>
                  </div>
                  <div className="singleAmenity flex">
                      <small>{tata}</small>
                  </div>
                </div>
                
                
                <a href="https://www.facebook.com/profile.php?id=100086559862433" target="_blank" rel="noreferrer">
                <button className='btn flex'>Momente Extra-Speciale</button>
                </a>

              </div>
            </div>
              )
            })
          }

        
           
        </div>
      </div>
     </section>
   )
 }
 
 export default Offer