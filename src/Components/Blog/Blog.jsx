import React, {useEffect} from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'
// Import Images ========================>
import img from '../../Assets/image (14).jpg'
import img2 from '../../Assets/image (15).jpg'
import img3 from '../../Assets/image (7).jpg'
import img4 from '../../Assets/image (16).jpg'
// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
 

const Posts = [
  {
    id: 1,
    postImage: img,
    title: 'Nuntă',
    desc: 'info ce facem la nuntă',
    mama: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02Mox15H36KZrgcdqBgXjpTiu49rmsfLJmzhB9siCG6FtvNbvHQjY5yzToyjvtNM3ml&id=100086559862433'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Botez',
    desc: 'Info ce facem la botez',
    mama: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ZjMmeMXKRNVd8zLNbYGP1SEo6mBFkx5dskAcxKJC5couWmdHYWkQxszfQf89GmULl&id=100086559862433'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Majorat',
    desc: 'Info ce facem la ședința foto',
    mama: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02BQfw2WExAawVyniYVtScxB4ZxnskbyFdp2xJLArpPeNNGfTWwvDMHWWEpYC9BNgBl&id=100086559862433'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Cununie Civilă',
    desc: 'Info ce facem la cununie civilă',
    mama: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0TrJ79RVA7wxiBPmKuP5neNEBGMkhQvxSQpd9Bv6HNPKnWyrMpLcYXXaoRw97zwQol&id=100086559862433'
  }
]
 const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 


   return (
     <section className='blog container section'>
      <div className="secContainer">
      <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
          Portofoliu
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
          Trăirea unui moment la doar un click dintanță
          </p>
 
        </div>

        <div className="mainContainer grid">
           {
            Posts.map(({id, postImage, title, desc, mama})=>{
              return (
                <div key={id} className="singlePost grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="imgDiv">
                  <img src={postImage} alt="Blog post image" />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>
                  <p data-aos="fade-up" data-aos-duration="3000"></p>

                    <a href={mama} target="_blank" rel="noreferrer" className='flex' data-aos="fade-up" data-aos-duration="3500"> Vezi <BsArrowRightShort className='flex' data-aos="fade-up" data-aos-duration="3500"/></a>
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
 
 export default Blog