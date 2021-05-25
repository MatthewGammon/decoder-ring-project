// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    if (shift < 0 && encode){
      shift = 26 + (shift % 26);
    }
    //taking the inputted string and making it lowercase so that it meets the "ignores capital letters" requirement.
    input = input.toLowerCase();
    // declaring an empty string that I will store my results in.
    let result = "";
    //using a for/of loop to perform actions on each individual character of the input string.
    for(let char of input){
      //uses the charCodeAt() method to return a number representing the character code of the character at each index of the string and adds the inputted shift number to the character code. This will create a new character code that is shifted to the left or right.
      let characterCode = char.charCodeAt();
      if (encode){
        if(characterCode >= 97 && characterCode <= 122){
        characterCode = (characterCode -97 + shift) % 26 + 97;
      } else {
        characterCode = characterCode;
      }
      //takes the result string and uses the String.fromCharCode method, passed in our character code from the previous line, to extract a string value that will have been shifted from the input, and adds this value to the result string.
      result += String.fromCharCode(characterCode);
    } else {
      if(characterCode >= 97 && characterCode <= 122){
        characterCode = (characterCode -97 - shift) % 26 + 97;
        if(characterCode < 97){
          characterCode += 26;
        }
        result += String.fromCharCode(characterCode);
      } else {
        characterCode = characterCode;
        result += String.fromCharCode(characterCode);
      }
      
    }
  }
    return result;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
