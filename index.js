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
const generateLogo = ({ Scolor, shape, text, Tcolor }) => {
  const triangle = new Triangle();
  const circle = new Circle();
  const square = new Square();
  switch (shape) {
    case "Triangle":
      return triangle.render(Scolor, Tcolor, text);
      break;
    case "Circle":
      return circle.render(Scolor, Tcolor, text);
      break;
    case "Square":
      return square.render(Scolor, Tcolor, text);
      break;
    default:
      console.log("Please choose again");
  }
};

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

init();
