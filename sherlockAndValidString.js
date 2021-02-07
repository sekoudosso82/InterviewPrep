// Sherlock considers a string to be valid if all characters 
// of the string appear the same number of times. It is also 
// valid if he can remove just 1 character at 1 index in the 
// string, and the remaining characters will occur the same 
// number of times. Given a string s, determine if it is valid. 
// If so, return YES, otherwise return NO.

// Example
// s = 'abc'
// This is a valid string because frequencies are
// {a:1, b:1, c:1}.

// s = 'abcc'
// This is a valid string because we can remove one c and have

// 1 of each character in the remaining string.

// s = 'abccc'
// This string is not valid as we can only remove 1 occurrence of c. 
// That leaves character frequencies of {a:1, b:1, c:2}. 

// Function Description

// Complete the isValid function in the editor below.

// isValid has the following parameter(s):

//     string s: a string

// Returns

//     string: either YES or NO

// Input Format

//     A single string s.

// Sample Input 0
//     aabbcd

// Sample Output 0

//     NO

// Explanation 0

// Given s = 'aabbcd', we would need to remove two characters, 
// both c and d --> aabb or a and b abcd, to make it valid. 
// We are limited to removing only one character, 
// so s is invalid.

function isValid(s) {
    let o = {};
    let count = 0;
    for (let char of s) {
        !o[char] ? o[char] = 1 : o[char]++
    }
    let arr = Object.values(o)
    let a = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== a) count++;
        if (count > 1)
            return "NO"
    }
    return "YES"
    
    // **********
    // let sSplit =  s.split('')
    // let obj = {}
    // for (let i = 0 ; i < sSplit.length ; i++){
    //     if ( obj[sSplit[i]] !== undefined ){
    //         obj[sSplit[i]] += 1
    //     }else{
    //         obj[sSplit[i]] = 1
    //     }  
    // }
    // let arr = Object.values(obj)
    // arr.sort((a,b)=>a-b)
 
    // for  (let i = 0 ; i < arr.length-1; i++){
    //     if (arr[i] !== arr[i+1]){
    //         if((arr.length - (i+1) )>1){
    //             return "NO"
    //         }
    //         else if((arr.length - (i+1) ) === 1 && (arr[i]+1 ) !== arr[i+1]){
    //             return "NO"
    //         }
    //     }  
    // }
    // return "YES"

}