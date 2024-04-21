#! /usr/bin/env node 
import inquirer from "inquirer";
// 1) computer will generate a rendom number-Done 
// 2) User input for guessing  number
// 3) compare user input with compter generated number and show result
const randomNumber = Math.floor(Math.random() * 6 +1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
},
]);
if(answers.userGuessedNumber===randomNumber){
    console.log("Congratulaion! you have guessed right number.")
}else{
    console.log("you guessed werong number")
}
