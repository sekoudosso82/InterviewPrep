// K Nearest Post Offices

// Find the k post offices located closest to you, given your 
// location and a list of locations of all post offices available.
// Locations are given in 2D coordinates in [X, Y], where X and 
// Y are integers.
// Euclidean distance is applied to find the distance between 
// you and a post office.
// Assume your location is [m, n] and the location of a post 
// office is [p, q], the Euclidean distance between the office 
// and you is SquareRoot((m - p) * (m - p) + (n - q) * (n - q)).
// K is a positive integer much smaller than the given number 
// of post offices.

// e.g.
// Input
// you: [0, 0]
// post_offices: [[-16, 5], [-1, 2], 
                //   [4, 3],   [10, -2], 
                //   [0, 3],   [-5, -9]]
// k = 3

// Output 
// [[-1, 2], [0, 3], [4, 3]] 

function solution (arr, myCoordinate, k){
    let arrOfSolution = []
    let ob = {}

    for (i=0; i<arr.length; i++){
        console.log('arr[i]', arr[i])
        let dist = Math.sqrt((myCoordinate[0]-arr[i][0])*(myCoordinate[0]-arr[i][0]) + 
                            (myCoordinate[1]-arr[i][1])*(myCoordinate[1]-arr[i][1]))
        ob[arr[i]] = dist
    }
    let arrValue = Object.values(ob)
    arrValue = arrValue.sort(function(a, b){return a-b});
    console.log("sorted values array", arrValue)
    for (i=0; i<k; i++){
        let temp = getKeyByValue(ob, arrValue[i])
        arrOfSolution.push(temp)
    }
    console.log(arrOfSolution)
    return arrOfSolution
}

function getKeyByValue(object, value) { 
    console.log(Object.keys(object).find(key => object[key] === value));
    let finalSub = Object.keys(object).find(key => object[key] === value);
    finalSub.trim()
    finalSub = finalSub.split(",")
    console.log( "finalSub.split(')",finalSub )
    // return Object.keys(object).find(key => object[key] === value); 
    return [parseInt(finalSub[0]), parseInt(finalSub[1])]
} 

// let exampleObject = { 
//     key1: 'Geeks', 
//     key2: 100, 
//     key3: 'Javascript' 
// }; 

// getKeyByValue(exampleObject, 100)

let you = [0, 0]
let post_offices = [[-16, 5], [-1, 2], 
                  [4, 3],   [10, -2], 
                  [0, 3],   [-5, -9]]
let k = 3

solution(post_offices, you, k)
