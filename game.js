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


