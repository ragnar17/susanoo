import React, { PureComponent } from 'react';

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');
var drops = [];
var colors = []
var fontSize = 10,columns = window.innerWidth / fontSize;
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
  colors[i] = '#' + Math.floor(Math.random()*16777215).toString(16)
}

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    // Draws a square in the middle of the canvas rotated
    // around the centre by this.props.angle
    const { angle } = this.props;
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];

    // ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = colors[i];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
      colors[i] = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
  }
}

  render() {
    return <canvas width={window.innerWidth} height={window.innerHeight} ref={this.canvasRef} />;
  }
}

export default Canvas;
