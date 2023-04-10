const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('svg');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

async function createLogo() {
  const questions = [
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like?',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color would you like the shape to be?'
    },
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like to include?'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color would you like the text to be?'
    }
  ];

  const answers = await inquirer.prompt(questions);
  const { shape, shapeColor, text, textColor } = answers;

  const ShapeClass = { Triangle, Circle, Square }[shape];
  const logoShape = new ShapeClass(shapeColor);

  const logoText = new SVG.Text(text).fill(textColor).move(0, 120);
  const logo = new SVG.Group(logoShape.element, logoText);

  const fileName = `${text}.svg`;
  fs.writeFileSync(fileName, logo.toSVG());
}

createLogo();
console.log('You did it, bruv! You did it! On behalf of myself and the rest of the community, congratulations! You are now the proud owner of a logo.svg file!');