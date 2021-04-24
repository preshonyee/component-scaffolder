#!/usr/bin/env node
require("colors");
const inquirer = require("inquirer");
const fs = require("fs");
const templates = require("./templates");

inquirer
  .prompt([
    {
      type: "list",
      message: "Select the language your component is written in:",
      name: "language",
      choices: ["javascript", "typescript"],
    },
    {
      type: "input",
      message: "What is the name of your component?",
      name: "compName",
    },
  ])
  .then((answers) => {
    if (answers.language === "typescript") {
      const componentName = answers.compName;

      if (!componentName || componentName === "") {
        console.error("Please supply a valid component name".red);
        process.exit(1);
      }

      console.log(
        "Creating Component Templates with name: ".blue + componentName.magenta
      );

      const componentDirectory = `${process.cwd()}/src/${componentName}`;

      if (fs.existsSync(componentDirectory)) {
        console.error(`Component ${componentName} already exists.`.red);
        process.exit(1);
      }

      fs.mkdirSync(componentDirectory);

      const generatedTemplates = templates.map((template) =>
        template(componentName)
      );

      generatedTemplates.forEach((template) => {
        fs.writeFileSync(
          `${componentDirectory}/${componentName}${template.extension}`,
          template.content
        );
      });

      console.log(
        "Successfully created component under: ".yellow +
          componentDirectory.magenta
      );
    }
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log(error);
    }
  });
