// Task

// Given a date string, dateString , in the format MM/DD/YYYY, 
// find and return the day name for that date. Each day name must be one of the following
//  strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. 
//  For example, the day name for the date 12/07/2016 is Wednesday.

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    
    // get the day number 
    let targetDay = new Date(dateString)
    let targetDayName = targetDay.getDay()
    // console.log('******* targetDayName  ******', targetDayName)
    
    // use day array to see the day name
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursday", "Friday", "Saturday"]

    dayName = dayArray[targetDayName]
   

    return dayName;

}

// or 
// let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   dayName = dayNames[new Date(dateString).getDay()];

// 1. Date.getTime()
// Get the time in milliseconds elapsed since .

// 2. Date.getFullYear()
// Get the four-digit year ().

// 3. Date.getMonth()
// Get the Date object's month as a zero-indexed number ().

// 4. Date.getDate()
// Get the Date object's day as a number ().

// 5. Date.getDay()
// Get the Date object's weekday as a number ().

// 6. Date.getHours()
// Get the Date object's hour ().

// 7. Date.getMinutes()
// Get the Date object's minutes ()

// 8. Date.getSeconds()
// Get the Date object's seconds ().

// 9. Date.getMilliseconds()
// Get the Date object's milliseconds ().