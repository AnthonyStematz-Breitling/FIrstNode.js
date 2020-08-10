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
        message: "Description:",
        name:"description"
    },
    {
        type:"input",
        message: "Installation Instructions:",
        name: "Installation"
    },
    {
        type:"input",
        message: "Usage Information:",
        name: "Usage"
    },
    {
        type:"input",
        message: "Contribution Guidelines:",
        name: "Contributing"
    },
    {
        type:"input",
        message: "Test Instructions:",
        name: "Testing"
    },
    ])