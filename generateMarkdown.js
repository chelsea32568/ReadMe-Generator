// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description 
  ${data.description}

  # Table of Contents
    #Installation
    # Usage
    # License
    # Contributing
    # Tests
    # Questions
    
  # Installation
  "To install necessary dependancies, run the following command: "
  ${data.install}

  # Usage
  ${data.know}

  # License
  ${data.license}

  # Contributing
  ${data.contribute}

  # Tests
  "To run tests, run the following command: "
  ${data.test}

  # Questions
  "If you have any questions about the repo, open an issue or contact me directly at "${data.email}
  "You can find more of my work at "${data.username}
`;
}

module.exports = generateMarkdown;
