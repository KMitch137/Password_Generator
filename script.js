// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
var nums = "0123456789"
var multiSelect = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    var passLength = prompt("Password must be between 8 and 128 characters!");
    if (passLength < 8 || passLength > 128) {
      alert("Must be between 8 and 128 characters in length. Please try again");
      return;
    }
    var upperCase = confirm("Would you like to use uppercase? 'ok' for yes and 'cancel' for no");
    var lowerCase = confirm("How about we add some lowercase in there? 'ok' for yes and 'cancel' for no");
    var specials = confirm("Lets get crazy with the special characters shall we? 'ok' for yes and 'cancel' for no");
    var numbers = confirm("Finally, lets add some numbers? 'ok' for yes and 'cancel' for no");
  }
  if (upperCase == true) { multiSelect += upper; }
  if (lowerCase == true) { multiSelect += lower; }
  if (numbers == true) { multiSelect += nums; }
  if (specials == true) { multiSelect += symbols; }
}
    password += multiSelect[Math.floor(Math.random() * multiSelect.length)]
function generatePassword() {
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);