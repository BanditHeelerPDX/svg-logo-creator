const { createSVGWindow } = require("svgdom");
const { SVG, registerWindow } = require("@svgdotjs/svg.js");

const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color);
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    const draw = SVG(document.documentElement);
    draw.circle(100).fill(this.color).move(100, 50);
    draw.text(this.text).font({ fill: this.textColor, size: 32 }).move(120, 80);
    return draw.svg();
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color);
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    const draw = SVG(document.documentElement);
    draw.rect(100, 100).fill(this.color).move(100, 50);
    draw.text(this.text).font({ fill: this.textColor, size: 32 }).move(120, 80);
    return draw.svg();
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color);
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    const draw = SVG(document.documentElement);
    draw.polygon("100,150 150,50 200,150").fill(this.color);
    draw
      .text(this.text)
      .font({ fill: this.textColor, size: 32 })
      .move(110, 110);
    return draw.svg();
  }
}

module.exports = { Circle, Square, Triangle };
