var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessesSoFar = [];


var generatedLetters = letters[math.floor(math.random()=letters.length)];
var math = [letters];

Document.onKeyup = function(event) {
	var userChosen = string.fromCharCode(event.keycode).toLowerCase();
	guessLeft--;
	guessesSoFar.Push(userChosen); 
    if (userChosen === generatedLetters); {
    	wins++;
    }
    if (userChosen !== generatedLetters);{
    	losses--;	
    	if (guessLeft === 0) {
    			losses++;
    		}

    	}		
    }
 						
Document.querySelector("#wins").innerHTML = wins;
Document.querySelector("#losses").innerHTML = losses;
Document.querySelector("#guessLeft").innerHTML = guessLeft;
Document.querySelector("#guessesSoFar").innerHTML = guessesSoFar.join(" , ");





 



