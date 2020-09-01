function monaie(arr, billet){

    return possibleMonaie(arr, billet)
}

function possibleMonaie(arr, billet, index=0, ob={}){
    if (billet === 0){
        console.log("number of ways: ", 1)
        return 1;
    }
    if((index > arr.length)||(index===arr.length)){
        console.log("number of ways: ", 0)
        return 0
    }
    let str=`${billet} '-' ${index}`
    if (ob[str] !== undefined){
        console.log("number of ways: ", ob[str])
        return ob[str]
    }
    let amountWithCoin=0
    let way=0
    while(amountWithCoin<billet || amountWithCoin===billet){
        let remaining=billet-amountWithCoin
        way += possibleMonaie(arr,remaining,index+1, ob)
        amountWithCoin += arr[index]
    }
    ob[str]  = way
    console.log("number of ways: ", way)
    return way
}

// let coins = [25, 10, 5, 1]
// let bill = 27
// monaie(coins, bill)

let coins2 = [50, 25, 10, 5, 1]
let bill2 = 79
monaie(coins2, bill2)