//Ad Majorem Dei Gloriam

function secret_word(){
  return prompt("What is the secret word?", "enter word here.");
}

function play_game() {
  var secret = "";
  var guess = "";
  var secret_array = [];
  var current_array = [];
 
  secret = secret_word();
  console.log(secret);
  secret_array = secret.split("");  
  fill_current_with_blanks(secret_array);


  do {
    guess = current_letter();
    console.log(guess);
    console.log(guess.length);
  } while (guess.length > 1);

/*
//Check if the letter's correct.  Where should this logic go?
  for (var i = 0; i < secret_array.length; i++) {
    if (guess == secret_array[i]) {
      current_array[i] = guess;
      update_current();
      break;
    }
  } */


}

function update_current() {
  document.getElementById('current_word').innerHTML = current_array;
}

function current_letter(){
  return prompt("Guess a letter?", "one letter only.");
}

function break_up_secret() {
}

function fill_current_with_blanks (sec) {
  var curr = sec;
  console.log(curr);
  console.log(sec);
  for (var i = 0; i < curr.length; i++) {
    curr[i]='_';
  }
}

function check_guess(guess, secret_array) {
  for (var i=0; i<secret_array.length; i++) {
    if (guess == secret_array[i]) {
      current_array[i] = guess;
      update_current();
      return true;
    }
  }
  return false;
}



