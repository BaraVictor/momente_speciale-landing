import React, {useEffect}  from 'react'
import './about.css'
import customerImg from '../../Assets/customer.png'
import mountainImg from '../../Assets/mountain.png'
import climbingImg from '../../Assets/climbing.png'
import video from '../../Assets/video 1.mp4'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'

 
 const About = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 
  
   return (
     <section className='about  section'>
      <div className="secContainer">
       
        <h2 className='title'>
          Cine suntem?
        </h2>
        

        <div className="mainContent container grid">

              <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
                <img src={mountainImg} alt="Image" />
                <h3>Bâra Alin-Victor</h3>
                <p>Sunt Bâra Alin-Victor, am 37 de ani, locuiest în orașul Panciu, Vrancea și pot spune că fotografia va fi mereu în inima mea.</p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
                <img src={climbingImg} alt="Image" />
                <h3>Bâra Alina-Paula</h3>
                <p>Sunt Bâra Alina-Paula, am 37 de ani, locuiest în orașul Panciu, Vrancea și pentru mine nu exista ceva mai plăcut decât videografia.</p>
              </div>

              <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
                <img src={customerImg} alt="Image" />
                <h3>Bâra Victor</h3>
                <p>Sunt Bâra Victor, am 15 de ani, locuiest în orașul Panciu, Vrancea și imi place videografia, dar sunt complet îndrăgostit de dronă.</p>
              </div>
        </div>

        <div className="videoCard container">
           <div className=" cardContent grid">
                    <div data-aos="fade-right" className="cardText">
                      <h2>Momente Speciale</h2>
                      <p>
                        Noi suntem Momente Speciale, o familie unită din micul orășel Panciu, Vrancea. 
                        Facem fotografii și filmăm la evenimente de aproape 2 ani, dar această pasiune a început de la o vârstă fragedă a fiecăruia dintre noi, 
                        devenind o tradiție a familiei.
                      </p>
                    </div>

                    <div data-aos="fade-left" className="cardVideo">
                      <video src={video} autoPlay muted loop type="video/mp4"></video>
                    </div>
           </div>
        </div>
      </div>

     </section>
   )
 }
 
 export default About