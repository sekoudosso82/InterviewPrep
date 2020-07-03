// John works at a clothing store. He has a large pile of socks that he must pair 
// by color for sale. Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar = [1,2,1,2,1,3,2] . 
// There is one pair of color 1 and one of color 2 . 
// There are three odd socks left, one of each color. The number of pairs is 2. 

function sockMerchant(n, ar) {
    // [1,2,2,1,1,3,5,1,2]
    var ob = {} 
    for (let i = 0 ; i < n ; i++){
        if (ob[ar[i]] === undefined){
            ob[ar[i]] = 1
        }
        else {ob[ar[i]] += 1}
    }
    // console.log(ob)
    var counter = 0 
    var newArr = Object.values(ob)
    // console.log(newArr)
    for (let i = 0 ; i < newArr.length ; i++){
        counter = counter + parseInt(newArr[i] / 2)
    }
    // console.log('number of pair', counter)
    return counter
}
