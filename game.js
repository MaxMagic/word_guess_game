/* Themes:
70's?
90's?
NBA?
Back to the Future???? - This would be very cool
- Back to the future background
- Maybe include motion

Outline:
- Text will need to be written in divs
- Will need to look up fonts for Back to the Future
Steps:
- Press button to start game will start function
- 10 guesses
- Start with dashes equal to letters in word
    var s = "overpopulation";
    for (var i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
}
and
    var s = "overpopulation";

    console.log(s[3]);
then get length of array - will need to start with an array with items and then empty array
- For each letter in word, print "_"
- Append "__" to array for each letter in word
- May need to format underscore
- Every wrong guess - sound is played
- Every correct solve - "Great Scott!"
- Words like: DeLorean, Marty McFly, Doc Brown
- Document KeyPress and save to variable
- If key press matches any letter in the array, replace dash with letter
    document.onkeyup = function(event) {
        var userGuess = event.key;
- If guess is incorrect, or correct, append letter to div below "_" and add 1 to turns
- Remove item from array using splice() method
- Will need 4 arrays: empty - for guesses, one with "__" for the display, one with the answers spelled out,
and one with the amnswers in whole-word form. 
- Random number generator will choose word to guess
- Decide how and if function will end

Variables:
- turnCount - Number of turns
- winCount - Number of wins
*/


<div id="start_button" onclick="start_game()">Start Game!</div>

<div id="guess_area"></div>

<div id="guessed_letters"></div>

<div id="text_box"></div>

<script>

    var words = [];
    var gameWord = [];
    var baseSet = [];
    var turnCount = 0;
    var winCount = 0;
    var lossCount = 0;

    // Start game function

        // Click button to start game
        // Enter your guess will print in text_box
        // Random word will be selected from array of words
        // Split function will separate random word into letters in array
        // Append "__" to empty array for length of selected word
        // Diplay "__" array to guess_area
        

    // Guessing function

        // Listen for key entered
        // Save key to variable
        // Compare key to letters in array
        // If key in array, replace "__" with letter, add 1 to turnCount, add letter to guessed_letters
        // If key is not in array, add 1 to turnCount


    // Score function

        // If gameWord === baseSet, player wins, add 1 to winCount
        // If turnCount > 10, player loses, add 1 to lossCount, ask if player wants to play
        again with button (maybe confirm)

    // Restart game function

        // 
</script>

