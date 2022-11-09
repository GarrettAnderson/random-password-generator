// Assignment code here

// const passwordChars= "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"

let lengthOfPassword
let uppercaseChars
let lowercaseChars
let specialChars 
let numberChars 

// create a object with key of number and values, another key of lower case alphabet, another key of uppercase alphabet, key of special characters
const chars = {
  num: "1234567890",
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChars: "!@#$%^&*()"
}

// math.floor(math.random() * string.length) -> give the index of the string

function generatePassword() {

  


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Provide input for user to indicate how long password will be
  lengthOfPassword = Number(prompt("Choose your password length between 8 and 128 characters."))
  // prompt user on whether or not to include uppercase letters
  uppercaseChars = prompt("Do you want to include uppercase letters?")
  // prompt user on whether or not to include lowercase letters
  lowercaseChars = prompt("Do you want to include lowercase letters?")
  // promt user on whether or not to include special characters
  specialChars = prompt("Do you want to include special characters?")
  // prompt user on whether or not to include numbers
  numberChars = prompt("Do you want to include numbers?")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);