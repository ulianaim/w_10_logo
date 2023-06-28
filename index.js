// Packages that neede for this app
const inquirer = require('inquirer')
const fs = require('fs');
const { Triangle, Circle, Square } = require("./Libraries/shapes")

function generateSVGData(data) {
  let x;
  let y;
  let shape;
  switch (data.shape) {
    case "Triangle":
      shape = new Triangle();
      shape.setColor(data.shapeColor);
      x = 115; 
      y = 140;
      break;

    case "Circle":
      shape = new Circle();
      shape.setColor(data.shapeColor);
      x = 90;
      y = 115;
      break;

    default:
      shape = new Square();
      shape.setColor(data.shapeColor);
      x = 90;
      y = 115;
      break;
  }

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="${x}" y="${y}" font-size="40" fill="${data.nameColor}">${data.name}</text>
  </svg>`;

}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter up to 3 characters for the name of your logo please',
      validate: (input) => input.length < 4,
    },
    {
      type: 'input',
      name: 'nameColor',
      message: 'What color your name should be? Please use color keyword (OR a hexadecimal number)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape you logo is going to be?',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color your logos shape be? Please use color keyword (OR a hexadecimal number)',
    }
  ])
  .then((answers) => {
    const SVGData = generateSVGData(answers);

    //     let x = 150, y = 125;
    // if (shape === 'Triangle') {
    //   x = 115, y = 140;
    // } else if (shape === 'Square') {
    //   x = 90, y = 115;
    // } 

    fs.writeFile('./logi.svg', SVGData, (err) =>
      err ? console.log(err) : console.log('Successfully created logo')
    );
  });
