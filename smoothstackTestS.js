function solution(A) {
    var n = A.length;
    var result = 0;
    for (let i = 0; i < n ; i++) {
        if (A[i] == A[i + 1])
            result = result + 1;
    }
    let max = 0 
    let r = 0;
    for (let i = 0; i < n; i++) {
        let aCopy = A
        // let r = 0;
        aCopy[i]=1-aCopy[i]
        for (let j = 0; j < n ; j++) {
            if (aCopy[j] == aCopy[j + 1]){
                r = r + 1;
            }
        }
        if (r > max ){
            max = r;
        }  
    }
    return Math.max(r, result);
}
// r = Math.max(r, count);
console.log( (solution([1,1,0,1,0,0])) )