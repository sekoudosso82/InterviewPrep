// Complete the maximumToys function below.
function maximumToys(prices, k) {
    prices = prices.sort((a, b) => a-b)
    let max = 0
    let counter = 0
    for (let j=0; j < prices.length; j++) {
            if ( (counter+prices[j]) < (k+1) ) {
                counter+=prices[j]
                max+=1
            }
    }
    return max
}
