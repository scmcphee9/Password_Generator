// Assignment Code
var generateBtn = document.querySelector("#generate");



//Variable of all possible characters stored in global memory for password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


// Function that will generate the random password
function generatePassword() {

  // empty array to collect all boolean choices in global memory
  var selectedCharacters = []

  // This will allow user to pick length of password between 8 and 128 characters long
  var passwordLength = prompt("Enter number of characters you want your password to be; more than 8, less than 128.")
  
// If cancel is pressed without entering a value, the following message will be alerted and will be returned back to start over
  if (passwordLength == null){alert("We don't need to provide you a password then..."); return}


// validates password length and prompts the following selections, stores the truthy or falsey values in global memory
  if (passwordLength >= 8 && passwordLength <= 128) {  
    // run boolean prompts and stores them in global memory
  var upperSelection = confirm("Would you like Uppercase characters?");
  var lowerSelection = confirm("would you like Lowercase characters?");
  var numericSelection = confirm("Would you like numeric values?");
  var specialSelection = confirm("Would you like special characters?")
   } 

  // if password length is not within 8-128, it will alert this message
  else {alert("Invalid entry, please try another value..."); return}

  // Depending on selection, it will store these values in variable array selectedCharacters[] in global memory
  if (upperSelection === true) {selectedCharacters = selectedCharacters.concat(upperCase);}
    
  if (lowerSelection === true) {selectedCharacters = selectedCharacters.concat(lowerCase);}
    
  if (numericSelection === true) {selectedCharacters = selectedCharacters.concat(numeric);}
    
  if (specialSelection === true) {selectedCharacters = selectedCharacters.concat(specialCharacters);}
  

// prints out these variable in the log for inspection after selection
  console.log(passwordLength)
  console.log(upperSelection)
  console.log(lowerSelection)
  console.log(numericSelection)
  console.log(specialSelection)
  



// Trying to shuffle the selected characters array to make more random

//   function shuffleArray() {
//     for (var i = selectedCharacters.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var shuffledCharacter = selectedCharacters[i];
//         selectedCharacters[i] = selectedCharacters[j];
//         selectedCharacters[j] = shuffledCharacters;
//     }
// }

// var allShuffled = shuffleArray(selectedCharacters)
// console.log(allShuffled)


// Empty variable result to collect the ranom selection of the for loop below, and will be stored in global memory
  var result = ""

  // for loop to iterate through the selected characters array and randomly pick values, and place them in the result variable
  for(var i = 0; i < passwordLength; i++) {

    // selectedCharacters = Collections.shuffle(selectedCharacters)
    result += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    
  }

  return result
  
}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

