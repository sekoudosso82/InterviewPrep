
function countStrings(s) {
    
    let rotatedArr = s.split('')   
    let count = 0 
    for (let i=0; i< rotatedArr.length; i++){
            let temp = rotatedArr.shift()
            rotatedArr.push(temp)
                if(rotatedArr[0]===rotatedArr[rotatedArr.length-1]){count += 1}
    }
    console.log("count",count)
    return count
 }
 // helper 

 function helper(arr){
    let temp = arr.shift()
    arr.push(temp)
    return arr
 }

let st='accbb'
countStrings(st)