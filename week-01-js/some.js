let myArray = [1, 2, 3, 4];

let sum = 0;

function calculateSum(nums) {
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
// calculateSum(myArray);
console.log(calculateSum(myArray));
// console.log(sum);
