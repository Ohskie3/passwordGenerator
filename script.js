// Assignment Code
document.getElementById('generate').addEventListener('click', () => {
  // setting the values to the values of the inputs 
  let hasLength = prompt("Between 8 and 128, please choose how many characters you want your password to be.")
    if(hasLength < 8 || hasLength > 128) {
      alert("Length must be between 8 and 128 (use numbers)")
      prompt("Between 8 and 128, please choose how many characters you want your password to be.")
    }
  let hasLowercase = confirm('Do you want any lowercase letters?')
  let hasUppercase = confirm(Do you want any uppercase letters?')
  let hasSymbols = confirm(Do you want any symbols?')
  let hasNumbers = confirm(Do you want any numbers?')

  // start over if none are chosen 

    if (!hasLowercase && !hasUppercase && !hasSymbols && !hasNumbers){
      alert('Must choose at least one character type')
    }

  // setting a variable as empty string to receive whats needed
  let charSet = ''

  // setting variables for potential inputs
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let symbols = '!@#$%&*'
  let numbers = '0123456789'

  let generatedPassword = ''

  // logic
  if (hasLowercase) {
    charSet += lowercase
  }
  if (hasUppercase) {
    charSet += uppercase
  }
  if (hasSymbols) {
    charSet += symbols
  }
  if (hasNumbers) {
    charSet += numbers
  }

  // Loop for choosing characters to add to generated password
  for (let i = 0; i < hasLength; i++) {
    generatedPassword += charSet[Math.floor(Math.random() * charSet.length)]
  }
  // showing new password
  document.getElementById('password').textContent = generatedPassword
})