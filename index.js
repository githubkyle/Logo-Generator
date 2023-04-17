const inquirer = require("inquirer");
const fs = require("fs");
const SuperSVG = require("@svgdotjs/svg.js");
const exp = require("express");
const app = express();
const svg = SVG();
const prompts = [
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
    name: "letters"
  },
  {
    type: "input",
    message: "What color would you like the logo text to be?",
    name: "Tcolor"
  }
];

// const generateSHAPE = ({
//   Scolor,
//   shape,
//   letters,
//   Tcolor
// }) =>

fs.writeFileSync("logo.svg", svg.svg());
