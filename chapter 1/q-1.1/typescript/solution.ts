const input = "Hel World";

// Implementation by creating a array of boolean values
// O(n) time complexity
function isUniqueChars(input: string) {
  if (input.length > 128) return false;

  const charSet = new Array(128).fill(false);

  for (let i = 0; i < input.length; i++) {
    const seen = input.charCodeAt(i);
    if (charSet[seen]) return false;

    charSet[seen] = true;
  }

  return true;
}

// Implementation with no data structures
// O(n^2) time complexity
function isUniqueChars2(input: string) {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUniqueChars(input));
console.log(isUniqueChars2(input));
