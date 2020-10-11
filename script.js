// Assignment Code
var generateBtn = document.querySelector("#generate");



// possible characters for password
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?=-


// prompt number of character >8 and <128
// uppercase, lowercase, numeric, special y or no

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];



// will allow 5 invalid tries before exiting loop
// for (var i = 0; i < 5; i++) {
function generatePassword() {

  var selectedCharacters = []
  var passwordLength = prompt("Enter number of characters you want your password to be; more than 8, less than 128.")
  // passwordLength = passwordLength.getNumericValue
// validates password length and prompts the following selections, stores the truthy or falsey values in global memory
  if (passwordLength >= 8 && passwordLength <= 128) {  
  var upperSelection = confirm("Would you like Uppercase characters?");
  var lowerSelection = confirm("would you like Lowercase characters?");
  var numericSelection = confirm("Would you like numeric values?");
  var specialSelection = confirm("Would you like special characters?")
   } 

  // if password length is not within 8-128, it will alert this message
  else {alert("Invalid entry, please try another value..."); return}

  // Depending on selection, it will store those values in variable selectedCharacters[] in global memory
  if (upperSelection === true) {selectedCharacters = selectedCharacters.concat(upperCase);}
  
  if (lowerSelection != false) {selectedCharacters = selectedCharacters.concat(lowerCase);}
  
  if (numericSelection === true) {selectedCharacters = selectedCharacters.concat(numeric);}
  
  if (specialSelection === true) {selectedCharacters = selectedCharacters.concat(specialCharacters);}
  else {return}


  console.log(passwordLength)
  console.log(typeof passwordLength)
  console.log(upperSelection)
  console.log(lowerSelection)
  console.log(numericSelection)
  console.log(specialSelection)
  console.log(selectedCharacters)



  var result = ""

  

  for(var i = 0; i < passwordLength; i++) {

    result += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    
  }

  return result
  
  // logic to generate password for function generatePassword
}
  

      
      
      


        //   for(var i = 0; i < passwordLength; i++){
        //   // combine all arrays into one big array called select all
        //   // function allCharacters(){upperCase.concat(lowerCase, numeric, specialCharacters)}
        // var password1 = allCharacters[Math.floor(Math.random() * passwordLength.lenght)];
      
        // }

   
  






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

