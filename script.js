var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
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
    if (passLength < 8 || passLength > 128) {
        alert ("Choice is not valid. Please try again.");
        return;
    }

var passwordContent = []; 
// this variable calls any for any variable, I used the push method with this variable.
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",  "X", "Y", "Z"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["*", "&", "^", "%", "$", "#", "@", "!", "?", ">", "<", "{", "}"];





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

// using length confirm from above along with if statements, booleans, and for loops to generate password.
 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
        passwordContent[
         Math.floor(Math.random() * passwordContent.length)];
     randomPassword+=
         passwordContent[
            Math.floor(Math.random() * passwordContent.length)
        ];
//
    }
 return randomPassword;
}
generateBtn.addEventListener("click", writePassword);
