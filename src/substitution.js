// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // creates a variable that stores the alphabet as a string and is accessible inside the substitution function.
  const ogAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function substitution(input, alphabet, encode = true) {
    //if no substitution alphabet is provided, returns false.
    if(!alphabet) return false;
    //takes the inputted string and makes it lowercase. 
    const smolInput = input.toLowerCase();
    //takes the substitution alphabet and makes it lower case.
    const betaBet = alphabet.toLowerCase();
    //creates a new set from the lowercased substitution alphabet.
    const betSet = new Set(betaBet);
    
    //if the inputted alphabet does not include 26 characters, returns false.
    if (betaBet.length !== 26) return false;
    //if the inputted alphabet does not have 26 unique characters, returns false.
    if (betSet.size !== 26) return false;
    //creates an empty string that will store our result.
    let result = "";
    //if encode is true, runs the following code to encode the inputted string.
    if (encode){
    for(let char of smolInput){
      const index = ogAlphabet.indexOf(char);
      if(index < 0){
        result += char;
      } else {
        result += betaBet[index];
      }
    }
    //decodes an inputted message if encode is false. 
  } else {
    for(let char of smolInput){
      const index = betaBet.indexOf(char);
      if(index < 0){
        result += char;
      } else {
        result += ogAlphabet[index];
      }
    }
  }
    return result;
  }
  
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
