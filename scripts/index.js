"use strict";

window.onload = init;    
// The init function connect the button to the code that
// should run when the button is clicked
function init() {
   // Find the greetUserBtn
   //const name = document.getElementById("nameField")
   const greetUserBtn = document.getElementById("greetUserBtn");
   greetUserBtn.onclick = onGreetUserBtnClicked;
   
}

// This function is called when helloBtn is clicked
function onGreetUserBtnClicked() {
   // Find the messageDiv
   let nameField = document.getElementById("nameField");
   let name = nameField.value;
   let message = `Hello ${name}!`;
   let messageDiv = document.getElementById("messageDiv");
   


   // Set the contents of the div
   messageDiv.innerHTML = message;
}
