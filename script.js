// Assignment code here

// const passwordChars= "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"

let lengthOfPassword
let uppercaseChars
let lowercaseChars
let specialChars 
let numberChars 
let stringToRandomize

// create a object with key of number and values, another key of lower case alphabet, another key of uppercase alphabet, key of special characters
const chars = {
  num: "1234567890",
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChars: "!@#$%^&*()/><:;[]{}|+=-"
}

// math.floor(math.random() * string.length) -> give the index of the string

function generatePassword() {
  // Provide input for user to indicate how long password will be
  lengthOfPassword = Number(prompt("Choose your password length between 8 and 128 characters."))
  // validate that lengthOfPassword is between 8 and 128.
  // if not prompt user to include a number between 8 and 128
  if (!lengthOfPassword) {
    alert("Need to input a number between 8 and 128.")
    lengthOfPassword = Number(prompt("Choose your password length between 8 and 128 characters."))
  } else if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    // if length of is less than 8 or more than 128 default to 12
    // lengthOfPassword = Number(prompt("Choose your password length between 8 and 128 characters."))
    lengthOfPassword = 12
  } 
    // prompt user on whether or not to include uppercase letters
    uppercaseChars = prompt("Do you want to include uppercase letters? Please answer yes or no")
    // prompt user on whether or not to include lowercase letters
    lowercaseChars = prompt("Do you want to include lowercase letters? Please answer yes or no")
    // promt user on whether or not to include special characters
    specialChars = prompt("Do you want to include special characters? Please answer yes or no")
    // prompt user on whether or not to include numbers
    numberChars = prompt("Do you want to include numbers? Please answer yes or no")

    // if user writes yes for uppercase letters, add uppercase letters from object to new string
      // if user writes no, move to next prompt, 
    // if user writes yes for lowercase letters, add lowercase letters from object to same string as above
    if (uppercaseChars == "yes" && lowercaseChars == "yes" && specialChars == "yes" && numberChars == "yes") {
      stringToRandomize = chars["alphaUpper"]+ chars["alphaLower"] + chars["specialChars"] + chars["num"]
      console.log(stringToRandomize, lengthOfPassword)
    } else if (uppercaseChars == "yes" && lowercaseChars == "yes"  && specialChars == "yes" && numberChars == "no" ) { 
      stringToRandomize = chars["alphaUpper"] + chars["alphaLower"] + chars["specialChars"]
      console.log(stringToRandomize)
    } else if (uppercaseChars == "yes" && lowercaseChars == "yes"  && specialChars == "no" && numberChars == "no") {
      stringToRandomize = chars["alphaUpper"] + chars["alphaLower"]
      console.log(stringToRandomize)
    } else if (uppercaseChars == "yes" && lowercaseChars == "no"  && specialChars == "no" && numberChars == "no") {
      stringToRandomize = chars["alphaUpper"]
      console.log(stringToRandomize)
    } else if (uppercaseChars == "no" && lowercaseChars == "no"  && specialChars == "no" && numberChars == "no") {
      stringToRandomize = chars["specialChars"]
      console.log(stringToRandomize)
    } else if (uppercaseChars == "" && lowercaseChars == ""  && specialChars == "" && numberChars == "") {
      stringToRandomize = chars["num"]
      console.log(stringToRandomize)
    }
    
    let randomizedString = ""
    for (let i = 0; i < lengthOfPassword; i++) {
      randomizedString += stringToRandomize.charAt(Math.floor(Math.random() * stringToRandomize.length))
    }
    console.log(randomizedString)
    return randomizedString


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