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
  var secretArray = [];
  var guess = prompt("guess a letter...");
  var curr = [];
  curr = getCurrentFromHTML().split("");
  secretArray = getSecretFromHTML().split("");
  console.log("secretArray is " + secretArray);
  if (check_guess(guess, secretArray, curr)) {
    curr = check_guess(guess, secretArray, curr);
  }
  update_cur_paragraph(curr);
  return;
}

function check_guess(guess, secret_array, curr) {
  console.log(secret_array);
  var current_array = curr;
  console.log(current_array);
  var flag = false;
  for (var i=0; i<secret_array.length; i++) {
    console.log("checking if this letter was correct: " + secret_array[i]);
    if (guess == secret_array[i]) {
      current_array[i] = guess;
      flag = true;
      alert("your guess, " + current_array[i] + ", was true.");
    }   
  }
  console.log(current_array);
  // return (flag) ? false : current_array;
  // if we didn't find a correct, return false.
  if (!flag) return false; else update_curr_paragraph(turnArrayIntoString(current_array));;
}

function turnArrayIntoString(givenArray) {
  var given = [];
  var str = "";
  given = givenArray;
  for (var i=0; i<given.length;i++) {
    str = str + given[i];
  }
  return str;
}
