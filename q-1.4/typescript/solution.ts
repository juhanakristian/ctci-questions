function isPalindromePermuation(input: string): boolean {
  // Count the number of times each character appears
  const counts = new Map<string, number>();
  for (const char of input) {
    const count = counts.get(char) || 0;
    counts.set(char, count + 1);
  }

  // If the input is even, all counts must be even
  // If the input is odd, all counts must be even except one
  const even = input.length % 2 === 0;
  const values = Array.from(counts.values()).sort((a, b) => a - b);

  for (let i = even ? 0 : 1; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isPalindromePermuation("tactcoa"));
console.log(isPalindromePermuation("tactocoa"));
console.log(isPalindromePermuation("tacttcoa"));
