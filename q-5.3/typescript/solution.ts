function reverse(bits: string) {
  return bits.split("").reverse().join("");
}

function count(bits: string) {
  let i = 0;
  while (i < bits.length && bits[i] === "1") i++;

  return i;
}

function seqlen(bits: string, index: number) {
  const left = reverse(bits.substring(0, index));
  if (index === bits.length - 1) return count(left) + 1;

  const right = bits.substring(index + 1);

  return count(left) + count(right);
}

function longestSequence(integer: number) {
  const bits = integer.toString(2);

  let winner = 0;
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === "0") {
      const len = seqlen(bits, i) + 1;
      if (len > winner) winner = len;
    }
  }

  return winner;
}

console.log(longestSequence(1775));
