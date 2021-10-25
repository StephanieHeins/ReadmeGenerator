function generateReadme(data) {
  return `
${data.title}

[![License](https://img.shields.io/badge/${data.license}-blue.svg)]

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)

## Installation Instructions

${data.installation}

## Usage

${data.usage}

## Licence

${data.license}

## Contribution

${data.contribution}

## Test

${data.tests}

## Questions/Contact

https://github.com/${data.username}
${data.email}

`;
}



/*

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


/*
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
*/


module.exports = generateReadme;
