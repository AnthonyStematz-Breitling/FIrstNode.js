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
        message: "What is your github username?",
        name:"github"
    },
    {
        type:"input",
        message: "What is you email?",
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
        choices:[
            {message: "MIT", name:"MIT"},
            {message: "GPlv3", name:"GPlv3"},
            {message: "AGPL", name:"AGPL"}
        ],
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
        let badge = "" 
        console.log(JSON.stringify(license))
        if(license == "MIT"){
            badge = "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"
            console.log(badge)
        }
        else if(license == "GPlv3"){
            badge = "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
            console.log(badge)
        }
        else if(license == "AGPL"){
            badge = "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"
            console.log(badge)
        }
        console.log(badge)
      
        writeFileAsync("README.md",
        `# ${title}          ${badge}       

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
        * [${github}](github.com/${github})
        * ${email}
        
        If you have any additional question feel free to message or email me.
        `)
    })