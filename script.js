// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define function to generate random password
function generatePassword() {
// Create password variable, establish password length as an integer
// and create empty character source.
  var password = '';
  var passwordLength = 0;
  var upper = false;
  var lower = false;
  var special = false;
  var nums = false;
  
  

  // Do while loop to request user input for password length.
  do
  {
  passwordLength = parseInt(window.prompt("How long would you like your password to be?"));
  
// Conditionals to ensure user entry is a valid number equal to or between 8 and 120.
  if (passwordLength < 8 || passwordLength > 120){
    window.alert("Password must be between at least 8 and no more than 120 characters.");
  }
 if (isNaN(passwordLength) )
  {
    window.alert("Please enter a number."); 
  } 

// While loop executes until the users entry satisfies the conditions of the
// passwordLength variable.
} while (passwordLength < 8 || passwordLength > 120 || isNaN(passwordLength) );


do {
var count = 0;
// Asks the user if they would like to have capital letters in their password
// Increments security count if yes
if (window.confirm("Would you like to include capital letters?")){
  var capitalCase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  count++;
  var upper = true;
}

// Asks the user if they would like to have capital letters in their password
// Increments security count if yes
if (window.confirm("Would you like to include lowercase letters?")){
  var lowerCase = ('abcdefghijklmnopqrstuvwxyz');
  count++;
  var lower = true;
}

// Asks the user if they would like to have capital letters in their password
// Increments security count if yes
if (window.confirm("Would you like to include special characters?")){
  var specialCharacters = ('!@#$%^&*()_+');
  count++;
  var special = true;
}
  
// Asks the user if they would like to have capital letters in their password
// Increments security count if yes
if (window.confirm("Would you like to include numbers?")){
  var numeric = ('1234567890');
  count++;
  var nums = true;
}
if (count <= 2)
{
  window.alert('Please choose at least 3 different character types.')
}
  // While condition ensures that at least 3 different character
  // types have been selected.
} while (count <= 2);

//For loop to generate password
for (i = 1; i<=passwordLength;){
  // Create character index to ensure varied character type selection
  var index = Math.floor(Math.random() * 4 + 1);

// Checks to see if assigned conditions are met.
// If they are, a random character from that type is
// input to the password, else the counter is not incremented.
if (index == 1 && upper)
{
  var char = Math.floor(Math.random() * capitalCase.length + 1);
  password += capitalCase.charAt(char);
  i++;
}
else if (index == 2 && lower)
{
  var char = Math.floor(Math.random() * lowerCase.length + 1);
  password += lowerCase.charAt(char);
  i++;
}
else if (index == 3 && nums)
{
  var char = Math.floor(Math.random() * numeric.length + 1);
  password += numeric.charAt(char);
  i++
}
else if (index == 4 && special)
{
  var char = Math.floor(Math.random() * specialCharacters.length + 1);
  password += specialCharacters.charAt(char);
  i++;
}
  

}
// Returns the finished password to the writePassword() function.
return password;

}


