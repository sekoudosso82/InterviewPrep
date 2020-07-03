// Task
// Given n names and phone numbers, assemble a phone book that maps 
// friends' names to their respective phone numbers. You will then 
// be given an unknown number of names to query your phone book for. 
// For each name queried, print the associated entry from your phone 
// book on a new line in the form name=phoneNumber; 
// if an entry for name is not found, print Not found instead.

// Note: Your phone book should be a Dictionary/Map/HashMap data structure. 

function processData(input) {
    // console.log(input.split('\n'))
    let inputS = input.split('\n')
    let ob = {}
    // console.log(input.split('\n').length)
    // console.log(input.split('\n')[1].split(' '))
    for (let i = 1 ; i < inputS.length ; i++){
        let elementS = inputS[i].split(' ')
                if (elementS.length > 1){
                    ob[elementS[0]]= elementS[1]
                }else if (elementS.length === 1 && ob[elementS[0]] !== undefined){
                    console.log(`${elementS[0]}=${ob[elementS[0]]}`)
                }
                if (elementS.length === 1 && ob[elementS[0]] === undefined){
                    console.log("Not found")
                }
    }

} 