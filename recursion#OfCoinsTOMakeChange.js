function monaie(coins, money){
    return possibleMonaie(coins, money, 0)
}

function possibleMonaie(coins, money, index){
    if (money === 0){
        // console.log(" Number of ways: ", 1)
        return 1;
    }
    if((index > coins.length)||(index===coins.length)){
        // console.log("number of ways: ", 0)
        return 0
    }
    
    let amountWithCoin=0
    let way=0
    while(amountWithCoin<money || amountWithCoin===money){
        let remaining=money-amountWithCoin
        way += possibleMonaie(coins,remaining,index+1)
        amountWithCoin += coins[index]
    }
    
    // console.log("number of ways: ", way)
    return way
}

// let coins = [25, 10, 5, 1]
// let bill = 27
// monaie(coins, bill)

let coins2 = [50, 25, 10, 5, 1]
let bill2 = 79
console.log("recu: ", monaie(coins2, bill2))