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
