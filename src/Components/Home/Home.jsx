import React, {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LogoMomenteSpeciale from '../../Assets/momente negru.png'
import Video1 from "../../Assets/video 1.mp4"

 
 const Home = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
 
   return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
           <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
           <img src={LogoMomenteSpeciale} style={{width:400, maxWidth:'60%', minWidth:'60%', maxHeight:'20%', minHeight:'15%'}}/>
           </h1>
           <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
           Imortalează cele mai frumoase momente din viața ta!
           </p>
        </div>
      </div>
    </section>
   )
 }
 
 export default Home