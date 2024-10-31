function sumUsingForEach(arr: number[]) {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

function sumUsingReduce(arr: number[]) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function sumUsingForOf(arr: number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function sumUsingForLoop(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
//@ts-ignore
Deno.bench({
  name: "Sum using for each",
  fn: () => sumUsingForEach(largeArray),
});
//@ts-ignore
Deno.bench({
  name: "Sum using Reduce",
  fn: () => sumUsingReduce(largeArray),
});
//@ts-ignore
Deno.bench({
  name: "Sum using for of",
  fn: () => sumUsingForOf(largeArray),
});
//@ts-ignore
Deno.bench({
  name: "Sum using for loop",
  fn: () => sumUsingForLoop(largeArray),
});
