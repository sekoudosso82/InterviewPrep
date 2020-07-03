function minimumBribes(q) {
    let swaps = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3){
            console.log('Too chaotic');
            return 
        }
        if (q[i] > i+1){
            swaps += (q[i]-(i+1));
        } else {
            if (min > q[i]){
                min = q[i];
            } else if (q[i] != min){
                swaps++;
            }
        }
    }
    console.log(swaps);

    //[2, 1, 5, 3, 4]  [2, 5, 1, 3, 4] [1, 2, 5, 3, 7, 8, 6, 4]
    // let result = 0
    // let diff ; 
    // for (let i=0; i< q.length; i++){
    //     diff = q[i] - (q.indexOf(q[i]) + 1)
    //     if (diff > 2 ){
    //         console.log('Too chaotic')
    //         return
    //     }
    //     if (diff >0 && diff <= 2){
    //         result += diff
    //     }
    //     if (diff === -1 && q[i] > q[i+1] ){
    //         result += 1
    //     }
    // }
    // console.log(result)
}