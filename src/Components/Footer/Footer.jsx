import React, {useEffect} from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {SiYourtraveldottv} from 'react-icons/si'
import {FaYoutube} from 'react-icons/fa'
import LogoMomenteSpeciale from '../../Assets/momente negru.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
  
 const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

   return (
     <div className='footer'>
      <div className="secCotainer container grid">

      <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle"></span>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          
         </div>

         <div data-aos="fade-up" data-aos-duration="2500" className="logoDiv">
         <div className="footerLogo">
            <a className="logo flex"><img src={LogoMomenteSpeciale} style={{width:400, maxWidth:'60%', minWidth:'60%', maxHeight:'20%', minHeight:'15%'}}/></a>
          </div>

          <div  className="socials flex">
              <a href='https://www.facebook.com/profile.php?id=100086559862433' target="_blank" rel="noreferrer" className="logo flex"><ImFacebook className="icon"/></a>
              <a href='https://www.youtube.com/@momente_speciale' target="_blank" rel="noreferrer" className="logo flex"><FaYoutube className="icon"/></a>
              <a href='https://www.instagram.com/momente_speciale_panciu/' target="_blank" rel="noreferrer" className="logo flex"><AiFillInstagram className="icon"/></a>
          </div>
         </div>

         <div data-aos="fade-up" data-aos-duration="3500" className="footerLinks">
          <span className="linkTitle">Contactează-ne!</span>
           <span className='phone'>+40 762 100 854</span>
           <span className="email">alinbara33@gmail.com</span>
          
         </div>

         <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle"></span>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          
         </div>
      </div> 
     </div>
   )
 }
 
 export default Footer