// Task
// Your local library needs your help! Given the expected 
// and actual return dates for a library book, create a 
// program that calculates the fine (if any). 
// The fee structure is as follows:

// 1. If the book is returned on or before the expected 
// return date, no fine will be charged (i.e.: fine = 0).
// 2. If the book is returned after the expected return day 
// but still within the same calendar month and year as the 
// expected return date,
// fine = 15 Hackos * (the number of days late).

// 2. If the book is returned after the expected return 
// month but still within the same calendar year as the 
// expected return date, 
// the fine = 500 Hackos * (the number of months late).

// 4. If the book is returned after the calendar year in 
// which it was expected, there is a fixed fine of 10000 Hackos.

// Input Format

// The first line contains 3 space-separated integers 
// denoting the respective day, month, and year on which 
// the book was actually returned.

// The second line contains space-separated integers 
// denoting the respective day, month, and year on which 
// the book was expected to be returned (due date).

function processData(input) {
    //Enter your code here
    let s = input.split(/\r?\n/)
    // console.log(input.split(/\r?\n/))
    let s1 = s[0].split(' ')
    // console.log(s1)
    let s2 = s[1].split(' ')
    // console.log(s2)
    // console.log(parseInt(s1[2]))
    if (parseInt(s1[2]) > parseInt(s2[2])){
        console.log(10000)
    }else  if (parseInt(s1[2]) === parseInt(s2[2])&
               parseInt(s1[1]) > parseInt(s2[1])){
            console.log(500 * (parseInt(s1[1]) - parseInt(s2[1])) )
    }else if ( parseInt(s1[2]) === parseInt(s2[2])&
               parseInt(s1[1]) === parseInt(s2[1])&
               parseInt(s1[0]) > parseInt(s2[0])){
            console.log( 15 * (parseInt(s1[0]) - parseInt(s2[0])) )
    }else{
        console.log(0)
    }
} 