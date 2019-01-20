function get_word_from_dictionary(random) {
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
      dictionary = this.responseText;
      var random_word = Object.keys(dictionary);
      console.log("random word is " + random_word);
    }
  };
  console.log('c');
  xhttp.open("GET", "smalldictionary.json", true);
  xhttp.send();
  console.log(Math.random());

}
 
 

