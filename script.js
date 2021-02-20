var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword () {
    // prompt for the length of the password
    var passLength = prompt("Please choose a password length between 8-128");
    
    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);
 
// choose a length of at least 8 characters and no more than 128 characters
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Choice is not valid. Please try again.");
        return;
    }

var passwordContent = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");
// added split method to split the string between each character.


// confirmation that user wants to use lowercase letters
var lowerCaseConfirm = confirm("Do you want your password to include lowercase letters?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            passwordContent.push(lowerCaseChar[i]);
        }
    }
// confirmation that user wants to use uppercase letters
var upperCaseConfirm = confirm("Do you want your password to include uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            passwordContent.push(upperCaseChar[i]);
        }
    }
// confirmation that user wants to use a number
var numberConfirm = confirm("Do you want your password to include numbers");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            passwordContent.push(numberChar[i]);
        }
    }
// confirmation that a user wants to use a special character 
var specialConfirm = confirm("Do you want your password to include special characters?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            passwordContent.push(specialChar[i]);
        }
    }

// using the number from above along with if statements, booleans, and for loops to generate password.
 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
        passwordContent[
         Math.floor(Math.random() * passwordContent.length)];
     randomPassword =
         passwordContent[
            Math.floor(Math.random() * passwordContent.length)
        ];
    }
 return randomPassword;
}
generateBtn.addEventListener("click", writePassword);