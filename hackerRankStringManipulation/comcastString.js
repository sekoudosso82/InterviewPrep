function gameWinner(colors) {
    let wendyCount = 0
    let bobCount = 0
    let n = colors.length
    for (let i=0; i<n; i++){
       if(colors.indexOf('www') !== -1){
            colors.replace("www", "ww")
            wendyCount++
       }
    
       if(colors.indexOf('bbb') !== -1){
            colors.replace("bbb", "bb");
            bobCount++
       }
    }
    // wendyCount>bobCount? 'wendy':'bob'
    if (wendyCount>bobCount){
        return 'wendy'
    }else if(wendyCount<bobCount){
        return 'bob'
    }else{
        return
    }
}

gameWinner('wwwbbbbwww')
