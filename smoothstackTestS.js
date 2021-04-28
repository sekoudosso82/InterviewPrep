function solution(A) {
    var n = A.length-1;
    var result = 0;
    for (let i = 0; i < n ; i++) {
        if (A[i] == A[i + 1])
            result = result + 1;
    }
    // return result 
    let max = 0 
    for (let i = 0; i < n; i++) {
        let r = 0;
        let aCopy = A
        // console.log( aCopy )
        aCopy[i]=1-aCopy[i]
        // console.log( aCopy )
        for (let j = 0; j < n ; j++) {
            if (aCopy[j] == aCopy[j + 1]){
                r += 1;
            }
        }
        if (r > max ){
            max = r;
        } 
        aCopy[i]==0? aCopy[i]=1:aCopy[i]=0
        // console.log( aCopy )


    }
    return Math.max(max, result);
}
// r = Math.max(r, count);
console.log( (solution([1,1,0,1,0,0])) )