function activityNotifications(expenditure, d) {
    // Number of notifications
   let n = 0

   // Set midpoints for median calculation
   let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ]
   let m1, m2, m

   // Initialize count sorted subarray
   let cs = new Array(201).fill(0)
   for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++

   // Iterate through expenditures
   for (let i = d, l = expenditure.length; i < l; i++) {

       // Find median
       for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
       for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
       let m = (m1 + m2) / 2

       // Check if notification is given
       if (expenditure[i] >= m * 2) n++

       // Replace subarray elements
       cs[expenditure[i-d]]--
       cs[expenditure[i]]++
   }

   return n
   // test case expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5], d = 5
   // let n =  expenditure.length
   // let totalNotification = 0 
   // let diff = n - d
   // for (let i = 0 ; i < diff ; i++){
   //     let temp = expenditure.slice(i, d+i).sort(function(a, b){return a - b});
   //     let subArr = []
   //     for (let i = 1; i < temp.length; i++) { 
   //         if (temp[i-1] !== temp[i]) {
   //         subArr.push(temp[i]);
   //         }
   //     }
   //     let med;
   //     let idxMedian 
   //     if (subArr.length %2 !== 0) {
   //             idxMedian = Math.floor(subArr.length/2)
   //             med = subArr[idxMedian]
   //     }else if (subArr.length %2 === 0) {
   //             idxMedian = (subArr.length/2)
   //             med = Math.floor((subArr[idxMedian-1] + subArr[idxMedian])/2)
   //     }
   //     if (med*2 >= expenditure[d+i]){
   //                 totalNotification += 1
   //     }
   //     // }
   // }

   // return totalNotification


}