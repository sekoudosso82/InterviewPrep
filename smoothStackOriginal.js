function solution(A) {
    var n = A.length;
    var result = 0;
    var i;
    for (i = 0; i < n-1 ; i++) {
        if (A[i] == A[i + 1])
            result = result + 1;
    }
    // console.log(result)
    let r = 0 
    for (i = 0; i < n; i++) {
        console.log("i: ",i)
        var count = 0;
        if (i>0){
            if (A[i-1] == A[i])
                   count = count - 1
            else
                count = count + 1;  
        }
        console.log("1st count: " + count )
        if (i < n - 1 ){
            if (A[i+1] != A[i])
                count = count + 1;
            else 
                count = count - 1;  
        }
        console.log("2nd count: " + count )
        r = Math.max(r, count);
        console.log("final r: " + r )
    }
        return result + r 
}
// console.log( (solution([1,1,0,1,0,0])) )
console.log( (solution([1,0])) )