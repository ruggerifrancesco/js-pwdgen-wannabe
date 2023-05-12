console.log ("JS Loaded!");

const userName = prompt('Scrivi il tuo nome:');
const userSurname = prompt('Scrivi il tuo cognome:');
const userColor = prompt('Scrivi il tuo colore preferito:');

// Ciclo di casting e aggiunta numero
let userLuckyNumber = parseInt(
    prompt('Scrivi il tuo numero fortunato (Al numero inserito ci sarà un aggiunta di 10)'));

const userNumber = userLuckyNumber + 10;

// Result Variable of the prompts
const userInputResults = userName + userSurname + userColor + userNumber;

// Console Output Just to make sure 
// everything is working correctly
console.log("Result of prompts:" + userInputResults);

const pagePrompt = document.getElementById("result-prompts").innerHTML = userInputResults;
