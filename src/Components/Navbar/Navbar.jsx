import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {SiYourtraveldottv} from 'react-icons/si'
import LogoMomenteSpeciale from '../../Assets/momente negru.png'

const Navbar = () => {

  const [active, setActive]  = useState('navBar')
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
      setActive('navBar')
  }
  
  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
       <header className={transparent}>
        
          <div className="LogoMomenteSpeciale">
            <a href="#" className="logo flex"><img src={LogoMomenteSpeciale} style={{width:400, maxWidth:'60%', minWidth:'60%', maxHeight:'20%', minHeight:'15%'}}/> </a>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">+40 762 100 854</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">&</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">+40 762 102 003</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink"></a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink"></a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink"></a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink"></a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink"> alinbara33@gmail.com </a>
              </li>
            </ul>
          </div>
       </header>
    </section>
  )
}

export default Navbar