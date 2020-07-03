function solution(blocks) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let  max = blocks[0]
    
    let index = 1
    
    for (let i = 1 ; i < blocks.length ; i++ ) {
        
        if ( blocks[i] > max ){
            max =  blocks[i]
            index =  blocks.indexOf( blocks[i])
        }
        
    }
    
    return index
    
}