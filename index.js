const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./starter/utils/generateMarkdownMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is you GitHub username?",
    name: "username",
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },

  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
  },

  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },

  {
    type: "list",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    name: "license",
  },

  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
  },

  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
  },

  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "know",
  },

  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "test",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
