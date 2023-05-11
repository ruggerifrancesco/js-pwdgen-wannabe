console.log ("JS Loaded!");

let userName = prompt('Scrivi il tuo nome:');
let userSurname = prompt('Scrivi il tuo cognome:');
let userColor = prompt('Scrivi il tuo colore preferito:');

// Console Output Just to make sure 
// everything is working correctly
console.log("Result of prompts:" + userName+userSurname+userColor);

// Result Variable of the prompts
const userInputResults = userName + userSurname + userColor;

const pagePrompt = document.getElementById("test").innerHTML = userName;

// const pageTwoPrompt = prompt(userSurname);
// document.getElementById("test-two").innerHTML = pageTwoPrompt;