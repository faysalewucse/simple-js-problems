// Task 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world"
// Example Output: "dlrow olleh"

function reverseWord(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

console.log(reverseWord("Hello world"));
