import React, { PureComponent } from 'react';
import Animation from './Animation.js';
import {Link} from 'react-router-dom';
class Home extends PureComponent {
  constructor(props){
    super()

    this.state = {

    };
    // this.nextImage = this.nextImage.bind(this)
  }

  // if (window.screen.width == window.innerWidth && window.screen.height == window.innerHeight) {
  //     console.log("hhhhhhhhhhhhh")
  // }
  render(){
      return (
      <div>
        <Animation/>
        <div className="horizontal-center">
          <p className="small-heading top-margin make-unselectable">COMPUTER SCIENCE AND ENGINEERING</p>
        </div>
        <div className="horizontal-center">
          <p className="small-heading top-margin little-top-margin make-unselectable">BATCH OF 2017</p>
        </div>
        <div className="vhcenter">
          <p className="heading make-unselectable">YEARBOOK</p>
          <div className="border-container">
          <Link to='/view/1'>
            <div className="button-container">
              <p className="get-started-button vcenter make-unselectable">RELIVE</p>
            </div>
          </Link>
          </div>
        </div>
        <div className="horizontal-bottom-center">
          <p className="small-heading bottom-margin make-unselectable">IIT BHU VARANASI</p>
        </div>
      </div>

    )
  }
}
export default Home;
