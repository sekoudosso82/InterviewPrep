// write a function called hasTargetSum that receive two arguments: 
//     - an array of integer
//     - a target number 
// the function should return all pairs of numbers found in the array that add up to the target number.
// hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) => [[-1, 11], [3, 7]]

function hasTargetSum(arr, num){
    let arrayToReturn = [] // array to return that content any possible pairs
    let copyInitialArray = [] // use new array to copy initial array element 
    for  ( let i = 0 ; i < arr.length ; i++){
                let c = arr[i]
                copyInitialArray.push(c)
            }
            console.log ('********  copyInitialArray    ******', copyInitialArray)
    for (let i = 0 ; i < copyInitialArray.length ; i++){
        let subArr = [] // sub array to save any pair 
        let targetNum =  copyInitialArray.pop()
        let diff = num - targetNum
        if (copyInitialArray.includes(diff)){
            subArr.push(diff)
            subArr.push(targetNum)
            arrayToReturn.push(subArr)
        }   
    }
    console.log(arrayToReturn)
    return arrayToReturn
}
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10)

// function hasTargetSum(arr, num){
//     let arrayToReturn = [] // array to return that content any possible pairs
//     let copyInitialArray = [] // use objecvt to save initial array element 
//     while ( arr.length>0){
//                 c = arr.pop()
//                 copyInitialArray.push(c)
//             }
//     for (let i = 0 ; i < copyInitialArray.length ; i++){
//         let subArr = [] // sub array to save any pair 
//         let targetNum =  copyInitialArray.pop()
//         let diff = num - targetNum
//         if (copyInitialArray.includes(diff)){
//             subArr.push(diff)
//             subArr.push(targetNum)
//             arrayToReturn.push(subArr)
//         }   
//     }
//     return arrayToReturn
// }


// function hasTargetSum(arr, num){
//     let arrayToReturn = [] // array to return that content any possible pairs
//     let ob = {} // use objecvt to save initial array element 
//     for (let i = 0 ; i < arr.length ; i++){
//         ob[arr[i]] = arr[i]
//     }
//     console.log('********** ob **********', ob)
//     for (let i = 0 ; i < arr.length ; i++){
//         let subArr = [] // sub array to save any pair 
//         let diff = num - arr[i]
//         if (ob[diff] !== undefined){
//             subArr.push(arr[i])
//             subArr.push(diff)
//             arrayToReturn.push(subArr)
//         }
//     }
//     return arrayToReturn
// }