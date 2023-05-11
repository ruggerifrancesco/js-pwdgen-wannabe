console.log ("JS Loaded!");

let userName;
let userSurname;
let userColor;

const pagePrompt = prompt(userName);
document.getElementById("test").innerHTML = pagePrompt;

const pageTwoPrompt = prompt(userSurname);
document.getElementById("test-two").innerHTML = pageTwoPrompt;