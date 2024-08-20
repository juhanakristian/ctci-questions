function insertBitsAt(N: number, M: number, i: number, j: number) {
  // Create mask from i to j
  // For example if i == 3 and j == 0
  // ((0b00001000) - 1) & ~((0b00000001) - 1)
  // (0b00000111) & ~(0b00000000)
  // (0b00000111) & (0b11111111)
  // 0b00000111
  const mask = ((1 << i) - 1) & ~((1 << j) - 1);

  return (N & ~mask) | (M & mask);
}

const N = 0b00001010;
const M = 0b00000111;

const result = insertBitsAt(N, M, 3, 0);
console.log(N.toString(2));
console.log(M.toString(2));
console.log(result.toString(2));
