function solution(n){
    if (n===0){ return 0}
    if (n===1){ 
      return 1
    }else{
      return solution(n-2) + solution(n-1)
    }
}
// n = 	  0 	1 	2 	3 	4 	5 	6 	7 	8 	9 	10 	11 	12 	13 	14 	...
// xn = 	0 	1 	1 	2 	3 	5 	8 	13 	21 	34 	55 	89 	144 	233 	377 	...
let result = solution(7)
console.log(result)