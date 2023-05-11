console.log ("JS Loaded!");

let userName = prompt('Scrivi il tuo nome:');
let userSurname = prompt('Scrivi il tuo cognome:');
let userColor = prompt('Scrivi il tuo colore preferito:');

let userNumber = parseInt(
    prompt('Scrivi il tuo numero fortunato (Al numero inserito ci sarà un aggiunta di 10)'));

// Result Variable of the prompts
const userInputResults = userName + userSurname + userColor + userNumber;

// Console Output Just to make sure 
// everything is working correctly
console.log("Result of prompts:" + userInputResults);

const pagePrompt = document.getElementById("result-prompts").innerHTML = userInputResults;

// const pageTwoPrompt = prompt(userSurname);
// document.getElementById("test-two").innerHTML = pageTwoPrompt;