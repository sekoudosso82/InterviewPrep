function ff(n){
    let initial = [0,1,1]
    for (let i = 2; i < n ; i++){
        let sum = initial[i] + initial[i-1]
        initial.push(sum)
  }
// let final = 0
// for (let i = 0; i < initial.length ; i++){
//      final += initial[i] 
        
// }
console.log(initial.length)
console.log(initial)
return initial[initial.length-1]
}