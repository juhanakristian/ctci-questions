function printBinary(value: number) {
  if (value > 1 || value < 0) throw new Error("Invalid value");

  let binary = "";
  let current = value;
  while (binary.length < 32) {
    const result = current * 2;
    if (result >= 1) {
      binary = binary + "1";
      current = result - 1;
    } else {
      binary = binary + "0";
      current = result;
    }
  }

  return `0.${binary}`;
}

console.log(printBinary(0.745).toString(2));
