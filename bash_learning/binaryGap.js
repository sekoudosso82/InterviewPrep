function solution(n){
    let nc = n.toString(2);
    console.log(nc)
    let maxArr = []  //array of max sum found
    // for (let i = 1 ; i < nc.length ; i++){
        let subSum = 0
        for (let j = 0 ; j < nc.length ; j++){ 
            
            if (nc[j] === "0" ){
                subSum += 1    
            } 
            else{
                maxArr.push(subSum)
                subSum=0
            }
        // }
    }
    // search for max sum  
    max = Math.max.apply(Math, maxArr);
    console.log(Math.max.apply(Math, maxArr));
    return max

}
// // solution(1041) // => 5
// solution(32)

// function solution( N ) {
//     let str = N.toString( 2 ), 
//         zeroCount = 0,
//         result = 0;
 
//     for ( let digit of str ) {
//         if ( digit === '0' ) {
//             zeroCount += 1;
//         } else /* if ( digit === '1' ) */ {
//             result = Math.max( result, zeroCount );
//             zeroCount = 0;
//         }
//     }
//     console.log(result)
//     return result;
// }
 solution(32) // => 0
 solution(1041) // => 5