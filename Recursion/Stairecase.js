// Davis has a number of staircases in his house and he likes to climb each 
// staircase 1, 2, or 3 steps at a time. Being a very precocious 
// child, he wonders how many ways there are to reach the top of 
// the staircase.

// Given the respective heights for each of the s staircases in his 
// house, find and print the number of ways he can climb each 
// staircase, module 10^10 +7 on a new line.

// For example, there is s=1 staircase in the house that is n=5 steps 
// high. Davis can step on the following sequences of steps:

// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1 
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 2 1
// 2 1 2
// 1 1 3
// 1 3 1
// 3 1 1
// 2 3
// 3 2
// There are possible ways he can take these 5 steps

// Function Description

// Complete the stepPerms function in the editor below. It should 
// recursively calculate and return the integer number of ways 
// Davis can climb the staircase, modulo 10000000007.

// stepPerms has the following parameter(s):

//     n: an integer, the number of stairs in the staircase

// Input Format

// The first line contains a single integer, s, the number of 
// staircases in his house.
// Each of the following s lines contains a single integer, n, 
// the height of staircase i. 
// O(n) time and O(n) space
function stepPerms(n){
    if  (n < 0 ) { return 0}
    else if (n <2 ) { return 1}
    let arr = []
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;
    for (let i=3; i<n+1; i++){
        arr[i] = arr[i-1] + arr[i-2]+ arr[i-3]
    }
    return arr[n]
}
// O^3
function stepPerms(n){
    if (n <0 ){return 0}
    else if (n <1 ){return 1}
    return stepPerms(n-1) + stepPerms(n-2) + stepPerms(n-3)
}

