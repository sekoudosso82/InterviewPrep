// Movies on Flight

// You are on a flight and wanna watch two movies during this flight.
// You are given int[] movie_duration which includes all the movie durations.
// You are also given the duration of the flight which is d in minutes.
// Now, you need to pick two movies and the total duration of the two movies 
// is less than or equal to (d - 30min).
// Find the pair of movies with the longest total duration. If multiple found, 
// return the pair with the longest movie.

// e.g.
// Input
// movie_duration: [90, 85, 75, 60, 120, 150, 125]
// d: 250

// Output from aonecode.com
// [90, 125]
// 90min + 125min = 215 is the maximum number within 220 (250min - 30min)

function movieOnFlight(arr, d){
    let maxTime = d-30
    let tempArr = []
    for (let i = 0 ; i<arr.length-1; i++){
        for (let j = i+1 ; j<arr.length; j++){
            let subArr = []
            if ((arr[i]+arr[j])<maxTime ||(arr[i]+arr[j])===maxTime){
                subArr.push(arr[i])
                subArr.push(arr[j])
                subArr.push(arr[i]+arr[j])
                tempArr.push(subArr)
            }
        }
    }
    // console.log("tempArr: ", tempArr)
    let maxSubArr = tempArr[0][2]
    let index = 0
    // console.log('temp max', maxSubArr)
    for (let i = 0 ; i<tempArr.length; i++){
        if (tempArr[i][2]>maxSubArr){
            maxSubArr = tempArr[i][2]
            index = i
        }
    }
    let pair = []
    pair.push(tempArr[index][0])
    pair.push(tempArr[index][1])
    console.log("solution pair: ",pair)
    return pair
}
let movie_duration = [90, 85, 75, 60, 120, 150, 125]
movieOnFlight(movie_duration, 250)