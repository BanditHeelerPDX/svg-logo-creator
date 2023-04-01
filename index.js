const fs = require('fs');
const inquirer = require("inquirer");
const { DOMImplementation, XMLSerializer } = require("svgdom");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

// Create an SVG document with the given dimensions and background color
function createSvgDocument(width, height, bgColor) {
  const document = new DOMImplementation().createDocument();
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("fill", bgColor);
  document.appendChild(svg);
  return svg;
}

// Save the SVG document to a file with the given name
function saveSvgToFile(svg, filename) {
  const svgString = new XMLSerializer().serializeToString(svg);
  fs.writeFile('logo.svg')  // might not want to use writeFile... overwrite issues?
}

async function generateLogo() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["triangle", "circle", "square"],
    },
    {
      type: "input",
      name: "color",
      message: "Choose a color:",
      default: "#000000",
    },
    {
      type: "input",
      name: "text",
      message: "Enter text:",
    },
  ]);

  let shape;
  switch (answers.shape) {
    case "triangle":
      shape = new Triangle(answers.color);
      break;
    case "circle":
      shape = new Circle(answers.color);
      break;
    case "square":
      shape = new Square(answers.color);
      break;
    default:
      throw new Error("Invalid shape selected");
  }
  const svg = createSvgDocument(500, 500, "#ffffff");
  const shapeSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  shapeSvg.setAttribute("fill", shape.color);
  shapeSvg.setAttribute("d", shape.draw());
  svg.appendChild(shapeSvg);

  const textSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textSvg.setAttribute("x", "50%");
  textSvg.setAttribute("y", "50%");
  textSvg.setAttribute("dominant-baseline", "middle");
  textSvg.setAttribute("text-anchor", "middle");
  textSvg.setAttribute("font-size", "72");
  textSvg.textContent = answers.text;
  svg.appendChild(textSvg);

  saveSvgToFile(svg, "logo.svg");
}

generateLogo();
