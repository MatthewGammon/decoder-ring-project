// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    //taking the inputted string and making it lowercase so that it meets the "ignores capital letters" requirement.
    input = input.toLowerCase();
    // declaring an empty string that I will store my results in.
    let result = "";
    //declaring a variable to use in my for loop that will be assigned the value of the character code at each index/character of the input string.
    let characterCode = 0;
    //using a for/of loop to perform actions on each individual character of the input string.
    for(let char of input){
      //uses the charCodeAt() method to return a number representing the character code of the character at each index of the string and adds the inputted shift number to the character code. This will create a new character code that is shifted to the left or right.
      characterCode = char.charCodeAt() + shift;
      //takes the result string and uses the String.fromCharCode method, passed in our character code from the previous line, to extract a string value that will have been shifted from the input, and adds this value to the result string.
      result += String.fromCharCode(characterCode);
    }

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
