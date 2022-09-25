import { Component } from "react";
import "../../style/components/navbar.css";

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
          Momente Speciale
        </div>
        <div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><a className="active" href="index.html">Acasă</a></li>
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