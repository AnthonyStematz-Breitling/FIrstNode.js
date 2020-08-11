const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile)

inquirer
    .prompt([
    {
        type:"input",
        message: "What is the Project Title?",
        name:"name"
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
    ])