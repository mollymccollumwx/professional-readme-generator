// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your project title:",
        name: "title",
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
