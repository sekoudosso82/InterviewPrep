// Task

// Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.  

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) return 'YES'
    if (a===0) throw Error ("Zero Error")
    if (a < 0 ) throw Error ("Negative Error")   
}


function main() {
const n = +(readLine());

for (let i = 0; i < n; i++) {
    const a = +(readLine());
  
    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}
}