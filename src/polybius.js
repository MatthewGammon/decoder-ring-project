// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  //an object with key/value pairs of letters and their corresponding numbers to be used with the encoding process.
  const encoder = {a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i:42, j:42, k:52, l:13, m:23, n:33,
    o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55}
//an object with key/value pairs of numbers and their corresponding letters that will be used in the decoding process.
  const decoder = {11:'a', 21:'b', 31:'c', 41:'d', 51:'e', 12:'f', 22:'g', 32:'h', 42:'(i/j)', 52:'k',
  13:'l', 23:'m', 33:'n', 43:'o', 53:'p', 14:'q', 24:'r', 34:'s', 44:'t', 54:'u', 15:'v', 25:'w', 
  35:'x', 45:'y', 55:'z'}

  function polybius(input, encode = true) {
    //takes the input and makes it lower case, so that capital letters can be ignored. 
    const smolInput = input.toLowerCase();
    //if encode is true....
    if(encode){
      //creates an empty string to store our encoded message in
      let output = '';
      //uses a for/of loop to iterate through each character of the input string
      for(let char of smolInput){
        //gets a character code using ASCII values and assigns that value to the characterCode variable for each character in the string.
        let characterCode = char.charCodeAt();
        //checks to see if the character is a space (32 is the ASCII value for a space).
        if(characterCode === 32){
          //if the character is a space, it maintains the space in the outputted message.
          output += String.fromCharCode(characterCode);
        } else {
          //if the character is NOT a space, it takes the current output string and adds the number that corresponds with the char inside of the encoder object. ex. output = "", char = t, output = "44".
          output += encoder[char]
        }
      }
      return output;
    }
    //if encode is false, runs the code below to decode a message.
    if(!encode){
      //create an accumulator variable to keep track of the number of characters in the inputted message.
      charCount = 0;
      //uses another for/of loop to look at each character in the input.
      for (let char of smolInput){
        //checks to see if the character is NOT a space (only spaces and letters will be included in the input) using the charCodeAt method again. 
        if(char.charCodeAt() !== 32)
        //if the character is not a space, it increments our charCount variable.
        charCount ++;
      }
      // if charCount divided by 2 has any remainder that is not zero, we know it is an uneven number and the function returns false. 
      if(charCount % 2 !== 0){
        return false;
        // if charCount divided by 2 has no remainder, it is an even number and we can continue with the decoding of the message. 
      } else {
        //creates an output variable that will store our final returned value. 
        let output = '';
        //iterates through our lower case input to decode the inputted message.
        for(let i = 0; i < smolInput.length; i+=2){
          let index = smolInput[i];
          let indexPlus = smolInput[i+1];
          let characterCode = index.charCodeAt();
          //checks to see if a space is present and if so, adds the space to the output string and decrements i.
          if(characterCode === 32){
            output += String.fromCharCode(characterCode);
            i--;
          } else {
            //uses template literals to combine our index char and indexPlus chars. ex. index = 4, indexPlus = 44, key = 44.
            let key = `${index}${indexPlus}`;
            //references the decoder object and takes the value from the key that matches the key variable. ex. output = '', key = 44, output = '44'. 
            output += decoder[key]
          }
        }
        return output;
      }
    }
  
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
