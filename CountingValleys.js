function countingValleys(n, s) {
    var start = 0 
    let maxValley = 0
    let sSplit = s.split('')
    for (let i = 0 ; i < n ; i++){
        if (sSplit[i] === 'U') {
            start += 1
        }
        else { start -= 1}
        if (sSplit[i] === 'U' &&  start === 0)
        maxValley += 1
    }
    return maxValley
}