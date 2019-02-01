"use strict";

function getSecretFromHTML() {
  var word = document.getElementById("secret_word").innerHTML;
  return word;
}

function getCurrentFromHTML() {
  var word = document.getElementById("current_word").innerHTML;
  return word;
}



function buttonRunGuess() {
  console.log("entered buttonRunGuess()");
  var secretArray = getSecretFromHTML();
  var guess = prompt("guess a letter...");
  var curr = getCurrentFromHTML();
  if (check_guess(guess, secretArray, curr) {
    curr = check_guess(guess, secretArray, curr);
  }
  update_cur_paragraph(curr);
  return;
}
