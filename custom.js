// fetch("https://restcountries.com/v3.1/all")
//   .then((result) => result.json())
//   .then((data) => console.log(data));

// *Start
//  Freecodecamp ((3) Basic Algorithm Scripting) factorialize Answer
// function factorialize(num) {
//   let i = 0;
//   let result = 1;
//   while (i < num) {
//     result *= num;
//     num--;
//   }
//   num = result;
//   console.log(num);
// }
// factorialize(5);
// *End

// *start
//  Freecodecamp ((4) Basic Algorithm Scripting) Find the Longest Word in a String Answer
// function findLongestWordLength(str) {
//   let splitResult = str.split(" ");
//   let strLenght = [];
//   for (let i = 0; i < splitResult.length; i++) {
//     if (splitResult[i]) {
//       strLenght.push(splitResult[i].length);
//     }
//   }
//   str = Math.max(...strLenght);
//   console.log(str);
//   return str;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");
// *End

// *Start
//  Freecodecamp (Basic Algorithm Scripting)
// 5.  Return Largest Numbers in Arrays Answer
// function largestOfFour(arr) {
//   const element = [];
//   for (let i = 0; i < arr.length; i++) {
//     element.push(Math.max(...arr[i]));
//     // console.log(element);
//   }
//   arr = element;
//   console.log(arr);
//   return arr;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);

// *End

// *Start
//  Freecodecamp (Basic Algorithm Scripting)
// 6. Confirm the Ending
// function confirmEnding(str, target) {
//   console.log(str.length);
// }
// confirmEnding("Bastian", "n");
// let answer = Bastian;

// *End
//  Freecodecamp (Basic Algorithm Scripting)
// 7. Reapte a string
// function repeatStringNumTimes(str, num) {
//   let str_arr = "";
//   while (num > 0) {
//     str_arr += str;
//     num--;
//   }

//   return (str_arr = str);
// }

// repeatStringNumTimes("abc", 3);
// *End

// *start
//  Freecodecamp (Basic Algorithm Scripting)
// 8.Truncate a String
// function truncateString(str, num) {
//   if (str.length > num) {
//     str = str.slice(0, num);
//     let dot = "...";
//     str = str.concat(dot);
//     return str;
//   } else {
//     return str;
//   }

// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);
// *End

// *start
//  Freecodecamp (Basic Algorithm Scripting)
// 9. Boo Who
// function booWho(bool) {
//   console.log(typeof bool);
//   console.log(typeof bool === "boolean");
// }
// booWho(null);
// *End

//* Start
//  Freecodecamp (Basic Algorithm Scripting)
// 10.Title Case a Sentence

// function titleCase(str) {
//   let answer = str.split(" ");
//   let ans = answer[1].charAt(0).toUpperCase();

//   console.log(answer);

// }

// titleCase("I'm a little tea pot");
// *End

//* Start (Promise)
// function handleJimWork() {
//   return new Promise((resolve, reject) => {
//     // Slow method that runs in the background
//     const success = true;
//     if (success) {
//       resolve(100);
//     } else {
//       reject("Jim broke his leg");
//     }
//   });
// }

// handleJimWork()
//   .then((amount) => {
//     console.log(`Jim paid you ${amount} dollars`);
//   })
//   .catch((reason) => {
//     console.error(`Error: ${reason}`);
//   });
//* End

// *Start (Fetch Api with async/await)
// async function demo(subject) {
//   const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
//   const Res = fetch(URL);
//   const response = await Res;
//   const json = await response.json();
//   console.log(json);
// }
// demo("javascript");
// *End

// *start (Array Filter and)
// const user = [
//   {
//     fname: "Ajith",
//     lname: "yogesh",
//     age: 22,
//   },
//   {
//     fname: "uv",
//     lname: "yuvaraj",
//     age: 23,
//   },
//   {
//     fname: "teene",
//     lname: "teenesh",
//     age: 27,
//   },
// ];

// const solution = user.filter((x) => x.age > 25).map((x) => x.fname);
// console.log(solution);
// *End

// *Start   Freecodecamp (Basic Algorithm Scripting) (Title case a sentence)
// function titleCase(str) {
//   const newTitle = str.split(" ");

