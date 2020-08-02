// Write a simple function (less than 160 characters) 
// that returns a boolean indicating whether or not a string 
// is a palindrome.

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

  // second solution
function palindrome(string, valid = false){
    let alphabetString = ''
	if (valid === false){
        const arr = string.toLowerCase().split('')
        // iterate over the array 
        for (let i = 0 ; i < arr.length ; i++){
            if (arr[i] >= 'a' && arr[i] <= 'z'){
                alphabetString += arr[i]
            }
        }
  }
  if (alphabetString.length === 0 || alphabetString.length === 1){
    console.log('true')
    return true
  }
  if (alphabetString[0] !== alphabetString[alphabetString.length-1]){
    console.log('false')
    return false
  }
  
  let x = alphabetString.slice(1)
  x= x.slice(x.length-1, x.length)
  palindrome(x)
  
}

palindrome("level");                   // logs 'true'
palindrome("levels");                  // logs 'false'
palindrome("A car, a man, a maraca"); // logs 'true'
// to run control+option+N
