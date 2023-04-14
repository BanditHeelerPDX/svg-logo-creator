const { Circle, Square, Triangle } = require("./shapes.js");
const assert = require("assert");

test("should create a Circle with the correct color and text", () => {
  const circle = new Circle("red", "Hello", "white");
  assert.strictEqual(circle.color, "red");
  assert.strictEqual(circle.text, "Hello");
  assert.strictEqual(circle.textColor, "white");
});

test("should create a Square with the correct color and text", () => {
  const square = new Square("blue", "World", "black");
  assert.strictEqual(square.color, "blue");
  assert.strictEqual(square.text, "World");
  assert.strictEqual(square.textColor, "black");
});

test("should create a Triangle with the correct color and text", () => {
  const triangle = new Triangle("green", "!", "yellow");
  assert.strictEqual(triangle.color, "green");
  assert.strictEqual(triangle.text, "!");
  assert.strictEqual(triangle.textColor, "yellow");
});

test("should change the color of a Circle using setColor method", () => {
  const circle = new Circle("red", "Hello", "white");
  circle.setColor("blue");
  assert.strictEqual(circle.color, "blue");
});

test("should change the color of a Square using setColor method", () => {
  const square = new Square("blue", "World", "black");
  square.setColor("green");
  assert.strictEqual(square.color, "green");
});

test("should change the color of a Triangle using setColor method", () => {
  const triangle = new Triangle("green", "!", "yellow");
  triangle.setColor("red");
  assert.strictEqual(triangle.color, "red");
});
