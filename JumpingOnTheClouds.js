// Emma is playing a new mobile game that starts with 
// consecutively numbered clouds. Some of the clouds are 
// thunderheads and others are cumulus. She can jump on 
// any cumulus cloud having a number that is equal to the 
// number of the current cloud plus 1 or 2 . She must avoid the 
// thunderheads. Determine the minimum number of jumps it 
// will take Emma to jump from her starting postion to the 
// last cloud. It is always possible to win the game. 

function jumpingOnClouds(c) {
    // [0,0,0,0,1,0]
    let counter = 0 
    let i = 0
    let l = c.length
    while ( i < l-1 ){
        if ( c[i+1] === 0 && c[i+2] === 0){
            counter += 1
            i += 2
        } else if ( c[i+1] === 0 && c[i+2] !== 0){
            counter += 1
            i += 1
        } else if ( c[i+1] !== 0 && c[i+2] === 0){
            counter += 1
            i += 2
        }
    }
    // console.log(c)
    return counter
}
