const inquirer = require('inquirer');
const fs = require("fs");

// checks if input is a valid hexadecimal color code or color keyword
const colorSelector = (input) => {
  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input) || ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'pink'].includes(input.toLowerCase())) {
    return true;
  } else {
    console.error('\nPlease enter a valid color keyword or hexadecimal color code.');
    return false;
  }
};

const runPrompts = () => {
  return inquirer.prompt([
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
        validate: function (input) {
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
        validate: function (input) {
          return colorSelector(input);
        },
      },
    ])
}


module.exports = runPrompts;