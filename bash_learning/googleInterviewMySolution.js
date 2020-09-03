
// Line format:
// timestamp <username> usertext 

// Sample lines:
// [10:30] <john> hello there world
// Wed 05/31 @ server01 <martha> hello!hello! 

// 1) Find username and count words in a line
// String line -> String username, int wordCount
// Example: “[10:30]   <john>   hello there world  ” -> “john”, 3

function usernameCountWord(str){
    let username='' // userName
    let wordCount='' // count number of word in input string
    let strSplit = str.split("<") // first split
    let strSplit1= strSplit[1] // "john> hello there”"
    let strSplit2= strSplit1.split(">").replace(/ /g,'')   // ['john','hellothereworld'] //.trim()
    let strSplit3= srtSplit2[1].split(" ")// ['john','hello', 'there']
    username=strSplit2[0]
    wordCount=strSplit3.length

    return (username, wordCount)
}


2) Count words per user in the file
String[] lines -> a local variable

Example: “[10:30]   <john>   hello   ” -> “john”, 1
Example: “[10:30]   <john>   hello there   ” -> “john”, 2
Example: “[10:30]   <alice>   hello there world  ” -> “alice”, 3

john, 3
alice, 3

function usernameCountWord(arr){
    let username='' // userName
    let wordCOunt='' // count number of word in input string
    for (let i=0 ; i, arr.length; i++){
        let currentLine = arr[i]
        let strSplit = str.split("<") // first split
        let strSplit1= strSplit[1] // "john> hello there”"
        let strSplit2= strSplit1.split(">")   // "john','hellothereworld" //.trim()
        let strSplit3 = strSplit2[1].trim()
        let strSplit3 = strSplit2[1].split(" ") // ['hello', 'there', 'world']
        username=strSplit2[0]
        wordCOunt=strSplit3.length
        return(username, wordCOunt)
    }
}