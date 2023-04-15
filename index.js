const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What color would you like the logo to be?",
      name: "color"
    },
    {
      type: "input",
      message: "What shape would you like the logo to be?",
      name: "shape"
    },
    {
      type: "input",
      message: "What 3 letters would you like displayed in the logo?",
      name: "letters"
    }
  ]);
};
const generateLOGO = ({ color, shape, letters }) =>
  `## Title
  
    This project is titled ${Title}
  
    ${GM.renderLicenseBadge(License)}
    
    ## Description
  
    ${Description}
  
    ## Table of Contents
  
    [Go to Installation section](#installation)
  
    [Go to Usage section](#usage)
  
    [Go to Credits section](#credits)
  
    [Go to License section](#license)
  
    [Go to Tests section](#tests)
  
    [Go to Questions section](#questions)
    
  ## Installation
  
  ${Installation}
  
  ## Usage
  
  ${Usage}
  
  ## Credits
  
  ${Contributing}
  
  ## License
  
  ${License}
  
  ${GM.renderLicenseLink(License)}
  
  
  ## Tests 
  
  ${Tests}
  
  ## Questions
  
  You can reach me at ${Email} with any additional questions.
  
  My Github profile is named ${Github}, reachable at https://www.github.com/${Github}`;

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then(answers =>
      fs.writeFile("README.md", generateREADME(answers), err => {
        if (err) {
          console.log(err);
        }
      })
    )
    .then(() => console.log("Successfully wrote to README.md"))
    .catch(err => console.error(err));
};

// Function call to initialize app
init();
