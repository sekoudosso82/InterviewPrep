function test(arr1, arr2) {
    // Students = [“a”, ”c”, ”d”, ”e”, ”f”, ”g”, ”h”, ”i”]
    // Marks = [90,100,80,70,60,50,80,40]

    // create sub arrays of two element as obj of key pair 
    merge1 = []
    for (let i =0; i < arr1.length; i++){
        templateArr = []
        templateArr.push(arr1[i])
        templateArr.push(arr2[i])
        merge1.push(templateArr)
    }
    // merge1 = [["a", 90],["b", 100], ... ]
    // sort 
    merge1.sort(function(x, y) {return (x[1] - y[1]) }  )
    // select the first 3 sub-array
    result = merge1.sclice(0,3)
    return result
}
Students = [“a”, ”c”, ”d”, ”e”, ”f”, ”g”, ”h”, ”i”]
Marks = [90,100,80,70,60,50,80,40]
console.log(test(Students, Marks))