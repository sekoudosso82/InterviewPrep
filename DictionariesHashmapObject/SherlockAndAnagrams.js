// Two strings are anagrams of each other if the letters of one 
// string can be rearranged to form the other string. Given a string, 
// find the number of pairs of substrings of the string that are 
// anagrams of each other.

// For exampl s= mom, the list of all anagrammatic pairs is[m, m], [mo, om] 
// at positions [[0],[2]], [[0, 1], [1,2]] respectively.

// Function Description

// Complete the function sherlockAndAnagrams in the editor below. 
// It must return an integer that represents the number of 
// anagrammatic pairs of substrings in s.

// sherlockAndAnagrams has the following parameter(s):

//     s: a string.

// Input Format

// The first line contains an integer q, the number of queries.
// Each of the next q lines contains a string s to analyze. 

function getAllSubstrings(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            arr.push(s.slice(i, j));
        }
    }
    return arr;
}

function checkAllSubstrings(ss) {
    const dict = {};
    let count = 0;
    for (let str of ss) {
        const sortedStr = str.split('')
            .sort((a, b) => a.toLowerCase().localeCompare(b))
            .join('');
        if (dict[sortedStr]) {
            count += dict[sortedStr];
            dict[sortedStr] += 1;
        } else {
            dict[sortedStr] = 1;
        }
    }
    return count;
}

function sherlockAndAnagrams(s) {
    // Traverse all substrings within string
    const ss = getAllSubstrings(s);

    // Check if any two substrings of equal length are anagrams
    const count = checkAllSubstrings(ss);
    console.log(count)
    return count;
}
sherlockAndAnagrams('abba')
sherlockAndAnagrams('abcd')
// to run control+option+N
