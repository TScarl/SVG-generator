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
    }
}

class Square extends Shape {
    constructor(bgColor, shapeColor) {
        const width = 300;
        const height = 200;
        const x = 50 - width / 2;
        const y = 50 - height / 2;
        super(height, width, x, y, bgColor, shapeColor);
    }

    createShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" x="${this.x}" y="${this.y}">
          <rect width="${this.width}" height="${this.height}" style="transform: translate(-${this.width / 2}px, -${this.height / 2}px);" fill="${this.shapeColor}" stroke="${this.bgColor}" stroke-width="5"/>
        </svg>`;
      }
}

class Circle extends Shape {
    constructor(bgColor, shapeColor) {
        const r = 100;
        const x = 50 - r;
        const y = 50 - r;
        super(2*r, 2*r, x, y, bgColor, shapeColor);
        this.r = r;
    }

    createShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" x="50%" y="50%" r=">
      <circle cx="${this.width/2}" cy="${this.height/2}" r="${this.r}" style=fill:${this.shapeColor}; stroke:${this.bgColor}; stroke-width:5;"></circle>
      </svg>`; 
    }
}

class Triangle extends Shape {
    constructor(bgColor, shapeColor) {
        const width = 300;
        const height = 200;
        const x = 50 - width / 2;
        const y = 50 - height / 2;
        super(height, width, x, y, bgColor, shapeColor);
    }

    createShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" x="50%" y="50%">
      <polygon points="${this.width/2},${this.height/2-this.height/4} ${this.width/2-this.width/4},${this.height/2+this.height/4} ${this.width/2+this.width/4},${this.height/2+this.height/4}" style=fill:${this.shapeColor}; stroke:${this.bgColor}; stroke-width:5;">
    </svg>`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
}
