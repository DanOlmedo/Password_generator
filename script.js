// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberArray = ['1','2','3','4','5','6','7','8','9'];
var specialArray = ['#','$','%','&','/','(',')','*','+','-'];
var passwordArray = [];

// Write password to the #password input
function writePassword() {
  var characters = [];
  var passwordArray = [];
  var passLength = parseInt(window.prompt('Please select expect length (8-128): '));

isNaN(passLength) ? alert('Please enter a number'): '';
isNaN(passLength) ? end: '';
(passLength>128 || passLength<8) ? alert('Please select a value between 8 and 128') :'';
(passLength>128 || passLength<8) ? end:'';

  var uppercaseChoice = window.confirm('Do you want upercase characters?');
  if(uppercaseChoice){
    characters = characters.concat(upperArray)};

  var lowercaseChoice = window.confirm('Do you want lowercase characters?');
  if(lowercaseChoice){
    characters = characters.concat(lowerArray)};

  var numberChoice = window.confirm('Do you want numbers?');
  if(numberChoice){
    characters = characters.concat(numberArray)};

  var specialChoice = window.confirm('Do you want special characters?');
  if(specialChoice){
    characters = characters.concat(specialArray)};

  if(!uppercaseChoice && !lowercaseChoice && !numberChoice && !specialChoice){
    alert('You did not select any type of charcter')
  };

for (let i = 0; i < passLength; i++) {
  var randInt = Math.floor(Math.random() * ((characters.length) - 1)) + 1;
  passwordArray.push(characters[randInt]);
}

password = passwordArray.join('')
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
