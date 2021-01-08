// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
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
        message: "Please enter installation instructions for you project:",
        name: "installation",
    },
    {
        type: "input",
        message: "Please enter how to use your project",
        name: "usage",
    },
    {
        type: "input",
        message: "Please enter your project title:",
        name: "contributing",
    },
    {
        type: "input",
        message: "Please enter your project title:",
        name: "test",
    },
    {
        type: "list",
        message: "Please enter your project title:",
        name: "license",
    }
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err)=>{
        err ? console.error(err) : console.log("Success!")
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log("the function has run");
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile("generatedREADME.md", response);
    });
}

// Function call to initialize app
init();
