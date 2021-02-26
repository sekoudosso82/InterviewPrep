// Students = ["a", "c", "d", "e", "f", "g", "h", "i"]
// Marks = [90,100,80,70,60,50,80,40]
// return the 3 first students with high score 
function test(arr1, arr2) {

    // create sub arrays of two element as obj of key pair
    let merge1 = []
    for (let i =0; i < arr1.length; i++){
        templateArr = []
        templateArr.push(arr1[i])
        templateArr.push(arr2[i])
        merge1.push(templateArr)
    }
    // console.log(merge1)
    // sort
    merge1.sort(function(x, y) {return (x[1] - y[1]) }  )
    // console.log(merge1)

    // select the last 3 element of merge1
    let result = merge1.slice(-3)
    console.log(result)
    return result
}
let Students = ["a", "c", "d", "e", "f", "g", "h", "i"]
let Marks = [90,100,80,70,60,50,80,40]
console.log(test(Students, Marks))