function Person(initialAge){
    // Add some more code to run some checks on initialAge
    this.initialAge = initialAge
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
   if (this.initialAge < 0){
       this.initialAge = 0
       console.log('Age is not valid, setting age to 0.')
    }
    if (this.initialAge < 13){
       console.log('You are young.')
    }else if (this.initialAge >= 13 && this.initialAge < 18){
        console.log('You are a teenager.')
    } else if (this.initialAge >= 18){
        console.log('You are old.')
    }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          this.initialAge += 1

   };
}