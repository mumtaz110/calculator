//  #! /usr/bin/env node

import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {message: "enter first number", type: "number", name: "firstNumber"},
    {message: "enter second number", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication",
    "Division",],
    }])
    
    if(answers.operator === "Addition"){
        console.log(answers.firstNumber + answers.secondNumber)
    }

    if(answers.operator === "Subtraction"){
        console.log(answers.firstNumber - answers.secondNumber)
    }

    if(answers.operator === "Multiplication"){
        console.log(answers.firstNumber * answers.secondNumber)
    }

    if(answers.operator === "Division"){
        console.log(answers.firstNumber / answers.secondNumber)
    }
    else{
    console.log("invalid input")
}