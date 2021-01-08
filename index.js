// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?:",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a short description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter installation instructions for your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter instructions for using your project:",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter the names of any contributors to your project:",
    name: "contributing",
    default:
      "Please see the Questions section below to contact the author to be added as a contributor.",
  },
  {
    type: "input",
    message: "Please enter instructions on how to run tests on your project:",
    name: "test",
  },
  {
    type: "list",
    message: "Please select a license for your project",
    name: "license",
    choices: [
      "MIT License",
      "GNU GPL 3.0",
      "Apache License 2.0",
    ],
  },
  {
    type: "input",
    message: "What is your Github username:",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?:",
    name: "email",
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log("Successfully created README!");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("generatedREADME.md", response);
  });
}

// Function call to initialize app
init();
