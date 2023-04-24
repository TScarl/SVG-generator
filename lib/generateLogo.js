// const fs = require('fs');

async function generateLogo(answers) {

let shape;
if (answers["Shape"] === "Circle") {
    const circle = new Circle().createShape(answers);
    shape = circle.render();
} else if (answers["Shape"] === "Square") {
    const square = new Square().createShape(answers);
    shape = square.render();
} else if (answers["Shape"] === "Triangle") {
    const triangle = new Triangle().createShape(answers);
    shape = triangle.render();
} else {
    return "invalid shape";
}
return shape;
}

module.exports = {
    generateLogo
}