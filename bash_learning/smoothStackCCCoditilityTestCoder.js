function solution(n){
    for ( let i=1; i<n+1; i++)
    if (i%2===0){
        console.log("Codility")
    }else if (i%3===0){
        console.log("Test")
    }else if (i%5===0){
        console.log("Coders")
    }else{
        console.log(i)
    }


}
solution(10)