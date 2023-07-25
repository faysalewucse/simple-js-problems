// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5]
// Example Output: 3

function mostFrequentsNumber(arr) {
  let counts = [0];
  let max = 0;
  let position;

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
    if (counts[arr[i]] > max) {
      max = counts[arr[i]];
      position = arr[i];
    }
  }

  return position;
}

console.log(mostFrequentsNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]));
