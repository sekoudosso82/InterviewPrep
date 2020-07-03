// filter the commondWord
// have an empty object  
// split the string 
// iterate over the split string and add each element to the empty objet 
// with key value 1 of the first time
// or increment the key value by 1 if it's already in the object
// have a counter for max 
// return the bigest occurence

function s(str) {
    let commonWords = ["the", "a", "or", "an", "it", "and", "but", "is", "are", "of", "on", "to", "was", "were", "in", "that", "i", "your", "his", "their", "her", "you", "me", "all"];
    let ob = {}
    let strSplit = str.split(/[\s,]+/)

    for ( let i = 0 ; i < strSplit.length ; i++) {
        let temp = strSplit[i].toLocaleLowerCase()
        if (!commonWords.includes(temp) && temp!== ' ' && temp!== ',' && ob[temp] !== undefined){
            ob[temp] += 1 
        }else if (!commonWords.includes(temp) && temp!== ' ' && temp!== ',' && ob[temp] === undefined){
            ob[temp] = 1 
        }   
    }

    console.log ('***** new ob  *****', ob)
    let keyArr = Object.keys(ob)
    console.log ('***** new keyArr  *****', keyArr)
    let max = ob[keyArr[0]]
    console.log ('***** initial max  *****', max)
    let winWord = keyArr[0]
    console.log ('***** initial win word  *****', winWord)
     
    for (let i = 1 ; i < keyArr.length ; i++){
        if (ob[keyArr[i]]> max ){
            winWord = keyArr[i]
            max = ob[keyArr[i]]
            // winWordCount = max
        }
    }
    console.log ('***** win word is   *****', winWord)
    console.log ('***** win word count :  *****', max)

}