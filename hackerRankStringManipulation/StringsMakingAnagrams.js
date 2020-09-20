Alice is taking a cryptography class and finding anagrams to be very useful. 
We consider two strings to be anagrams of each other if the first string's 
letters can be rearranged to form the second string. In other words, both 
strings must contain the same exact letters in the same exact frequency 
For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where 
encryption is dependent on the minimum number of character deletions 
required to make the two strings anagrams. Can you help her find this number?

Given two strings, a  and b, that may or may not be of the same length, 
determine the minimum number of character deletions required to make 
a and b anagrams. Any characters can be deleted from either of the strings.

For example, if a = cde and b = dcf, we can delete e from string a and f 
from string b so that both remaining strings are cd and dc which are anagrams. 

Function Description

Complete the makeAnagram function in the editor below. It must return 
an integer representing the minimum total characters that must be 
deleted to make the strings anagrams.

makeAnagram has the following parameter(s):

    a: a string
    b: a string

function makeAnagram(a, b) {
    let as = a.split('')
    let bs = b.split('')
    let count = 0
    if (as.length < bs.length){
        while(as.length>0){
            let temp = as.pop()
            if (!bs.includes(temp)){ count +=1
            }else { 
            bs.splice(bs.indexOf(temp), 1)}
        }
    }else if (bs.length < as.length){
        while(bs.length>0){
            let temp = bs.pop()
            if (!as.includes(temp)){ count +=1
            }else { 
            as.splice(as.indexOf(temp), 1)}
        }
    }else {
        while(bs.length>0){
            let temp = bs.pop()
            if (!as.includes(temp)){ count +=1
            }else { 
            as.splice(as.indexOf(temp), 1)}
        }
    }
    count += as.length
    count += bs.length
    console.log(count)
    return count

}

// second  solution 

function main() {
    var a = readLine().split("");
    var b = readLine().split("");
var countA = a.length;
var countB = b.length;
var count = countA + countB;
    var pair = 0;
    for(var i = 0; i < countA;i++){
        for(var j = 0; j < countB; j++){
            if(a[i] == b[j]){
                b.splice(j,1);
                pair++;
                break;
            }
        }
    }
    console.log(count - (pair*2));
}

