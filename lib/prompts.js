const inquirer = require('inquirer');
const fs = require("fs");
// const {generateLogo, createSVGFile} = require("./generateLogo.js")

// check if input is a valid hexadecimal color code or color keyword
const colorSelector = (input) => {
if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input) || ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'pink'].includes(input.toLowerCase())) {
  return true;
} else {
  console.error('\nPlease enter a valid color keyword or hexadecimal color code.');
  return false;
}
}

async function generateLogo() {
  const answers = await runPrompts();

let shape;
if ("Shape" === "Circle") {
  const circle = new Circle().createShape();
  shape = circle.render();
} else if ("Shape" === "Square") {
  const square = new Square().createShape();
  shape = square.render();
} else if ("Shape" === "Triangle") {
  const triangle = new Triangle().createShape();
  shape = triangle.render();
} else {
  return "invalid shape";
}
return shape;
}

async function runPrompts() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'Logo',
      message: "Please insert 3 letters for the logo",
      validate: function (input) {
        if (input.length !== 3) {
          console.error('\nError: Input for logo must be 3 characters.');
          return false;
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'Background Color',
      message: 'What do you want the background color to be?',
      validate: function(input){
        return colorSelector(input);
      },
    },
    {
      type: 'list',
      name: 'Shape',
      message: 'Which shape would you like your logo to be?',
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: 'input',
      name: 'Shape Color',
      message: 'What color do you want the shape to be?',
      validate: function(input){
        return colorSelector(input);
      },
    },
  ])
  return inquirer.prompt(runPrompts);
}


module.exports = {
  runPrompts,
  colorSelector
}