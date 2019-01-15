"use strict";

/*

1. Need to separate Guess Button from Start Button, so that HTML can update after each guess.  Each new guess needs the button pressed again.
2. Need to update the way current_array is stored because the guessing "progress" is being erased each iteration.
3. Need to add the "failure box" of rejected letters.




*/



function secret_word(){
  return prompt("What is the secret word?", "enter word here.");
}

function play_game() {
  //declare variables
  var secret = "";
  var guess = "";
  var secret_array = [];
  var current_array = [];
  var test_array = [];
  var lives = 6; //edit this to make it more difficult
                 // arm + arm + leg + leg + body + head = 6
  //set up our word
  var wrong_array = [];
  do {
    secret = secret_word();
  } while (!secret);
  console.log(secret);
  secret_array = secret.split("");  
  current_array = fill_current_with_blanks(secret_array);
  console.log(secret_array);

//replace the contents of this loop with a function
while ((lives > 0) && (!is_equal(secret_array, current_array))) {
  update_lives(lives);
  update_user(current_array);
  update_wrong(wrong_array);
  //get the first guess.. make this a function?
  do {
    guess = current_letter();
    console.log(guess);
    if (guess) console.log(guess.length);
  } while ((guess) && (guess.length > 1));
  console.log(secret_array);
  console.log(check_guess(guess, secret_array, current_array));


  if (check_guess(guess, secret_array, current_array)) {
    console.log(check_guess(guess, secret_array, current_array));
    console.log('check_guess(guess, secret_array) was true');
    current_array = check_guess(guess, secret_array, current_array).slice();
  } else {
    lives--;
    wrong_array.push(guess);
    console.log('that was an incorrect guess');
  }
  console.log('aa');
  test_array = secret_array.slice();
  console.log(test_array);
  console.log(is_equal(test_array, secret_array));
  console.log('reached end of play_game()');
  //alert("you've won the game! Your hangman is cut free.");
  //alert("He dies of dysentery fording a river 2 months later.");
  update_current(current_array);
  }
  if (lives == 0) alert("You've lost the game.  Your hangman is hanged.");
  else {
    alert("You've won the game! Your hangman is cut free.");
    alert("He dies of dysentery fording a river 2 months later.");
  }
  document.getElementById('start_button').innerHTML = "Click here to play again.";
}

//alert() the user the wrong guesses.
function update_wrong(wrong) {
  if (!wrong.length) return;
  else {
    var value = "The wrong guesses so far are: ";
    for (var i = 0; i < wrong.length - 1; i++ ) {
      value += wrong[i] + ", ";
    }
    value += wrong[wrong.length - 1] + "."
    alert(value);
  }
}
	
//function is called at each guess

//alert() the user how many body parts are left.
function update_lives(lives) {
  alert("Your hangman has " + lives + " body parts remaining.");
}
//alert() the user what the current word is.
function update_user(word) {
  var word_str = word[0];
  for (var i = 1; i <word.length; i++) {
    word_str += " " + word[i];
  }
  alert("So far, the word is " + word_str);
}

//quick way to compare arrays of equal lengths
function is_equal(a, b) {
  var is_a = [], is_b = [];
  is_a = a.slice();
  is_b = b.slice();
  for (var i = 0; i < is_a.length; i++) {
    if (is_a[i] != is_b[i]) return false;
  }
  return true;
}



//this function updates the page with the new current word
function update_current(current_array) {
  document.getElementById('current_word').innerHTML = current_array;
}



//this function returns a letter
function current_letter(){
  return prompt("Guess a letter?", "one letter only.");
}

//this function returns an array of underscores with the same length as the secret word, ie [_, _, _, ...]
function fill_current_with_blanks (sec) {
  var curr = [];
  curr = sec.slice();
  console.log(curr);
  console.log(sec);
  for (var i = 0; i < curr.length; i++) {
    curr[i]='_';
  }
  console.log(sec);
  console.log(curr);
  return curr;
}

//this function iterates through the secret word and checks for correct words
function check_guess(guess, secret_array, curr) {
  console.log(secret_array);
  var current_array = curr;
  console.log(current_array);
  var flag = false;
  for (var i=0; i<secret_array.length; i++) {
    if (guess == secret_array[i]) {
      current_array[i] = guess;
      flag = true;
    }
  }
  console.log(current_array);
  // return (flag) ? false : current_array;
  // if we didn't find a correct, return false.
  if (!flag) return false; else return current_array;
}



