const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const { title } = require("process")

const writeFileAsync = util.promisify(fs.writeFile)
//TODO ADD GITHUB LINK THROUGH USERNAME
inquirer
    .prompt([
    {
        type:"input",
        message: "What is the Project Title?",
        name:"title"
    },
    {
        type:"input",
        message: "Github Username:",
        name:"github"
    },
    {
        type:"input",
        message: "Email:",
        name:"email"
    },
    {
        type:"input",
        message: "Description:",
        name:"description"
    },
    {
        type:"input",
        message: "Installation Instructions:",
        name: "installation"
    },
    {
        type:"input",
        message: "Usage Information:",
        name: "usage"
    },
    {
        type:"checkbox",
        message: "License:",
        choices:["MIT", "GPlv3", "AGPL"],
        name: "license"
    },
    {
        type:"input",
        message: "Contribution Guidelines:",
        name: "contributing"
    },
    {
        type:"input",
        message: "Test Instructions:",
        name: "testing"
    },
    ]).then( response =>{
    
        let {title, description, installation, usage, license, contributing, testing, github, email} = response
        //TODO BADGE
        let badge 
        switch(response.license){
            case "MIT":
            badge = "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"
            console.log(badge)
        break;
        case ["GPlv3"]:
            badge = "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
        break;
        case ["AGPL"]:
            badge = "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"
        break;
        }
        //TODO ADDITIONAL INSTRUCTIONS ON HOW TO CONTACT IN QUESTIONS
        writeFileAsync("README.md",
        `# ${title}                 

        ## Description
        ${description}

        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license) 
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)
        
        
        ## Installation
        ${installation}
        
        
        ## Usage
        ${usage}
        
        ## License 
        ${license}
        
        ## Contributing
        ${contributing}
        
        
        ## Tests
        ${testing}
        
        ## Questions?
        * ${github}
        * ${email}
        `)
    })