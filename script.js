// Assignment code here

const passwordChars= "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"

// create a object with key of number and values, another key of lower case alphabet, another key of uppercase alphabet, key of special characters

const chars = {
  num: "1234567890",
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChars: "!@#$%^&*()"
}

// math.floor(math.random() * string.length) -> give the index of the string

function generatePassword() {
  // 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
gi