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

module.exports = generateReadme;