//   const updatedTitle = [];
//   for (let st in newTitle) {
//     console.log(newTitle[st][0]);
//     updatedTitle[st] =
//       newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }
// titleCase("I'm a little tea pot");
// *End

// *Start Freecodecamp    (Basic Algorithm Scripting)   (Slice and Splice)
// function frankenSplice(arr1, arr2, n) {
//   const newArr = [...arr1, ...arr2];
//   console.log(newArr);
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// *End

1; //*  (LeetCode)(Concatenation of Array)(Easy)(Arrays)
//* Start
//* Spread Operator
// var getConcatenation = function (nums) {
//   nums = [...nums, ...nums];
//   console.log(nums);
// };

// getConcatenation([1, 2, 1]);
// * End

2; //* (LeetCode)(Shuffle the Array)(Easy)(Array)
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

//* 2798. (LeetCode)(Number of Employees Who Met the Target)(Easy)(Array)
//* start
//* Filter
// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//   const ans = hours.filter((data) => {
//     return data >= target;
//   });
// };
// numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
//* End

//* (LeetCode)(Richest Customer Wealth)
// * Start
// * Not Completed
// var maximumWealth = function (accounts) {
//   var elementOne = 0;
//   var elementTwo = 0;
//   let ans = 0;
//   for (let i = 0; i < accounts[0].length; i++) {
//     elementOne += accounts[0][i];
//   }
//   for (let j = 0; j < accounts[0].length; j++) {
//     elementTwo += accounts[0][j];
//   }
//   console.log(elementOne, elementTwo);
//   ans = Math.max(elementOne, elementTwo);
//   console.log(ans);
// };
// maximumWealth([
//   [1, 2, 3],
//   [3, 2, 1],
// ]);
//* End

// * (Reverse String)(Easy)
// * Start
// * Array reverse() method
// var reverseString = function (s) {
//   s.reverse();
//   console.log(s);
// };
// reverseString(["h", "e", "l", "l", "o"]);
//* End

// * (Leetcode)(Kids With the Greatest Number of Candies)(Easy)
// * Map and Filter
//* Explanation
// 1st child: Even if we gave all 5 extra candies to the first child, it will have 6 candies < 7(5th child). So, we print false for it.
// 2nd child: We give all 5 extra candies to this child, making its count to 9 > 7(5th child). So, we print true for it.
// var kidsWithCandies = function (candies, extraCandies) {
//   const maxValue = Math.max(...candies);
//   let newAnswer = [];
//   candies
//     .map((data) => {
//       return data + extraCandies;
//     })
//     .filter((data) => {
//       return newAnswer.push(data >= maxValue ? true : false);
//     });
//   console.log(newAnswer);
// };
// kidsWithCandies([2, 3, 5, 1, 3], 3);
// *End

// *Start (Leetcode)(Running Sum of 1d Array)(Easy)
// * reduce
// var runningSum = function (nums) {
//   nums.reduce((a, c, i, arr) => (arr[i] += a));
//   return nums;
// };
// runningSum([1, 2, 3, 4]);
// *End

// *Start (LeetCode) ( How Many Numbers Are Smaller Than the Current Number)(Easy)
// *forLoop
//* Start
// var smallerNumbersThanCurrent = function (nums) {
//   let ans = 0;
//   let newAns = [];

//   for (let i = 0; i < nums.length; i++) {
//     ans = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         ans++;
//       }
//     }
//     newAns.push(ans);
//   }
//   console.log(newAns);
// };
// smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
// *End

//* (LeetCode) Build Array from Permutation (Easy)
//*
//* Start
// var buildArray = function (nums) {
//   let ans = [];
//   nums.map((x, i, arr) => {
//     ans.push(arr[arr[i]]);
//   });
//   console.log(ans);
// };
// buildArray([0, 2, 1, 5, 3, 4]);
// *End

// *Maximum Number of Words Found in Sentences
// *Start
var mostWordsFound = function (sentences) {
  let ans = sentences.map((x) => {
    x.length;
  });
  console.log(ans);
};
mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
//  *End
