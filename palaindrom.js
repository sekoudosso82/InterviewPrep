
// Challenge 1
// Write a recursive function countdown that accepts a positive integer n 
// as an input and logs every number from n (inclusive) to 0 (exclusive) 
// to 0 (eclusive) to the console.
function recusiveee (n) {
  for (let i = n ; i>0 ; i--){
    console.log(i)
  }
}

// Challenge 2
// Write a recursive function sum that calculates the sum of 
// an array of integers.
function recursiveSum (arr){
  let sum = 0
  for (let i = arr.length-1 ; i>=0 ; i--){
    sum += arr[i]
  }
  return sum
}

// uncomment these to check your work
//  console.log(sum([1,1,1])); // -> returns 3
//  console.log(sum([1,2,3,4,5,6])); // -> returns 21

// Challenge 3
// Write a recursive function palindrome that accepts a string 
// as an input and returns true if that string is a palindrome 
// (the string is the same forward and backwards). The input string 
// may have punctuation and symbols, but that should not affect 
// whether the string is a palindrome.
function palindrome (str){
  let sSplit = str.toLowerCase().split('')
  let s = []
  for (let i = 0 ; i<sSplit.length ; i++){
    if (sSplit[i] >= 'a' && sSplit[i] <= 'z'){
      s.push(sSplit[i])
    }
  }
  console.log(s)
  let reverseee = []
  for (let i = s.length-1 ; i>=0 ; i--){
    
      reverseee.push(s[i])
    
  }
  console.log(reverseee)
  for (let i = 0 ; i<reverseee.length ; i++){
    if (s[i] !== reverseee[i]){
      return false
    }
  }
  return true
}
//second solution
function palindrome (str){
  let sSplit = str.toLowerCase().split('')
  let s ='' 
  for (let i = 0 ; i<sSplit.length ; i++){
    if (sSplit[i] >= 'a' && sSplit[i] <= 'z'){
      s += (sSplit[i])
    }
  }
  console.log(s)
  // let reverseee = []
  // for (let i = s.length-1 ; i>=0 ; i--){
    
  //     reverseee.push(s[i])
    
  // }
  // console.log(reverseee)
  for (let i = 0 ; i<s.length ; i++){
    if (s.charAt(i) !== s.charAt(s.length-1-i)){
      return false
    }
  }
  return true
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false

// Challenge 4
// Write a recursive function isPrime that determines if a 
// number is prime and returns true if it is.
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));
// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

// Challenge 5
// Write a recursive function pathFinder that takes an object and 
// array as inputs and returns the value with the given path.

// const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
// const arr = ["first","second","third"];
// pathFinder(obj,arr);   //-> "finish"

// Challenge 6
// Write a recursive function flattenRecursively that flattens a nested 
// array. Your function should be able to handle varying levels of nesting.

// Challenge 7
// Write a recursive function findInOrderedSet that determines 
// if a number is in an ordered array. Assume the array is sorted. 
// BONUS: Write the function in such a way that fully iterating through 
// the array to check isn't necessary.

// Challenge 8
// There are n stairs. A person standing at the bottom wants 
// to reach the top. The person can climb either 1 or 2 stairs 
// at a time. Write a function countWaysToReachNthStair to count 
// the number of ways the person can reach the top 
// (order does matter). See test cases for examples.

// Challenge 9
// Given a collection of distinct integers, write a function 
// getPermutations to return all possible permutations.

Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

// Challenge 10
// Write a function getRangeBetween that returns an array of all 
// integers between values x and y, 
// not including x and y. // Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// Challenge 1
function countdown(n) {
	
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
function sum(array) {

}




// Challenge 3
// function palindrome(string) {
//   //declare empty variable  
//   let str = '';
//   //split the string parameter
//   const arr = string.split('')
//   //use for loop to add every element in the spliited from back to the beginning
//   for(let i = arr.length-1; i >= 0; i--){
// 		    str += arr[i]
//   }
// 	console.log('str: ' + str)
//   console.log('string: ' + string)
//   //compare if line 28's string is equal to the parameter string
//   if(str === string) return true
//   else return false
//   	//return true
//   //else
//   	//return false
// }
// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

function palindrome(string, valid = false){
	if (valid === false){
    let alphabetString = ''
    // split string 
    const arr = string.toLowerCase().split('')
    // iterate over the array 
    for (let i = 0 ; i < arr.length ; i++){
      if (arr[i] >= 'a' && arr[i] <= 'z'){
        alphabetString += arr[i]
      }
    }
  }
  // empty string 
  
  // console.log('alphabetString: ', alphabetString)
  // use slice to compare first char and last char 
  if (alphabetString.length === 0 || alphabetString.length === 1){
    return true
  }
  if (alphabetString[0] !== alphabetString[alphabetString.length-1]){
    return false
  }
  
  let x = alphabetString.slice(1)
  x= x.slice(x.length-1, x.length)
  palindrome(x)
  
}


// Challenge 4

function isPrime(num) {

}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


//Challenge 5
function pathFinder(obj, arr) {

}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6
function flattenRecursively(arr) {

}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
function findInOrderedSet(arr, target) {

}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
function countWaysToReachNthStair(n) {

}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9
function getPermutations(arr) {

}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
function getRangeBetween(x, y) {

}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
