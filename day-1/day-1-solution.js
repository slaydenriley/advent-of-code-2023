var fs = require("fs");

// input as string
var input = fs.readFileSync("day-1/day-1-input.txt").toString("utf-8");

// solution
const solution = (input) => {
  let lines = input.split("\n");
  let total = 0;

  for (const line of lines) {
    let nums = [];

    for (const char of line) {
      if (Number.isInteger(+char)) {
        nums.push(char);
      }
    }

    if (nums.length) {
      let number = `${nums[0]}${nums[nums.length - 1]}`;
      total += Number(number);
    }
  }

  return total;
};

// RUN: node day-1/day-1-solution.js
console.log(solution(input));
