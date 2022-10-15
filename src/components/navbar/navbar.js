import { Component } from "react";
import "../../style/components/navbar.css";
import LogoMomenteSpeciale from "../../assets/Logo momente speciale.png"

class navbar extends Component{
  state={clicked : false};
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return(
    <>
      <nav>
        <div className="navbar-title">
          <img src={LogoMomenteSpeciale} style={{width:400, maxWidth:'20%', minWidth:'15%', maxHeight:'20%', minHeight:'15%'}}/>
        </div>
        <div className="Link">
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><a href="index.html">Acasă</a></li>
            <li><a href="index.html">Portofoliu</a></li>
            <li><a href="index.html">Servicii</a></li>
            <li><a href="index.html">Contactează-ne</a></li>
            <li><a href="index.html">Înregistrează-te</a></li>
            <div className="divizor">/</div>
            <li><a href="index.html">Conectează-te</a></li>
          </ul>
        </div>
        <div className="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>
      </nav>
    </>
  )
}
}

export default navbar;