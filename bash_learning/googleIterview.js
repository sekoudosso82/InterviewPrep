// given 09/02/2020 <username>    first second third
// return username and the number of word exclude date and user name

function solution(line){
    // console.log(line)
    let s1 = line.split("<") // first split from "<"
    console.log(s1)
    let s2 = s1[1].split(">") // second split from ">"
    console.log(s2)
    let userName=s2[0]
    let s3=s2[1]
    s3 = s2[1].trim().split(" ") // trim to remove extrat space and split
    console.log(s3) // => [ 'first', 'second', 'third' ]
    console.log(s3.length) // => 3
    let counWord = s3.length

    console.log(userName, counWord)
    return(s2[0], s3.length)
}

solution("09/02/2020 <username>    first second third")

// given a list of line return each username and 
// the number of word in each line exclude date and username

// arr = ["09/02/2020 <Alex>    first second third", => "Alex", 1
//           "09/02/2020 <Max>    first second ", "Max", 2
//           "09/02/2020 <Jack>    first second third", "Jack", 3
    // ]

    function solution2(arr){
        let userName= ''
        let countWord = ''
        let returnArr=[]
        for (let i=0; i< arr.length; i++){
            let s1 = arr[i].split("<")
            // console.log(s1)
            let s2 = s1[1].split(">") // second split from ">"
            userName=s2[0]
            let s3=s2[1]
            s3 = s2[1].trim().split(" ") // trim to remove extrat space and split
            // console.log(s3) // => [ 'first', 'second', 'third' ]
            // console.log(s3.length) // => 3
            countWord = s3.length
            // console.log(userName, countWord)
            let result = [userName, countWord]
            returnArr.push(result)

        }
    console.log(returnArr)
    return(returnArr)
    }

    let arrExample = ["09/02/2020 <Alex>    first second third", 
               "09/02/2020 <Max>    first second ",
               "09/02/2020 <Jack>    first second third"
              ]
    solution2(arrExample)

