class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  draw() {
    throw new Error("You must implement the draw method");
  }
}

class Triangle extends Shape {
  constructor(color) {
    super("triangle", color);
  }

  draw() {
    // use draw to create triangle
    // return svg string of triangle
  }
}

class Circle extends Shape {
  constructor(color) {
    super("circle", color);
  }

  draw() {
    // you know what to do
  }
}

class Square extends Shape {
  constructor(color) {
    super("square", color);
  }

  draw() {
    // dont act like you haven't already done this
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};
