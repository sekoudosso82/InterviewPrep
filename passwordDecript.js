function solution (s){
    let  finalArr = []

    let lA ='qwertyuioplkjhgfdsazxcvbnm'
    let uP ='QWERTYUIOPASDFGHJKLZXCVBNM'
    let digit = '1234567890'
    for (let i = 0 ; i<s.length; i++){
        let temp = s.charAt(i)
        if (digit.indexOf(temp) !== -1){
                console.log("number")
                finalArr.push(0) 
                finalArr.unshift(s.charAt(i))
        }else if(s.charAt(i+1) && lA.indexOf(s.charAt(i)) !== -1 && uP.indexOf(s.charAt(i+1)) !== -1){
            finalArr.push(s.charAt(i+1))
            finalArr.push(s.charAt(i))
            finalArr.push('*')
            i++
        } else {
                finalArr.push(s.charAt(i))
        }   
    }
    console.log(finalArr.join(''))
}
let str = "aBcd2m"
solution (str)

// console.log(s.charAt(i))
// if (lA.indexOf((s.charAt(i))) !== -1 && uP.indexOf((s.charAt(i))) !== -1){
//     console.log('char')
// }else if (digit.indexOf((s.charAt(i))) !== -1){
//     console.log("number")
//     finalArr.push(0) 
//     finalArr.unshift(s.charAt(i))
    

// }

// if (!Number.isNaN(s.charAt(i))){
//     let tempChar = s.charAt(i)
//     finalArr.push(0)
//     finalArr.unshift(tempChar)    
// }
// else 
// if (s.charAt(i)===s.charAt(i).toLowerCase() && s.charAt(i+1)===s.charAt(i+1).toUpperCase()){
//     let xxx = '*'
//     finalArr.push(s.charAt(i+1))
//     finalArr.push(s.charAt(i))
//     finalArr.push(xxx)
//     i+=1
//     console.log("current s", s)
// } 
// else {
//     finalArr.push(s.charAt(i))
// }