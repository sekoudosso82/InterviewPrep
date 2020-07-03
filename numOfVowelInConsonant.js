// find the number of vowels and consonant in a string

// create a method that takes a string input and print out the number of vowels
// and the number of consonant in that string

function s (str) {
    // collect all vowel in an object or an array
    let arrv = ['e','u','i','o','a', 'y']
    // have a counter for vowel
    let vowelCounter = 0
    // have a counter for consonant
    let consonantCounter = 0
    // iterate over the string for each element check if the element is in our object
    // if yes  increment vowel counter by 1
    // else increment consonant counter by 1
    let sSplit = str.split('')
    for (let i = 0 ; i < sSplit.length ; i++){
        if (arrv.includes(sSplit[i].toLocaleLowerCase())){
            vowelCounter += 1
        }
        else if(!arrv.includes(sSplit[i].toLocaleLowerCase()) && sSplit[i] !== ' ') {consonantCounter += 1 }
    }

    console.log('*****  vowels in this string : ****', vowelCounter)
    console.log('*****  consonants in this string : ****', consonantCounter)
}