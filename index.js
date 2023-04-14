const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const fs = require("fs");

async function logo() {
  const shapeQuestion = {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "square", "triangle"],
  };
  const shapeColorQuestion = {
    type: "input",
    name: "shapeColor",
    message: "Choose a color for the shape:",
  };
  const textQuestion = {
    type: "input",
    name: "text",
    message: "Choose three letters of text:",
  };
  const textColorQuestion = {
    type: "input",
    name: "textColor",
    message: "Choose a color for the text:",
  };

  const answers = await inquirer.prompt([
    shapeQuestion,
    shapeColorQuestion,
    textQuestion,
    textColorQuestion,
  ]);

  let shape;

  if (answers.shape === "circle") {
    shape = new Circle(answers.shapeColor, answers.text, answers.textColor);
  } else if (answers.shape === "square") {
    shape = new Square(answers.shapeColor, answers.text, answers.textColor);
  } else if (answers.shape === "triangle") {
    shape = new Triangle(answers.shapeColor, answers.text, answers.textColor);
  }

  const svg = shape.render();

  fs.writeFileSync("logo.svg", svg);
  console.log(
    "You did it, bruv! You did it! On behalf of myself and the rest of the community, congratulations! You are now the proud owner of a logo.svg file!"
  );
}

logo();
