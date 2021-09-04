// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


for understand the soultion check the math problem 
https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF


 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxNumber = A.length + 1;
    let total = (maxNumber * (maxNumber + 1)) / 2; // https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF
    let partNumberSum = 0;
    let missingNumber = 0;
    A.forEach((number) => {
        partNumberSum += number; // Calc the sum of the array 
    })

    missingNumber = total - partNumberSum; // check the diff between
    return missingNumber;

}
