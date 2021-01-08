// TODO: Include packages needed for this application
//fs and inquirer 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your project title:",
        name: "projectTitle"
    },
    {   type: "input",
        message: "Please enter a description of your project:",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "Please enter instructions for installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter usage information",
        name: "usage"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() => {
    promptUser();
}

// Function call to initialize app
init();
