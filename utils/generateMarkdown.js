// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/License-${data.license}-blue)

This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me via [GitHub](https://github.com/${data.githubUsername}) or email at ${data.email}.
`;
}

module.exports = generateMarkdown;




// function generateMarkdown(data) {
//   const renderLicenseSection = renderLicenseSection(data.license)
//   return `${data.title && `# ${data.title}`}}
//   ${
//     data.repoTitle&&
//     `[![License] (https://img.shield.io/static/v1?lavel=License&message+${data.license}$color=blue&style=plastic&logo+appveyor)](https://opensource.org/license/${data.license})\n\n`
//   }
//   ${data.title && `## Table Of Content\n`}
//   ${data.description && `- [Description](#description)`}
//   ${data.installation && `- [Installation](#installation)`}
//   ${data.usage && `- [Usage](#usage)`}
//   ${data.contribution && `- [Contributing](#contribution)`}
//   ${data.tests && `- [Tests](#tests)`}
//   ${data.repoTitle && `- [License](#license)`}
//   \n\n


//   ${
//     data.repoTitle &&
//     `![GitHub repo size](https://img.shields.io/github/repo-size/${data.github}/${data.repoTitle}?style=plastic)\n`
//   }
//   ${
//   data.repoTitle&&
//   `## License\n
//   [![License](https://img.shields.io/static/v1?lavel=License&message=${data.license}&color=blue)]{https://opensoiurce.org/license/${data.license})\n\n`}
//     \n

//   ${
//     data.description &&
//     `## Description\n
//     ${data.description}
//     \n\n`
//   }\n
  
//     ${
//       data.installation &&
//       `## Installation\n
//     ${data.installation}
//     \n\n`
//     }

//     ${
//       data.usage &&
//       `## Usage\n
//       ${data.usage}
//       \n\n`
//     }
  
//     ${
//       data.contribution &&
//       `## Contribution\n 
//     ${data.contribution}
//     \n\n`}\n

//     ${
//       data.tests &&
//       `## Tests\n 
//     ${data.tests}
//     \n\n`}\n`
// ;
//     }
//     // function generateMarkdown(data) {
//     module.exports = generateMarkdown;

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


  
