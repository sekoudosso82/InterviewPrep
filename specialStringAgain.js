// A string is said to be a special string if either of two 
// conditions is met:

//     All of the characters are the same, e.g. aaa.
//     All characters except the middle one are the same, 
//     e.g. aadaa.

// A special substring is any substring of a string which meets 
// one of those criteria. Given a string, determine how many 
// special substrings can be formed from it.

// For example, given the string s = mnonopoo, we have the 
// following special substrings:
// {m, n, o, n, o, p, o, o, non, ono, opo, oo}.

// Function Description

// Complete the substrCount function in the editor below. 
// It should return an integer representing the number of 
// special substrings that can be formed from the given 
// string.

// substrCount has the following parameter(s):

//     n: an integer, the length of string s
//     s: a string

// Input Format

//     The first line contains an integer, n, the length of s.
//     The second line contains the string s.
    
// Constraints
//     1 =< n =< 10^6
//     Each character of the string is a lowercase alphabet,
//     ascii[a-z].
    
// Output Format
//         5
//         asasd

// Sample Output 0

//         7 

// Explanation 0

//     The special palindromic substrings of s = 'asasd' are 
//     {a, s, a, s, d, asa, sas} 

function substrCount(n, s) {
    let result = 1;
    let chars = s.split("");
    for (let i = 0; i < n - 1; i++) {
        let j = i + 1;
        let count = 1; 
        while (chars[i] == chars[j] && j < n) {
            count++;
            j++;
        }
        result += count;
        j++;
        while (chars[i] == chars[j] && count > 0) {
            count--;
            j++;
        }
        if (count == 0) result++;
    }
    return result;
    // **********
    
    // let count = n;
    // for (let i = 0; i < s.length; i++) {
    //     let nextIndex = i;
    //     while (s[i] === s[nextIndex + 1]) nextIndex++;

    //     if (i !== nextIndex) {
    //         const length = nextIndex - i;
    //         count = count + (length * (length + 1)) / 2;
    //         i = nextIndex;
    //     } else {
    //         let step = 1;
    //         while (s[i + step] === s[i - step] && s[i + step] === s[i + 1]) {
    //             step++;
    //             count++;
    //         }
    //     }
    // }
    // return count; 
    
    // abcbaba
    // var counter = s.length 
    // for (let i=0; i<s.length-1; i++){
    //     let index = i+1
    //     while (index < s.length){
    //         if (s[i] === s[index] ){
    //                 tempWord += s[index]
    //                 index += 1  
    //         }else{
    //             index = s.length-1
    //         }
    //     }
    //     tempWord.length > 1 ? counter+=1 : '' 
    //     //     if ( 
    //     //     tempWord === s.slice(index,index+tempWord.length)){
    //     //         counter += 1     
    //     // }
    // }
    // return counter

}