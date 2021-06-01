import React, { PureComponent } from 'react';
import Canvas from './Canvas.js'

var fps = 41
class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
    // this.timer = setTimeout(this.updateAnimationState, 999999);
  }
  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    setTimeout(()=>{
        this.setState(prevState => ({ angle: prevState.angle + 1 }));
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      },1000/fps)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas angle={this.state.angle} />;
  }
}
export default Animation;
