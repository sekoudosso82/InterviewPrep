function matchingStrings(strings, queries) {
    // let s = ['aba','baba','aba','xzxb']
    // let q = ['aba','xzxb','ab']
    var ob = {}
    for (let i = 0 ; i < strings.length ; i++){
        if (ob[strings[i]] === undefined){
            ob[strings[i]] = 1
        } else { ob[strings[i]] += 1}
    }
    var result = []
    for (let i = 0 ; i < queries.length ; i++){

        ob[queries[i]] ? result.push(ob[queries[i]]) : result.push(0)
    }
    

    // or very short

    // let result = [];
    // queries.forEach(query => {
    //     result.push(strings.filter(string => (string === query)).length);
    // })
    return result;
}