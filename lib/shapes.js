const SVG = require('svg');

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.element = new SVG.path()
      .moveTo(50, 0)
      .lineTo(100, 100)
      .lineTo(0, 100)
      .closePath()
      .fill(this.color);
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
    this.element = new SVG.circle(50).fill(this.color);
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
    this.element = new SVG.rect(100, 100).fill(this.color);
  }
}

module.exports = { Shape, Triangle, Circle, Square };