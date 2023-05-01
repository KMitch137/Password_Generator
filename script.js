// Assignment Code
var generateBtn = document.querySelector("#generate");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()-=+<>?/|':[]{}";
const numbers = "0123456789";
var passWord = "";

function generatePassword() {
    console.log("button clicked")
    var passLength = prompt("How many characters would you like you password to use?");
    if (passLength < 8 || passLength > 128) {
      alert("Must be between 8 and 128 characters in length. Please try again");
      return;
    }
    var upperCase = confirm("Would you like to use uppercase? 'ok' for yes");
    var lowerCase = confirm("How about we add some lowercase in there? 'ok' for yes");
    var symbols = confirm("Lets get crazy with the special characters shall we? 'ok' for yes");
    var numbers = confirm("Finally, lets add some numbers? 'ok' for yes");

    if (upperCase === true) { passWord += upperCase };
    if (lowerCase === true) { passWord += lowerCase };
    if (numbers === true) { passWord += numbers };
    if (symbols === true) { passWord += symbols };   
/*
2. validate the input.
3. display the pasword on the page.
*/

    return passWord;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
