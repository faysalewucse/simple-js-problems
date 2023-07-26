// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  const randomIndex = Math.floor(Math.random() * allCharacters.length);
  password += uppercaseLetters[randomIndex % 26];
  password += lowercaseLetters[randomIndex % 26];
  password += numbers[randomIndex % 10];
  password += specialCharacters[randomIndex % 26];

  for (let i = 0; i < length - 4; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

// Example: Generate a random password of length 12
console.log(generateRandomPassword(8));
