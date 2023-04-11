
/*
Example 1:
Given a sequence of integers, write a program to sort them in ascending order. 

Example:

For arr = [6,5,4,3,2,1], the output should be sortArray(a) = [1,2,3,4,5,6]
For arr = [100, 100, 99, 98, 102, 103], the output should be sortArray(a) = [98, 99, 100, 100, 102, 103]

Example 2:
Some people are standing in a row in a park. There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].




Example 3:
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

Example

For inputArray = ["abc", "", "aaa", "a", "zz"] the output should be sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]

*/ 
// Example 1: 

function sortArray (arr){
    for(let i = 0;i<arr.length-1;i++){
        for (let j = i+1; j < arr.length; j++) {
          if(arr[j]<arr[i]){
           let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
          }
          
        }
      }
  return arr;
}
let arr = [6,5,4,3,2,1]
console.log(sortArray(arr));

// Example 2: 
let a = [-1, 150, 190, 170, -1, -1, 160, 180]
function sortByHeight(a) {
  let b = a.filter(x=>x>0).sort((a, b) => a - b)
  return a.map(item=>item>0?b.shift():item)
}

console.log(sortByHeight(a));

// Example 3: 
let inputArray = ["abc", "", "aaa", "a", "zz"];

function sortByLength(arr){
  return arr.sort((a,b)=>a.length-b.length);

}
console.log(sortByLength(inputArray));
