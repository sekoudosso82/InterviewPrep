class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id,  scores){
        super(firstName, lastName, id)
        // this.firstName = firstName
        // this.lastName = lastName
        // this.id = id
        this.scores = scores

    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here

    calculate(){
        this.result = this.scores.reduce(function(a, b){ return a + b;}, 0);
       
        // console.log('this.result',this.result)
        // console.log('this.scores 0: ',this.scores[0])

        let grade = this.result / this.scores.length
        if (grade >= 90 && grade <= 100){
            return "O"
        }else if (grade >= 80 && grade <90){
            return "E"
        }else if (grade >= 70 && grade <80){
            return "A"
        }else if (grade >= 55 && grade <70){
            return "P"
        }else if (grade >= 40 && grade <55){
            return "D"
        }else //if (grade <40){
            {return "T"}
    }
    
}