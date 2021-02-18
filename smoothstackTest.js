function arrayOfDigitSum(arr){
    let arrr=[]
    for (let i=0; i<arr.length; i++){
        let obKey = arr[i]
        let obKeyTOString = obKey.toString()
        let digitSum=0
        for (let digit of obKeyTOString){
            digitSum+= parseInt(digit)
        }
        arrr.push(digitSum)
    }
    return arrr
}

function sumEqualDigitArr(arr, arrr){
    let finalArray=[]
    for (let i=0; i<arrr.length; i++){
        let current = arrr[i]
        // console.log("convert to String", obKeyTOString)
        for (let j=i+1; j<arrr.length; j++){
            if (current===arrr[j]){
                finalArray.push(arr[i]+arr[j])
            }
        }
    }
    return finalArray
}

function addTwoNumOfEqualDigitSum(arr){
    let arrr = arrayOfDigitSum(arr)
    // console.log("summ digit :", arrr)
    let finalArray = sumEqualDigitArr(arr, arrr)
    // console.log("summ arr :", finalArray)
    if (finalArray.length<1){
        console.log("-1:")
        return -1
    }else {
        let max = Math.max.apply(Math, finalArray)
        console.log("max :",max)
        return max
    }
}

let a=[51, 71, 17, 42]
addTwoNumOfEqualDigitSum(a)
let b= [42, 33, 60]
addTwoNumOfEqualDigitSum(b)
let c=[51, 32, 43]
addTwoNumOfEqualDigitSum(c)

// Ruby
// def solution(a)
//   # write your code in Ruby 2.2
//   # A = [1, 3, 6, 4, 1, 2]
//   # sort A 
//   sort_array = a.sort 
//   #iterate over A and return the first positive integer thast is not present in A
//   for i in 1..(sort_array.length+1) do  
//             if !sort_array.include? i 
//                 return i
//             end
//   end
  
// end