const shapes = require("./lib/shapes.js");
const generateLogo = require("./lib/generateLogo.js");
const runPrompts = require("./lib/prompts.js").runPrompts()
const fs = require("fs");



(async function () {
    const answers = await runPrompts();
    console.log('Answers:', answers);
    try {
    const logoSvg = generateLogo(answers);
      await fs.promises.writeFile("logo.svg", logoSvg);
      console.log("Generated logo.svg");
    } catch (err) {
      console.error(err);
    }
  });

