// Harold is a kidnapper who wrote a ransom note, but now he 
// is worried it will be traced back to him through his 
// handwriting. He found a magazine and wants to know if he can 
// cut out whole words from it and use them to create an 
// untraceable replica of his ransom note. The words in his 
// note are case-sensitive and he must use only whole words 
// available in the magazine. He cannot use substrings or 
// concatenation to create the words he needs.

// Given the words in the magazine and the words in the 
// ransom note, print Yes if he can replicate his ransom note 
// exactly using whole words from the magazine; otherwise, 
// print No.

// For example, the note is "Attack at dawn". The magazine 
// contains only "attack at dawn". The magazine has all the 
// right words, but there's a case mismatch. The answer is No. 

function checkMagazine(magazine, note) {
    let ob   = {}
    let result = 'Yes'
    // add up magazine string
    for (let i = 0 ; i < magazine.length; i++){
        if (ob[magazine[i]] !== undefined){ ob[magazine[i]] += 1}
        else if (ob[magazine[i]] === undefined){ ob[magazine[i]] = 1 }
    }
    for (let i = 0 ; i < note.length; i++){
        if (ob[note[i]] !== undefined){ ob[note[i]] -= 1
            if (ob[note[i]] < 0){ result =  'No' }
        }
        else if (ob[note[i]] === undefined){ result = 'No' }
    }
    console.log(result)
}