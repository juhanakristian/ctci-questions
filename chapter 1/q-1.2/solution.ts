function isPermutation(input1: string, input2: string) {
  if (input1.length !== input2.length) return false;

  // Count letters in input1
  const counts = new Array(128).fill(0);
  for (let i = 0; i < input1.length; i++) {
    const letter = input1.charCodeAt(i);
    counts[letter]++;
  }

  for (let i = 0; i < input2.length; i++) {
    const letter = input2.charCodeAt(i);
    counts[letter]--;
    // If count is less than zero, input2 has different letters
    if (counts[letter] < 0) return false;
  }

  return true;
}

console.log(isPermutation("asd", "das"));
console.log(isPermutation("asd", "aad"));
