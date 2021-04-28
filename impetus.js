import React from 'react'

class InputBox extends React.Component {

    // initialState 
    state = {
        inputType: ""
    }

    // methods 
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleSubmit = (event) =>{
        event.preventDefault()
        const CONS = {
            name: "acg"
        } 
        let x =2 
        x = 3 
        CONS.name  =  "xyz"
        let len = (this.state.inputType)
        // check if input is a palindrome
        inputSplit = len.replace(/\W/g, '').toLowerCase()
        return inputSplit == inputSplit.split().reverse().join('')
        console.log(palindrome("llama mall")); //-> true

        // for (let i=0;  i < len.length-1; i++){
        //     if (len.charAt(i) !== len.charAt([len.length-1-i])){
        //         console ("not a palindrome")
        //     }
        //     else {
        //         console.log("it's a palindrome")
        //     }
        // }
        this.setState({ inputType: "" }) // clear initial state
    }
    // abccba 
    // render  
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                    name="inputType" 
                    value={this.state.inputType}  
                    onChange={this.handleChange}
                    type="text"
                    placeholder="inputType"
                />
                <button type="submit" className=""> Submit </button>

                </form>
            </div>
        )
    }


}

export default InputBox 
