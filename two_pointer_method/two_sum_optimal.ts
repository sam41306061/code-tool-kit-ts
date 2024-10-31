//Optimal Solution
const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

const findTwoSum = function (nums: number[], target: number) {
  const numsMap: { [key: number]: number } = {};

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
};

Deno.bench("Optimal approach", () => {
  findTwoSum(numsArray, targetToFind);
});
