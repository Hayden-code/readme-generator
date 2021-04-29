const inquirer = require("inquirer");
const fs = require("fs")
const { type } = require("os");

// Questions
inquirer
  .prompt([
    {
      type: "input",
      message: "Project title",
      name: "title",
    },
    {
      type: "input",
      message: "Description of project",
      name: "description",
    },
    {
      type: "input",
      message: "User Story",
      name: "userStory",
    },
    {
      type: "input",
      message: "List installation requirements, seperated by comma",
      name: "installation",
    },
    {
      type: "input",
      message: "Project use",
      name: "usage",
    },
    {
      type: "input",
      message: "Choose license...",
      name: "license",
    },
    {
      type: "input",
      message: "Contribution process",
      name: "contributing",
    },
    {
      type: "input",
      message: "Test instructions",
      name: "test",
    },
    {
      type: "input",
      message: "Enter Github acc.",
      name: "github",
    },
    {
        type: "input",
        message: "Enter email address.",
        name: "email",
      },
  ])
  .then((data) => {
    console.log("Generating readme " + "3.." + "2.." + "1..");
    generateReadme(data);
  })
  .catch((err) => {
    console.log(err);
});

function generateReadme(data) {
  readmeContent =  `
  <header align="center"> 
  <h1> 👓 ${data.title} 👓 </h1> 
  </header>

  ![license](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)
    

  # User-Story
    ${data.userStory}

  # Table of contents
  * [User-Story](#user-Story)
  * [Description](#Description)
  * [Screenshots](#Screenshots)
  * [Installations](#installations)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Testing-Procedure](#Testing-Procedure)
  * [Contact](#contact)
    

  # Description
    ${data.description}

  # Screenshots
  *ENTER SCREENSHOTS HERE*
  ![Screenshot of project](./Media/Screenshot.jpeg)

  # Installations
    ${data.installation}

  # Usage
    ${data.usage}

  # Contributing
    ${data.contributing}

  # Testing-Procedure
    ${data.test}

  # Contact
  If you would like to reach me in regards to either questions or comments, I am more than 
  happy to respond via github [${data.github}](https://github.com/${data.github}) or email [${data.email}](${data.email}).
    `;

  //Generating document
  fs.writeFile("./Readme-Folder/README.md", readmeContent, (err) => {
    if (err) {
      throw console.log("Couldn't generate readme file..." + err);
    }
    else {
      console.log("Readme generator successful! Check 'Readme-Folder' :)");
    }
  })
}

