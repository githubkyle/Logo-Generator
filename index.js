const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = [
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

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then(answers =>
      fs.writeFile("logo.svg", generateREADME(answers), err => {
        if (err) {
          console.log(err);
        }
      })
    )
    .then(() => console.log("Successfully wrote to logo.svg"))
    .catch(err => console.error(err));
};

// Function call to initialize app
init();
