const {colorSelector, prompts} = require("./prompts.js")
const {Circle, Triangle, Square, Shapes} = require("./shapes.js")
const generateLogo = require("./generateLogo.js")


describe("prompts", () => {
    it("prompts the user for answers", () => {
        const shape = "triangle"
        expect(shape);
    })
    it("prompts the user to select 3 letter for the logo", () => {
        const logo = "get";
        expect(logo);
    })
})

describe('colorSelector returns true for valid color inputs', () => {
    it("allows user to put in a color keyword (OR a hexadecimal number)", () => {
        expect(colorSelector('red')).toBe(true);
        expect(colorSelector('#00ff00')).toBe(true);
    })
});

describe("generateLogo", () => {
    it("will create a shape for the logo", () => {
        const shape = new Triangle();
        shape.colorSelector("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});