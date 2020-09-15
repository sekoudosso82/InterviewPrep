import React from 'react';

class Translator extends React.Component {
  state = {
    input: '',
    output: ''
  }
  handleInput = (event) =>{
    event.preventDefault()
  
    let trans = this.props.translations
    this.setState({ [event.target.name] : event.target.value
       })
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" data-testid="text-input" 
              name = "input" 
              onChange={this.handleInput}
              value = {this.state.input}
            />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" className="text-output" data-testid="text-output" readOnly 
              value = {this.props.translations.get(this.state.input)||''}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
