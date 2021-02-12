// Assignment Code
document.getElementById('generate').addEventListener('click', () => {
  // setting the values to the values of the inputs 
  let hasLength = prompt("Between 8 and 128, please choose how many characters you want your password to be.")
    if(hasLength < 8 || hasLength > 128) {
      alert("Length must be between 8 and 128 (use numbers)")
      prompt("Between 8 and 128, please choose how many characters you want your password to be.")
    }
  let hasLowercase = prompt('Yes or No, Do you want any lowercase letters?')
  let hasUppercase = prompt('Yes or No, Do you want any uppercase letters?')
  let hasSymbols = prompt('Yes or No, Do you want any symbols?')
  let hasNumbers = prompt('Yes or No, Do you want any numbers?')

  // setting a variable as empty string to receive whats needed
  let charSet = ''

  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let symbols = '!@#$%&*'
  let numbers = '0123456789'

  let generatedPassword = ''

  // logic
  if (hasLowercase === 'yes') {
    charSet += lowercase
  }
  if (hasUppercase === 'yes') {
    charSet += uppercase
  }
  if (hasSymbols === 'yes') {
    charSet += symbols
  }
  if (hasNumbers === 'yes') {
    charSet += numbers
  }

  for (let i = 0; i < hasLength; i++) {
    generatedPassword += charSet[Math.floor(Math.random() * charSet.length)]
  }
  document.getElementById('password').textContent = generatedPassword
})