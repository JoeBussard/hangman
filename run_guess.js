"use strict";

function getSecretFromHTML() {
  var word = document.getElementById("secret_word").innerHTML;
  return word;
}

function getCurrentFromHTML() {
  var word = document.getElementById("current_word").innerHTML;
  return word;
}

function getLosersFromHTML() {
  var losers = document.getElementById("failure_box").innerHTML;
  return losers;
}

function getLivesFromHTML() {
  var lives = 0
  lives = document.getElementById("lives").innerHTML;
  return lives;
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
  else {
    ///////////////////write this function.
    console.log("check_guess returned false.");
    doWrongLetterGuessed(guess);
  }
  update_cur_paragraph(curr);
  if (getSecretFromHTML() == getCurrentFromHTML()) {
    alert("You've won the game. Your hangman is cut free.");
    alert("He dies of dysentary 2 months later.");
  }
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

function doWrongLetterGuessed(guess) {
  console.log("entered doWrongLetterGuessed(guess)");
  var lives = getLivesFromHTML();
  var losers = getLosersFromHTML();
  lives--;
  losers = losers + guess;
  console.log("lives="+lives+" and losers="+losers);
  update_losers(losers);
  update_lives(lives);
}



