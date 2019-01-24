function get_word_from_dictionary_rando(random) {
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
 
 

