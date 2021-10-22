// Packages and const
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateReadme = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

// User questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project (what, why, how?):"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are some instructions for usage?"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for this project:",
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "GPLv3",
            "None"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines surrounding this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How would a user perform tests for this project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
  ]

// TODO: Create a function to write README file
//function writeToFile(data) {
inquirer
    .prompt(questions)
    .then(function(data){
        const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
