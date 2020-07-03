// lengthF = [10,20, 30, 40, 45]
// lengthFf = [50,20, 30, 40, 50]
// tim = 100
arr = [45,20, 30, 40, 45]
function s(tim){
    // copy arr elements into the empty object
    var ob = {}
    for (let i = 0 ; i < arr.length ; i++){
        ob[arr[i]] = arr[i]}
        console.log(ob)
    for (let i = 0 ; i < arr.length ; i++){
        var diff = tim - arr[i]
        console.log('************    diff    **************',diff)
        // if ( ob[diff] !== undefined && ob[diff] !== Object.keys(ob)[i]){
            // check if ob contain diff and if the index are different
        if ( ob[diff] !== undefined && i !== Object.keys(ob).indexOf(`${diff}`)){
            // console.log('**************i    *********', i)
            // console.log('************** ob[diff]    *********', ob[diff])
            // console.log('**************Object.keys(ob).indexOf[diff]    *********', Object.keys(ob).indexOf(`${diff}`))
            return true
        }  
        // ob[diff] =  diff
    }
    return false
    
}