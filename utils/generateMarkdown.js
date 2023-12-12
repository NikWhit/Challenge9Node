// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(answers) {
  return `${answers.title && `# ${answers.title}`}}
  ${
    answers.repoTitle&&
    `[![License] (https://img.shield.io/static/v1?lavel=License&message+${answers.license}$color=blue&style=plastic&logo+appveyor)](https://opensource.org/license/${answers.license})\n\n`
  }
  ${answers.title && `## Table Of Content\n`}
  ${answers.description && `- [Description](#description)`}
  ${answers.deployedWebsite && `- [Deployed website link](#deployedWebsite)`}
  ${answers.installation && `- [Installation](#installation)`}
  ${answers.usage && `- [Usage](#usage)`}
  ${answers.contribution && `- [Contributing](#contribution)`}
  ${answers.tests && `- [Tests](#tests)`}
  ${answers.github && `- [GitHub](#github)`}
  ${answers.email && `- [Contact](#contact)`}
  ${answers.repoTitle && `- [License](#license)`}
  \n\n

  ${
    answers.librariesAndTools &&
    `${answers.title} libraries: <ul>${answers.librariesAndTools}</ul>
  \n\n`
  }
  \n

  ${
    answers.description &&
    `## Description\n
    ${answers.description}
    \n\n`
  }\n
  
  ${
    answers.deployedWebsite &&
      `<p></p><a href="${answers.deployedWebsite}">${answers.deployedWebsite}</a></p>\n\n`
  }
  \n
  

  ${
    answers.repoTitle &&
    `![GitHub repo size](https://img.shields.io/github/repo-size/${answers.github}/${answers.repoTitle}?style=plastic)\n`
  }
  ${
  answers.repoTitle&&
  `## License\n
  [![License](https://img.shields.io/static/v1?lavel=License&message=${answers.license}&color=blue)]{https://opensoiurce.org/license/${answers.license})\n\n`}
    \n
    ${
      answers.installation &&
      `## Installation\n
    ${answers.installation}
    \n\n`
    }
    ${
      answers.tests &&
      `## Tests\n 
    ${answers.tests}
    \n\n`
    }
    \n
    ${
      answers.contribution &&
      `## Contribution\n 
    ${answers.contribution}
    \n`}`;
    }
    // function generateMarkdown(answers) {
    module.exports = generateMarkdown;

// function renderLicenseBadge(license) {

//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {

// #Description



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


  // 
