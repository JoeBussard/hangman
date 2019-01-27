"use strict";

/*

1. Need to separate Guess Button from Start Button, so that HTML can update after each guess.  Each new guess needs the button pressed again.
2. Need to update the way current_array is stored because the guessing "progress" is being erased each iteration.
3. Need to add the "failure box" of rejected letters.




*/


/***************
function secret_word()
The purpose of this function is to ask the user, or perhaps a friend of the user sitting next to him or her, to input a word.  Ideally, this word will be used as the word that the user tries to guess. */
function secret_word(){
  return prompt("What is the secret word?", "enter word here.");
}
/************** function play_game()
This is the workhorse function of the entire program.  This is what is called when the start button is clicked.  This function runs the entire game from start to finish.  It calls multiple other functions that are also at the global scope level to this file.  It starts with declaring all the variables: The secret word and its array, the current guess, the progress/current word and its array, the array of incorrect letters, and the number of lives.
It selects a random word from the dictionary using get_word_from_dictionary(rand);  It also has a piece of jquery animation for fun.**/

function play_game() {
  console.log("anything???");
  //get_word_from_dictionary(123);
  // //declare variables
  var secret = "";
  var guess = "";
  var secret_array = [];
  var current_array = [];
  var test_array = [];
  var lives = 6; //edit this to make it more difficult
                 // arm + arm + leg + leg + body + head = 6
  //set up our word
  var word_from_dictionary = get_word_from_dictionary_rando("foo");
  $('.index-header-class').delay(1).hide(500).delay(1000).show(1000);
  var wrong_array = [];
  console.log("Escaped word from dictionary");
  do {
    secret = secret_word();
  } while (!secret);
  console.log(secret);
  secret_array = word_from_dictionary.split("");  

  current_array = fill_current_with_blanks(secret_array);
  console.log(secret_array);
  
//replace the contents of this loop with a function

// This loop is the game function after the secret word has been set up.
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

// This is the end game.  If you get to this point, then the game is over.
  if (lives == 0) alert("You've lost the game.  Your hangman is hanged.");
// TODO need to change alert(".....") to innerHTML;
else {
    alert("You've won the game! Your hangman is cut free.");
    alert("He dies of dysentery fording a river 2 months later.");
  }
  document.getElementById('start_button').innerHTML = "Click here to play again.";
}

//alert() the user the wrong guesses.
//the function will run an alert that tells the user which letters they
//have guessed, but weren't in the word.
function update_wrong(wrong) {
  if (!wrong.length) return;
  else {
    var value = "The wrong guesses so far are: ";
    for (var i = 0; i < wrong.length - 1; i++ ) {
      value += wrong[i] + ", ";
    }
    value += wrong[wrong.length - 1] + "."
    alert(value);

// TODO change alert(value) to innerHTML;



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
/*****
This is a useful function to check a guess.
If the letter is correct, then it returns what the array should be.
If its false, then it returns false.
so if you pass "a", "apple", and "_ _ _ _ _"
it returns "a _ _ _ _"
*****/

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




function get_word_from_dictionary_main(random) {
  console.log("entered rando.js");
  console.log("entered get word from dictionary");
  var rand = random;
  var dictionary;
  var xhttp = new XMLHttpRequest();
  console.log('a');
  xhttp.onreadystatechange = function() {
  console.log('d');
    if (this.readyState == 4 && this.status == 200) {
      console.log('b');
     //console.log(this.responseText);//[Math.floor(Math.random()*this.responseTe    xt.length)]);
      dictionary = JSON.parse(this.responseText);
      var random_word = Object.keys(dictionary);
      for (x in dictionary){
    
      }   
      var index = Math.floor(Math.random()*random_word.length);
      console.log("random word is " + random_word[index])
      console.log("definition is " + Object.values(dictionary)[index]);
    }   
  };  
  console.log('c');
  xhttp.open("GET", "dictionary.json", true);
  xhttp.send();
  console.log(Math.random());

}





//use my json dictionary to get a random word. uses a weird method from a learncode.academy video
function get_word_from_dictionary(random) {
  console.log("entered get word from dictionary");
  var rand = random;
  var word_to_return = "";
  var xhttp = new XMLHttpRequest();
  console.log('a');
  xhttp.onreadystatechange = function() {
  console.log('d');
    if ( (this.readyState == 4 && this.status == 200) || true) {
      console.log('b');
      word_to_return = this.responseText[Math.floor(Math.random()*this.responseText.length)];
      console.log(     this.responseText[Math.floor(Math.random()*this.responseText.length)]);
      return word_to_return;
    }
  }//;
  console.log('c');
  xhttp.open("GET", "dictionary.json", true);
  xhttp.send();


}







