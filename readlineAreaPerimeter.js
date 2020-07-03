function main() {
    // const PI = 3.14
    const PI = Math.PI

    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    // let r = prompt("What's the radius of the cicle? ");
    let r = readLine();

    let area = PI * r * r

    let perimeter = 2* r * PI

    
    // Print the area of the circle:
    console.log('Print the area of the circle:', area)
    
    // Print the perimeter of the circle:
    console.log('Print the perimeter of the circle:', perimeter)  

}