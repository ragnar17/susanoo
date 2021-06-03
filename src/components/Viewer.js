import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

var N = 254
class Viewer extends PureComponent {
  constructor(props){
    super()
    document.documentElement.setAttribute('data-theme','light');
    this.state = {
      cur : props.match.params.pageId,
      width : (1920.0/1080.0)*(window.innerHeight-5),
      height : window.innerHeight-5,
      pwidth : window.innerWidth,
      pheight : window.innerHeight,
    };
    this.changeImage = this.changeImage.bind(this)
    this.changeReso = this.changeReso.bind(this)
  }

  changeImage(tmp)
  {
    console.log(window.screen.width + " "+ window.screen.height)
    console.log(window.innerWidth + " "+ window.innerHeight)
    console.log(this.state.width+" "+this.state.height)
    this.setState({
      cur : tmp
    })
  }
  changeReso(){
    this.setState({
      width : (1920.0/1080.0)*(window.innerHeight-5),
      height : window.innerHeight-5,
      pwidth : window.innerWidth,
      pheight : window.innerHeight
    })
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.pageId !== prevProps.match.params.pageId) {
      this.changeImage(this.props.match.params.pageId);
    }
    if(window.innerHeight!=this.state.pheight){
      this.changeReso();
    }
  }

  render(){
      return (
      <div>
        <Link to={'/view/'+((this.state.cur-1)==0 ? N : (this.state.cur-1))}>
          <div class="left-button opacity0">
          </div>
        </Link>
        <Link to={'/view/'+((this.state.cur)%N+1)}>
          <div class="right-button opacity0">
          </div>
        </Link>
        <div className="page-no">
          <p className = "page-no-text">{this.state.cur}</p>
        </div>
        <div className="image-container">
          <img className = "bg-image" style={{ height:this.state.height, width:this.state.width}} src={process.env.PUBLIC_URL + '/images'+'/'+'A ('+this.state.cur+').jpg'} alt="logo" />
        </div>
      </div>
    )
  }
}
export default Viewer;
