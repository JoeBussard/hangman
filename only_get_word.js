function only_get(random) {
  console.log("entered rando.js");
  console.log("entered get word from dictionary");
  var rand = random;
  var dictionary;
  var xhttp = new XMLHttpRequest();
  var current = "Debug";
  console.log('Initialized random, dictionary, xhttp, current');
  xhttp.onreadystatechange = function() {
  console.log('entered the onreadystatechange function');
  console.log('let\'s log the state and status...');
  console.log('readyState = ' + this.readyState);
  console.log('this.status= ' + this.status);
/****
  man xttp.onreadystatechange()

This is an interesting function.  It only runs after this entire 
javascript program, only_get(random) is finished.

This seems to be a paradox, as how can I run code after the program
is finished?

Will toy around will calling functions at the end
of onreadystatechange function...

Probably will need to research .onClick() function that I've seen..

****/

    if (this.readyState == 4 && this.status == 200) {
      console.log('Entered the "readyState == 4 and status = 200 if stmt');
     //console.log(this.responseText);//[Math.floor(Math.random()*this.responseTe    xt.length)]);
      dictionary = JSON.parse(this.responseText);
      var random_word = Object.keys(dictionary);
      for (x in dictionary){
    
      }   
      var index = Math.floor(Math.random()*random_word.length);
      console.log("Random word is: " + random_word[index])
      console.log("Definition is: " + Object.values(dictionary)[index]);
      update_definition_paragraph(Object.values(dictionary)[index]);
/*****
These functions aren't defined locally so let's comment
them out until we have them implemented somehow...
      update_curr_paragraph(random_word[index]);
      update_def_paragraph(Object.values(dictionary)[index]);
****/
      console.log('done with onreadystatechange function');
    }   
  };  
  console.log('finished defining the onreadystatechange function');
  console.log('running xhttp.open();');
  xhttp.open("GET", "dictionary.json", true);
  console.log('running xhttp.send();');
  xhttp.send();
  console.log("Math.random is: " + Math.random());
  console.log('end of the only_get function');
}

function run_code_after_readystatechange() {
  alert("How do I run this function if the program needs to end for   to run?");

}

/****
This is going to be the new js file... add update_*_paragraph's here
****/

/****
  man update_curr_paragraph(new_word);
updates the paragraph that shows you what the current paragraph is
****/
function update_curr_paragraph(new_word) {
  console.log("ok, we're in the update word paragraph..");
  var word = new_word;
  document.getElementById("current_word").innerHTML = word;
}

function update_definition_paragraph(new_def) {
  var def = new_def; 
  document.getElementById("definition").innerHTML = def;
}
