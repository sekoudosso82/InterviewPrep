let click5 = document.getElementById('btn5');
    click5.addEventListener('click', function(event) {
                let rotatedArr = [1, 2, 3, 6, 9, 8, 7, 4]
                console.log('btn 5 was clicked')
                let rotate = rotatedArr.pop()
                rotatedArr.unshift(rotate);
                console.log('arr after 1 click', rotatedArr)
                let stableArr = [1, 2, 3, 6, 9, 8, 7, 4]
                console.log('stable after 1 click', stableArr)
                     
            for (let i = 0; i < stableArr.length; i++){
                  document.getElementById('btn'+stableArr[i]).innerHTML = rotatedArr[i]
                }
                          
    })
     

// let click5 = document.getElementById('btn5');
//     click5.onclick = function() {
//                 let rotatedArr = [1, 2, 3, 6, 9, 8, 7, 4]
//                 console.log('btn 5 was clicked')
//                 let rotate = rotatedArr.pop()
//                 rotatedArr.unshift(rotate);
//                 console.log('arr after 1 click', rotatedArr)
//                 let stableArr = [1, 2, 3, 6, 9, 8, 7, 4]
//                 console.log('stable after 1 click', stableArr)
                     
//             for (let i = 0; i < stableArr.length; i++){
//                   document.getElementById('btn'+stableArr[i]).innerText = rotatedArr[i]
//                 }
                          
//     }
