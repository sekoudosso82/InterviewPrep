// Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common 
// substring a. The words "be" and "cat" do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below. It should 
// return a string, either YES or NO based on whether the strings 
// share a common substring.

// twoStrings has the following parameter(s):

//     s1, s2: two strings to analyze .

// Input Format

// The first line contains a single integer

// , the number of test cases.

// The following

// pairs of lines are as follows:

//     The first line contains string s1.
//     The second line contains string s2.

// CASE FOR ON ONE CHAR
function twoStrings(s1, s2) {
    let result = 'NO'
    for (let i = 0 ; i < s1.length; i++){
        let temp = s1[i]
            if (s2.indexOf(temp) > -1 ){
                result = 'YES'
            }   
    }
    console.log(result)
    return result
}

twoStrings('hello', 'world')
twoStrings('hi', 'world')
// to run control+option+N

//CASE FOR ANY SUBSTRING
function twoStrings(s1, s2) {
    let result = 'NO'
    for (let i = 0 ; i < s1.length; i++){
        let temp = s1[i]
        for (let j = i+1 ; j<s1.length; j++){
            temp += s1[j]
            if (s2.indexOf(temp) > -1 ){
                result = 'YES'
            }   
        }
    }
    console.log(result)
    return result
}
twoStrings('hellor', 'world')
twoStrings('hil', 'world')
// to run control+option+N
