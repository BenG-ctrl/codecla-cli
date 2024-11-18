import fs from "fs";
import inquirer from "inquirer";

inquirer
  .prompt()([
    "Generate boilerplate code for the function solution in the specified programming language?",
  ])
  .then((answers) => {
    "Generated boilerplate";
    return function Javascript() {};
  })
  .catch((error) => {
    if (error.isTtyError) {
      ("Prompt couldn't be rendered in the current environment");
    } else {
      ("Something else went wrong");
    }
  });
