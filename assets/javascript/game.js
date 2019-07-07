var num_wins = 0;
var num_guesses = 12;
var array_of_guessed_chars = [];
var word_on_screen;
var word_to_guess;

// This function has an internal dictionary of words. Every time you call it, it returns a random word from its
// dictionary.
function GetRandomWord() {
    var word_list = ["moscow", "seol", "rome", "venice", "deli","denpasar","bangkok", "hochiminh", "dubrovnik", "tivat", "helsinki", "singapore", "hongKong"];
    return word_list[Math.floor(Math.random()*word_list.length)];  
}

// Call this on page load
function ResetStart(){
    num_guesses = 12;
    array_of_guessed_chars = [];
    word_to_guess = GetRandomWord();
}
window.onload = ResetStart;

// This function gets a word and an array of letters. If a letter of the word is in the array, it's displayed. If
// not, it's replaced by '_'.
// Example: word 'chair', array ['b', 'a', 'i'] returns '_ _ a i _'
function GetWordOnScreenFromUserGuess(word, array_of_letters){
    display = [];//array
    for (i = 0; i < word.length; i++) { //for loop to check one by one each letter in current word
        ch = word.charAt(i); 
        if (array_of_letters.includes(ch)) { //if letter pressed by user same as letter from current word it will push and display it
            display.push(ch);
        } else {
            display.push('_'); //if not it will push and display _
        }
    }
    return display.join(' '); //display current word
}

function UpdateScreen() { //every time when this function called we update all numbers/letters/or clear it
    document.getElementById('num_wins').textContent = num_wins;
    document.getElementById('num_guesses').textContent = num_guesses;
    document.getElementById('guessed_letters').textContent = array_of_guessed_chars.join(", ");
    document.getElementById('word_to_guess').textContent = word_on_screen;
}



function Play(){ 
    array_of_guessed_chars.push(event.key);
    word_on_screen = GetWordOnScreenFromUserGuess(word_to_guess, array_of_guessed_chars);
    UpdateScreen();
}

document.onkeypress = Play;

