const inquirer = require('inquirer');
const { type } = require('os');

inquirer
    .prompt([
        {
            type: "input",
            message: "Project title",
            name: "title"
        },
        {
            type: "input",
            message: "Description of project",
            name: "description"
        },
        {
            type: "input",
            message: "User Story",
            name: "userStory"
        },
        {
            type: "input",
            message: "List installation requirements, seperated by comma",
            name: "installation"
        },
        {
            type: "input",
            message: "Project use",
            name: "usage"
        },
        {
            type: "input",
            message: "License?",
            name: "license"
        },
        {
            type: "input",
            message: "Contribution process",
            name: "contributing"
        },
        {
            type: "input",
            message: "Test instructions",
            name: "test"
        },
        {
            type: "input",
            message: "Github and email address, seperated by comma",
            name: "contact"
        }
    ])
    .then((data) => {
        console.log("Generating readme");
        generateReadme(data);
    })
    .catch((err)=> {
        console.log(err);
    })
