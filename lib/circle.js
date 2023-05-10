import Shape from "./shapes.js"

class Circle extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
  }

  
  export default Circle