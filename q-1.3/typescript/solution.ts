function urlify(input: string) {
  const encoded = input.split("");
  for (let i = 0; i < encoded.length; i++) {
    if (encoded[i] == " ") encoded.splice(i, 1, "%20");
  }

  return encoded.join("");
}

console.log(urlify("test value"));
