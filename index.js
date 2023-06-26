// Packages that neede for this app
const inquirer = require('inquirer')
const fs = require('fs');
const {Triangle, Circle, Square} = require("./Libraries/shapes")

function generateSVGData(data) {
    let shape;
    switch (data.shape) {
        case "Triangle":
          shape = new Triangle()
          shape.setColor (data.shapeColor)
            break;

            case "Circle":
                shape = new Circle()
                shape.setColor (data.shapeColor)
                  break;
    
        default:
                shape = new Square()
                shape.setColor (data.shapeColor)
            break;
    }
    return `<svg width="300" height="200">
    ${shape.render()}
    <text x="0" y="0" fill="${data.nameColor}">${data.name}</text>
  </svg>`;

}

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter up to 3 characters for the name of your logo please',
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

    fs.writeFile('./logi.svg', SVGData, (err) =>
      err ? console.log(err) : console.log('Successfully created logo')
    );
  });
