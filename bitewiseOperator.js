// Task

// We define S to be a sequence of distinct sequential integers from 1 to n; 
// in other words, S= {1,2,3,...,n} . We want to know the maximum bitwise AND value of any 
// two integers, a and b (where a<b), in sequence S that is also less than a given 
// integer, K.


function getMaxLessThanK(n, k) {
    let max_anb = 0;
    for (let b = n; b > 0; b--) {
        for (let a = b-1; a > 0; a--) {
            if ((a & b) < k && (a & b) > max_anb){
                max_anb = (a&b);
            }
        }
    }
    return max_anb;
}

// Complete the function in the editor so that given n and k, 
// it returns the maximum a&b< b,