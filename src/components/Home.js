import React, { PureComponent } from 'react';
import Animation from './Animation.js';

class Home extends PureComponent {
  constructor(props){
    super()
    this.state = {
    };
    // this.nextImage = this.nextImage.bind(this)
  }


  render(){
      return (
      <div>
        <Animation/>
        <div className="horizontal-center">
          <p className="small-heading top-margin">COMPUTER SCIENCE AND ENGINEERING</p>
        </div>

        <div className="vhcenter">
          <p className="heading">YEARBOOK</p>
          <div className="border-container">
            <div className="button-container">
              <p className="get-started-button vcenter">RELIVE</p>
            </div>
          </div>
        </div>

        <div className="horizontal-bottom-center">
          <p className="small-heading bottom-margin">IIT BHU VARANASI</p>
        </div>
      </div>

    )
  }
}
export default Home;
