import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
var isNavbarEnable = 0;
function expandNavbar(){
  if(!isNavbarEnable){
    document.getElementById('nav-container').style.cssText = 'display:inline';
    document.getElementsByClassName('expand-nav-off')[0].style.cssText = "display:none";
    document.getElementsByClassName('expand-nav-on')[0].style.cssText = "display:inline";
    // document.getElementsByClassName('nav-container')[0].style.cssText = "transform: translateX(0%);";
  }
  else {
    document.getElementById('nav-container').style.cssText = 'display:none;';
    document.getElementsByClassName('expand-nav-off')[0].style.cssText = "display:inline";
    document.getElementsByClassName('expand-nav-on')[0].style.cssText = "display:none";
  }
  isNavbarEnable ^= 1
}
function Navbar(){

  return (
    <div>
      <div onClick={expandNavbar} id="expand-button" class = "nav-sphere">
      <svg  className="expand-nav-off" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512.002 512.002" xml="preserve">
        <path  d="M496.647,312.107l-47.061-36.8c1.459-12.844,1.459-25.812,0-38.656l47.104-36.821
        c8.827-7.109,11.186-19.575,5.568-29.419l-48.96-84.629c-5.639-9.906-17.649-14.232-28.309-10.197l-55.467,22.315
        c-10.423-7.562-21.588-14.045-33.323-19.349l-8.512-58.923c-1.535-11.312-11.24-19.72-22.656-19.627h-98.133
        c-11.321-0.068-20.948,8.246-22.528,19.456l-8.533,59.093c-11.699,5.355-22.846,11.843-33.28,19.371L86.94,75.563
        c-10.55-4.159-22.549,0.115-28.096,10.005L9.841,170.347c-5.769,9.86-3.394,22.463,5.568,29.547l47.061,36.8
        c-1.473,12.843-1.473,25.813,0,38.656l-47.104,36.8c-8.842,7.099-11.212,19.572-5.589,29.419l48.939,84.651
        c5.632,9.913,17.649,14.242,28.309,10.197l55.467-22.315c10.432,7.566,21.604,14.056,33.344,19.371l8.533,58.88
        c1.502,11.282,11.147,19.694,22.528,19.648h98.133c11.342,0.091,21-8.226,22.592-19.456l8.533-59.093
        c11.698-5.357,22.844-11.845,33.28-19.371l55.68,22.379c10.55,4.149,22.543-0.122,28.096-10.005l49.152-85.12
        C507.866,331.505,505.447,319.139,496.647,312.107z M255.964,362.667c-58.91,0-106.667-47.756-106.667-106.667
        s47.756-106.667,106.667-106.667s106.667,47.756,106.667,106.667C362.56,314.882,314.845,362.597,255.964,362.667z"/>
      </svg>
      <svg  className="expand-nav-on" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 width="123.05px" height="123.05px" viewBox="0 0 123.05 123.05"
      	 xml="preserve">
      	<path d="M121.325,10.925l-8.5-8.399c-2.3-2.3-6.1-2.3-8.5,0l-42.4,42.399L18.726,1.726c-2.301-2.301-6.101-2.301-8.5,0l-8.5,8.5
      		c-2.301,2.3-2.301,6.1,0,8.5l43.1,43.1l-42.3,42.5c-2.3,2.3-2.3,6.1,0,8.5l8.5,8.5c2.3,2.3,6.1,2.3,8.5,0l42.399-42.4l42.4,42.4
      		c2.3,2.3,6.1,2.3,8.5,0l8.5-8.5c2.3-2.3,2.3-6.1,0-8.5l-42.5-42.4l42.4-42.399C123.625,17.125,123.625,13.325,121.325,10.925z"/>
      </svg>
      </div>
      <nav id="nav-container" className = "nav-container">
        <ul className = "nav-list">
          {/*<li className = "nav-item ">
            <input className="input-box vcenter" value = {0} type = "number" placeholder = "Jump To" />
          </li>*/}
          <li className = "nav-item">
            <Link to='/susanoo' style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <div className="button-box">
                <p className="vcenter"> Home </p>
              </div>
            </Link>
          </li>

          <li className = "nav-item">
            <Link to='/view/1' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="button-box">
              <p className="vcenter"> First Year </p>
            </div>
            </Link>
          </li>

          <li className = "nav-item">
            <Link to='/view/40' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="button-box">
              <p className="vcenter"> Second Year </p>
            </div>
            </Link>
          </li>
          <li className = "nav-item">
            <Link to='/view/86' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="button-box">
              <p className="vcenter"> Third Year </p>
            </div>
            </Link>
          </li>
          <li className = "nav-item">
            <Link to='/view/157' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="button-box">
              <p className="vcenter"> Fourth Year </p>
            </div>
            </Link>
          </li>
          <li className = "nav-item">
            <Link to='/view/173' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="button-box">
              <p className="vcenter"> Hall of Fame </p>
            </div>
          </Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
