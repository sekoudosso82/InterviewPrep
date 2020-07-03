// need a function
// get the input
// clear the screen if input = c
// split the input after =
// need operator 
// get operator index
// need operand1 and operand2
// convert operand1 to decimal  ---> var operand1 = parseInt(binary, 2)
// convert operand2 to decimala ---> var operand2 = parseInt(binary, 2)
// switch case to perfomr operation 
// convert result to binary

var screen   = '';
    
var operand2 = '';
var ind = ''
var result = [];
var nonDigit = ['+', '-', '/', '*']
const input = document.getElementById('btns');
input.addEventListener('click', function(event) {
    // alert('I was clicked!');
    if (event.target.innerText !== '=' && event.target.innerText !== 'C'){
        screen = screen +   event.target.innerText
        document.getElementById('res').innerText = screen    
    }
    else if (event.target.innerText === 'C'){
      screen = ''
     document.getElementById('res').innerText = screen
    }
    else if (event.target.innerText === '=')
    { 
        result = screen.split('')
        console.log('result: ',result)
        console.log('result length: ',result.length)
        var operand1 ='';
        var operand2 = '';
        var operator = '';
        for (let i = 0 ; i< result.length; i++){
            if (result[i] !== '1' && result[i] !== '0'){
                ind = i
                console.log('stop index', ind)
                operator = result[i]
                // console.log(' operator', operator)
            }
        }
        for (let i = 0 ; i< ind; i++){
                operand1 = operand1 + result[i]
                // operand1.push(result[i])
                // console.log(' operand1', operand1)
        }
        for (let i = ind+1 ; i<result.length; i++){
                operand2 = operand2 + result[i]
                // operand2.push(result[i])
                // console.log(' operand2', operand2)
        }
        console.log(' operand1', operand1)
        let operand1D = parseInt(operand1, 2).toString(10);
        console.log(' operand1 to decimal', operand1D)
        console.log(' operator', operator)
        console.log(' operand2', operand2)
        let operand2D = parseInt(operand2, 2).toString(10);
        console.log(' operand1 to decimal', operand2D)
        
        switch(operator) {
            case '+':
                let summm = parseInt(operand1D) + parseInt(operand2D)
                console.log(' sum decimal', summm)
                console.log(' sum binary', summm.toString(2))
                document.getElementById('res').innerText = summm.toString(2)
                
                break;
            case '-':
                let diff = parseInt(operand1D) - parseInt(operand2D)
                console.log(' diff decimal', diff)
                console.log(' diff binary', diff.toString(2))
                document.getElementById('res').innerText = diff.toString(2)

                break;
            case '*':
                let prod = parseInt(operand1D) * parseInt(operand2D)
                console.log(' product decimal', prod)
                console.log(' product binary', prod.toString(2))
                document.getElementById('res').innerText = prod.toString(2)

                break;
            case '/':
                let divvv = parseInt(operand1D) / parseInt(operand2D)
                console.log(' sum decimal', divvv)
                console.log(' div binary', divvv.toString(2))
                document.getElementById('res').innerText = divvv.toString(2)

                break;
            default:
                console.error('should not be executed');
                break;
        }
        
        
    }
      
});

