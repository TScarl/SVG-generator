const fs = require('fs');
const runPrompts = require("./prompts.js");
const { Circle, Triangle, Square} = require("./shapes.js");

async function generateLogo() {
    try {
        const answers = await runPrompts();

        let shape;
        if (answers["Shape"] === "Circle") {
            const circle = new Circle(answers["Background Color"], answers["Shape Color"]);
            shape = circle.createShape();
        } else if (answers["Shape"] === "Square") {
            const square = new Square(answers["Background Color"], answers["Shape Color"]);
            shape = square.createShape();
        } else if (answers["Shape"] === "Triangle") {
            const triangle = new Triangle(answers["Background Color"], answers["Shape Color"]);
            shape = triangle.createShape();
        } else {
            return "invalid shape";
        }

        return shape;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


(async function () {
    try {
        const logoSvg = await generateLogo();
            await fs.promises.writeFile("logo.svg", logoSvg);
            console.log("Generated logo.svg");
        } catch (err) {
            console.error(err);
        }
  }) (); //the paratensis at the end here is a IIFE, it calls the function without it having to be called outside of the function. function also doesn't need a name now.

// module.exports = {
//     generateLogo
// }