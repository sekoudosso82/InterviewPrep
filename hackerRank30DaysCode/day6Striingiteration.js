function processData(input) {
    // inputString = inputString.replace(/\s*$/, '')
    //     .split('\n')
    //     .map(str => str.replace(/\s*$/, ''));
    let s = input.split('\n')
    for (let i = 1 ; i < s.length ; i++){
        let current = s[i]
        let evenC =''
        let oddC = ''
            for (let j = 0 ; j < current.length ; j++){
                if (j%2===0){
                    evenC += current.charAt(j)
                }else{
                    oddC += current.charAt(j)
                }
            }
        console.log(`${evenC} ${oddC}`)
    }
} 
