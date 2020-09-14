import React from 'react';

class TextEditor extends React.Component {
  state = {
    newWord: "",
    allWord: [],
    TextContent:''
  }

handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
}
handleAddNewWord = (event) => {
  event.preventDefault()
  if (this.state.newWord){
    let n = this.state.newWord
    let nAll = this.state.allWord
    nAll.push(n)
    this.setState({ TextContent: nAll.join(" "), newWord:'' }) 
  }
}

handleRemoveLastWord = () => {
  if (this.state.TextContent.length>0){
    let  r = this.state.allWord
    r.pop()
    this.setState({ TextContent: r.join(" "), newWord:'' }) 
  }

  
}

  render() {
    // console.log("new word", this.state.newWord)
    // console.log("all word array", this.state.allWord)
    // console.log("content", this.state.TextContent)
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" data-testid="word-input" 
            name='newWord'
            onChange={this.handleInput} 
            value={this.state.newWord} 
          />
 
              <button disabled={this.state.newWord===''} data-testid="append-button" onClick={this.handleAddNewWord}>Append</button>
 
          <button disabled={this.state.allWord.length<1} data-testid="undo-button" onClick={this.handleRemoveLastWord}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.TextContent}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
