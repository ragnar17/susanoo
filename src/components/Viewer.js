import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

var N = 254
class Viewer extends PureComponent {
  constructor(props){
    super()
    this.state = {
      cur : props.match.params.pageId
    };
    this.changeImage = this.changeImage.bind(this)
  }

  changeImage(tmp)
  {
    this.setState({
      cur : tmp
    })
  }
    componentDidUpdate(prevProps) {
    if (this.props.match.params.pageId !== prevProps.match.params.pageId) {
      this.changeImage(this.props.match.params.pageId);
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
        <img className = "bg-image" src={process.env.PUBLIC_URL + '/images'+'/'+'A ('+this.state.cur+').jpg'} alt="logo" />

      </div>
    )
  }
}
export default Viewer;
