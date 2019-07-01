var num_wins = 0;
var num_guesses = 12;
var guessed_letters = [];
var word_display;
var current_word;


function ResetStart(){
    num_guesses = 12;
    guessed_letters = [];
    current_word = GetRandomWord();
}

// This function gets a word and an array of letters. If a letter of the word is in the array, it's displayed. If
// not, it's replaced by '_'.
// Example: word 'chair', array ['b', 'a', 'i'] returns '_ _ a i _'
function GetCurrentWordDisplay(word, list_letters){
    word_display = [];//array
    for (i=0; i<word.length; i++) { //for loop to check one by one each letter in current word
        ch = word.charAt(i); 
        if (list_letters.includes(ch)) { //if letter pressed by user same as letter from current word it will push and display it
            word_display.push(ch);
        } else {
            word_display.push('_'); //if not it will push and display _
        }
    }
    return word_display.join(' '); //display current word
}

function UpdateScreen() { //every time when this function called we update all numbers/letters/or clear it
    document.getElementById('num_wins').textContent = num_wins;
    document.getElementById('num_guesses').textContent = num_guesses;
    document.getElementById('guessed_letters').textContent = guessed_letters.join(", ");
    document.getElementById("current_word").textContent = word_display;
}

// This function has an internal dictionary of words. Every time you call it, it returns a random word from its
// dictionary.
function GetRandomWord() {
    var word_list = ["moscow", "seol", "rome", "venice", "deli","denpasar","bangkok", "hochiminh", "dubrovnik", "tivat", "helsinki", "singapore", "hongKong"];
    return word_list[Math.floor(Math.random()*word_list.length)];  
}


function Play(){ 
    
    //The keyCode property returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event.
    if(guessed_letters == String.includes(current_word.length)){
        guessed_letters.push(String.fromCharCode(event.keyCode));
        
    }
  
    UpdateScreen();
    }
   

