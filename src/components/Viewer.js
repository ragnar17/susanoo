import React, { PureComponent } from 'react';


class Viewer extends PureComponent {
  constructor(props){
    super()
    this.state = {
      cur : 1
    };
    this.nextImage = this.nextImage.bind(this)
  }

  nextImage()
  {
    // if (window.screen.width == window.innerWidth && window.screen.height == window.innerHeight) {
    //     console.log("hhhhhhhhhhhhh")
    // }
    this.setState({
      cur : (this.state.cur)%3 + 1
    })
  }
  render(){
      return (
      <div>
        <img className = "bg-image" src={process.env.PUBLIC_URL + '/images'+'/'+this.state.cur+'.jpg'} alt="logo" />
        <button onClick={this.nextImage}>Next</button>
      </div>
    )
  }
}
export default Viewer;
