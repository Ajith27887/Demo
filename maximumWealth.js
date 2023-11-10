//* start
// var shuffle = function (nums, n) {
//* Splice changes the original array
//   const newArray = nums.splice(n);
//   let ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     ans.push(nums[i], newArray[i]);
//   }
//   nums = ans;
//   console.log(nums);
// };
// shuffle([2, 5, 1, 3, 4, 7], 3);
//* End
//* 2798. LeetCode(Number of Employees Who Met the Target)(Easy)(Array)
//* start
//* Filter
// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//   const ans = hours.filter((data) => {
//     return data >= target;
//   });
// };
// numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
//* End
//* Richest Customer Wealth
// * Start
var maximumWealth = function (accounts) {
  accounts.reduce((a, b, acc) => {
    acc + a;
  }, 0);
};
