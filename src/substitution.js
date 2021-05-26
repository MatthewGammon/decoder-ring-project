// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const ogAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false;
    
    const smolInput = input.toLowerCase();
    const betaBet = alphabet.toLowerCase();
    const betSet = new Set(betaBet);
    
    if (betaBet.length !== 26) return false;
    if (betSet.size !== 26) return false;
    let result = "";
    if (encode){
    for(let char of smolInput){
      const index = ogAlphabet.indexOf(char);
      if(index < 0){
        result += char;
      } else {
        result += betaBet[index];
      }
    }
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
