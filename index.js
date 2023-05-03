const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes.js");
const SH = require("./lib/shapes.js");

// Things to do: define a class that has a constructor with 3 methods. render, set text element, set shape inside the svg string, new shape. then use the write to file to write the data, answers, generate svg file+logo
class Something {
  constructor() {}
}
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What color would you like the logo to be?",
      name: "Scolor"
    },
    {
      type: "list",
      message: "What shape would you like the logo to be?",
      name: "shape",
      choices: ["Square", "Triangle", "Circle"]
    },
    {
      type: "input",
      message: "What 3 letters would you like displayed in the logo?",
      name: "text"
    },
    {
      type: "input",
      message: "What color would you like the logo text to be?",
      name: "Tcolor"
    }
  ]);
};

const generateLogo = ({ answers.Scolor, answers.shape, answers.text, answers.Tcolor }) =>
  SH.Shapeshifter(shape);

const init = () => {
  promptUser()
    .then(answers => {
      console.log(answers);
      fs.writeFile("Logo.svg", generateLogo(answers), err => {
        if (err) {
          console.log(err);
        }
      });
    })
    .then(() => console.log("Successfully wrote to logo.svg"))
    .catch(err => console.error(err));
};

// const generateLogo = ({ Scolor, shape, letters, Tcolor }) => {
//   promptUser()
//     .then(answers =>
//       fs.writeFile("Logo.svg", generateLogo(answers), err => {
//         if (err) {
//           console.log(err);
//         }
//       })
//     )
//     .then(() => console.log("Successfully wrote to README.md"))
//     .catch(err => console.error(err));
// };

// Function call to initialize app
init();

// fs.writeFileSync("logo.svg", svg.svg());
