const {runPrompts, answers} = require("./prompts")
// const circle = new Circle(answers.height, answers.width, answers.x, answers.y, answers["Background Color"], answers["Shape Color"]);
// const square = new Square(answers.height, answers.width, answers.x, answers.y, answers["Background Color"], answers["Shape Color"]);
// const triangle = new Triangle(answers.height, answers.width, answers.x, answers.y, answers["Background Color"], answers["Shape Color"]);

class Shape {
    constructor(height, width, x, y, bgColor, shapeColor) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.bgColor = bgColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return this.createShape();
        // return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" x="${this.x}" y="${this.y}" style="transform: translate(-100px, -150px);" fill=${answers["Shape Color"]}; stroke:${answers["Background Color"]}; stroke-width="5">
        // </svg>`;
    }
}

class Square extends Shape {
    constructor(height, width, x, y, bgColor, shapeColor) {
        super(height, width, x, y, bgColor, shapeColor);
    }

    createShape(answers) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" x="50%" y="50%">
        <rect width="200" height="300" x="50%" y="50%" style="transform: translate(-100px, -150px);" fill:${answers["Shape Color"]}; stroke:${answers["Background Color"]}; stroke-width:5;">
        </rect>`;
    }

    // render() {
    //     return this.createShape();
    // }
}

class Circle extends Shape {
    constructor(height, width, x, y, bgColor, shapeColor) {
        super(height, width, x, y, bgColor, shapeColor);
        this.r = Math.min(height, width) / 2;
    }
    createShape(answers) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" x="50%" y="50%" r=">
      <circle cx="${this.width/2}" cy="${this.height/2}" r="${this.r}" style=fill:${answers["Shape Color"]}; stroke:${answers["Background Color"]}; stroke-width:5;">
    </circle>`; 
    }

    // render(answers) {
    //     return this.createShape(answers);
    // }
}

class Triangle extends Shape {
    constructor(height, width, x, y, bgColor, shapeColor) {
        super(height, width, x, y, bgColor, shapeColor);
    }

    createShape(answers) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" x="50%" y="50%">
      <polygon points="${this.width/2},${this.height/2-this.height/4} ${this.width/2-this.width/4},${this.height/2+this.height/4} ${this.width/2+this.width/4},${this.height/2+this.height/4}" style=fill:${answers["Shape Color"]}; stroke:${answers["Background Color"]}; stroke-width:5;">
    </svg>`;
    }

    // render(answers) {
    //     return this.createShape(answers);
    // }
}

module.exports = {
    Circle,
    Triangle,
    Square
}
