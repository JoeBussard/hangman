function get_word_from_dictionary_rando(random) {
  console.log("entered rando.js");
  console.log("entered get word from dictionary");
  var rand = random;
  var dictionary;
  var xhttp = new XMLHttpRequest();
  var current = "Debug";
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
      update_curr_paragraph(random_word[index]);
      update_def_paragraph(Object.values(dictionary)[index]);
    }
  };
  console.log('c');
  xhttp.open("GET", "dictionary.json", true);
  xhttp.send();
  console.log(Math.random());
}
 
/*****
This function updates the paragraph that shows the secret word (Debug purposes only)
It doesn't show an array.  It's only a string.
I suppose if I passed a string version of array into the function it would work.
*****/
function update_curr_paragraph(current) {
  document.getElementById('current_word').innerHTML = current;
}

/*****
This function updates the paragraph which shows the definition on the html
*****/
function update_def_paragraph(def) {
  document.getElementById('definition').innerHTML = def
}

/*****
Ok so this was copied from the megafunction.
It's the main game loop from the mega.
Let's document it...
*****/

/*****
This loop works as long as there are lives left.  It also only works if the
word hasn't been correctly guessed.
*****/
//replace this while {} with a document.onclick{ if () { } } 
while ((lives > 0) && (!is_equal(secret_array, current_array))) {
/*****
These update functions are located in the megafile.
It's an alert().
The alerts are:
You have X lives left.
The word as it currently stands is X_ _X _ _ _ 
You've guessed the following letters incorrectly: X,  X, 

*****/

/****
This one needs to be passed the current array, incorrect letters, and lives.
Declare variables before if statement.
var lives = 10; //should make sure that the next line saves it as a number ?
lives = document.getElementById("numLives").innerHTML;
var current_array = split(" ", document.getElementById("currentLetters").innerHTML
var wrong_array = split(" ", document.getElementById("failedLetters").innerHTML
var word_str = "";

****/

  update_lives(lives);
  update_user(current_array);
  update_wrong(wrong_array);
  //get the first guess.. make this a function?
  /*****
Suprisingly, the answer to past Joe's question is yes.
I'll need to make a function to make it more efficient.
The funtion as it is calls current_letter()
current_letter() is a prompt.
  *****/
  do {
    guess = current_letter(); //current letter is a prompt. returns string.
    console.log(guess);
    if (guess) console.log(guess.length);
  } while ((guess) && (guess.length > 1)); //so if it's not a genuines guess run it again
  console.log(secret_array);
  console.log(check_guess(guess, secret_array, current_array));

//check guess returns false or it returns what the array is if the guess is correct.

  if (check_guess(guess, secret_array, current_array)) {
    console.log(check_guess(guess, secret_array, current_array));
    console.log('check_guess(guess, secret_array) was true');
    current_array = check_guess(guess, secret_array, current_array).slice();
//add document - get element by id - current array to current_array;

/****
  word_str = word[0];
  for (var i = 1; i <word.length; i++) {
    word_str += "" + word[i];
  }
  console.log(word_str);
****/

//document.getElementById("currentLetters").innerHTML = word_str;
} else {
    lives--;
    wrong_array.push(guess);
//add document - get element by id - wrong guesses +=", " + guess;
//add document - get element by id - numLives - make sure the string is a number.
    add alert("WRONG!");
    console.log('that was an incorrect guess');
  }
}
