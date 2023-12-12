// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title?\n',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Repo Title?\n',
        name: 'repoTitle',
    },
    {
        type: 'input',
        message: 'What is your project about?\n',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the deployed URL?\n',
        name: 'deployedWebsite',
    },
    {
        type: 'input',
        message: 'Instructions for install?\n',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Upload a screenshot?\n',
        name: 'screenshot',
    },
    {
        type: 'list',
        message: 'Please select a license.\n',
        name: 'license',
        choices: ['None', 'MIT', 'GNU', 'ISC', 'Apache']
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let dir = './output';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
        fs.writeFile(`./output/${fileName}`, data, (err) =>
    err ? console.log(err) : console.log('README.md generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log(`This is README Generator, Answer questions to proceed.`);
    inquirer
    .createPromptModule(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
            writeToFile(`README.md`, markdown);
    });
}

// Function call to initialize app
init();
