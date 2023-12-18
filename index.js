// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

async function promptUser() {
    return inquirer.prompt([
// TODO: Create an array of questions for user input

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
    
]);
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     let dir = './output';
//     if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir);
//     }
//         fs.writeFile(`./output/${fileName}`, data, (err) =>
//     err ? console.log(err) : console.log('README.md generated!')
//     );
// }


function writeToReadme(content) {
    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md generated.');
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
    const userData = await promptUser();
    const readmeContent = generateMarkdown(userData);
    writeToReadme(readmeContent);
    } catch (error) {
        console.error('Error in processing app:', error);
    }
}

// Function call to initialize app
init();

// For a link to the video example incase it changes, here it is. 
//https://drive.google.com/file/d/1QTECM1C9-FK5JstzOhKvo18sAnTjESVA/view