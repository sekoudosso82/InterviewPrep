// Task

// Complete the getLetter(s) function in the editor. It has one parameter: 
// a string, , consisting of lowercase English alphabetic letters (i.e., a through z). 
// It must return A, B, C, or D depending on the following criteria:   


function getLetter(s) {
    let letter;
    // Write your code here
    switch (true){
        case ['i','e','o','u','a'].includes(s[0]):
            letter = 'A'
            break;

        case (['b', 'c','d','f','g'].includes(s[0])):
            letter = 'B'
            break;

        case ['h', 'j','k','l','m'].includes(s[0]):
            letter = 'C'
            break;

        case (['n','p','q','r','s','t','v','w','x','y','z'].includes(s[0])):
            letter = 'D'
            break;
        default:
            return letter;
    }
    return letter 
}

// or 

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}