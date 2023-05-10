//import Shape from "./shapes.js"
const Shape = require("./shapes")

class Square extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    }
  
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"/>`;
    }
  }

//export default Square;
module.exports = Square;