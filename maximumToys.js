// Complete the maximumToys function below.
function maximumToys(prices, k) {
    // 7 50
    // 1 12 5 111 200 1000 10
    let newArr = []
    for (let i = 0 ; i < prices.length; i++){
        if (prices[i] < k){
            newArr.push(prices[i])
        }
    }
    newArr = newArr.sort(function(a, b){return a - b})
    let sum = 0 
    let counter = 0
    
    for (let i = 0 ; i < newArr.length; i++){
        if (sum+newArr[i] < k){
            sum += newArr[i]
            counter+=1
        }
    }
    
    return counter

}