// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let passWord = "";
let bucket = [];

function generatePassword() {
  passWord = "";
  bucket = [];

  var passLength = prompt("How long would you like your password to be? You can choose between 8 and 128 characters.");
  if (passLength < 8 || passLength > 128) {
    alert("Must be between 8 and 128 characters in length. Please try again");
    return;
  }
  var userUpperCase = confirm("Would you like to use uppercase? 'ok' for yes");

  var userLowerCase = confirm("How about we add some lowercase in there? 'ok' for yes");
  var userSymbols = confirm("Lets get crazy with the special characters shall we? 'ok' for yes");
  var UserNumbers = confirm("Finally, lets add some numbers? 'ok' for yes");

  if (userUpperCase === true) { bucket = bucket.concat(upperCase) };
  if (userLowerCase === true) { bucket = bucket.concat(lowerCase) };
  if (userSymbols === true) { bucket = bucket.concat(symbols) };
  if (UserNumbers === true) { bucket = bucket.concat(numbers) };
  if (userLowerCase + userUpperCase + userSymbols + UserNumbers === 0) {
    alert("Please choose at least one option!");
    return;
  }

  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * bucket.length);
    passWord = passWord + bucket[randomIndex];
  }

  return passWord;
}

function myFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
