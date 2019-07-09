var num_wins = 0;
var num_guesses = 12;
var array_of_guessed_chars = [];
var word_on_screen; // country name on screen
var country_to_guess;
var flag_image_dir = 'assets/images/flags/';

// This function has an internal dictionary of words. Every time you call it, it returns a random word from its
// dictionary.
function GetRandomWord() {
    var word_list = ['argentina', 'afghanistan', 'brazil', 
    'belgium', 'cambodia', 'iran', 'india', 'russia','jordan', 'spain', 'australia', 
    'canada', 'bolivia','chad', 'china', 'eritrea', 'nepal', 'turkey'];
    return word_list[Math.floor(Math.random()*word_list.length)];  
}
// this function returns country code which is the same as the names of the flags images
function GetCountryId(country_name) {
    switch(country_name) {
        case 'argentina':
            return 'ar';
        case 'afghanistan':
          return 'af';
        case 'brazil':
        return 'br';
        case 'belgium':
            return 'be';
        case 'cambodia':
            return 'kh';
        case 'iran':
            return 'ir';
        case 'india':
            return 'in';
        case 'russia':
            return 'ru';
        case 'jordan':
            return 'jo';
        case 'spain':
            return 'es';
        case 'australia':
            return 'au';
        case 'canada':
            return 'ca';
        case 'bolivia':
            return 'bo';
        case 'chad':
            return 'td';
        case 'china':
            return 'cn';
        case 'eritrea':
            return 'er';
        case 'nepal':
            return 'np';
        case 'turkey':
            return 'tr';
        
        default:
            return '';
      }
    return '';  
}

// Call this on page load
function ResetStart(){
    num_guesses = 12;
    array_of_guessed_chars = [];
    country_to_guess = GetRandomWord();
    word_on_screen = GetWordOnScreenFromUserGuess(country_to_guess, array_of_guessed_chars);
    UpdateScreen();
    console.log(country_to_guess);
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
    document.getElementById('guessed_letters').textContent = array_of_guessed_chars.join(', ');
    document.getElementById('country_to_guess').textContent = word_on_screen;
    document.getElementById('flag').src = flag_image_dir + GetCountryId(country_to_guess) +'.png';
}


//

function Play(){ 
    if (array_of_guessed_chars.includes(event.key)) return; // do nothing if the same key pressed
    array_of_guessed_chars.push(event.key);// every time when key pressed add to guessed letters
    word_on_screen = GetWordOnScreenFromUserGuess(country_to_guess, array_of_guessed_chars);
    // country name hidden by "_"

    if (!country_to_guess.includes(event.key)) num_guesses--;
    // if country to guess doesn't have guessed letter, substract from total num of guesses

    if (num_guesses == 0) ResetStart();
    //condition where if number of guesses = 0 , we restart the game
    if (!word_on_screen.includes('_')) { 
    // if country name do NOT have "_" it means user guessed the word and num of wins increments on +1
        num_wins++;
        ResetStart();
    }

    UpdateScreen();
}

document.onkeypress = Play;

