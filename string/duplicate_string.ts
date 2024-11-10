// create a function that removes the duplicates of a string and returns a new array.

function duplicates(str: string): string {
  const charSet = new Set<string>();
  const uniqueChars = [];
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    let isUnique = true;

    for (let j = 0; j < strLength; j++) {
      if (i !== j && str[j] === str[i]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      charSet.add(str[i]);
      uniqueChars.push(str[i]);
    }
  }

  return uniqueChars.join("");
}

// faster
function dupsJsMethods(str: string) {
  const arr = str.split(" ");

  const set = new Set(arr);
  const newString = [...set].join(" ");

  return newString;
}

// not fast at all
function dubsJsMethods2(str: string): string {
  const charSet = new Set<string>();
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (!charSet.has(str[i])) {
      charSet.add(str[i]);
      result.push(str[i]);
    }
  }
  return result.join("");
}

Deno.bench("crude setup for a duplicate string", () => {
  duplicates("This is is a test test string");
});

Deno.bench("js methods setup for duplicates", () => {
  dupsJsMethods("This is is a test test string");
});

Deno.bench("js methods setup for duplicates", () => {
  dubsJsMethods2("This is is a test test string");
});
