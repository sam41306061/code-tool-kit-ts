function reverse(str: string) {
  return str.split("").reverse().join();
}

// This parses faster
function reverse2(str: string) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // string concatination
  }
}

Deno.bench("Reverse a string with js utility methods", () => {
  const str = "Hello World";
  reverse(str);
});

Deno.bench("Reverse a string without js utility methods", () => {
  const str = "Hello World";
  reverse2(str);
});
