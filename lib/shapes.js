class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  shapeColor() {
    return this.shapeColor;
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<circle cx="25" cy="75" r="20" fill=${shapeColor}/>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill=${shapeColor}/>`;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<rect x="10" y="10" width="30" height="30" fill=${shapeColor}/>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
