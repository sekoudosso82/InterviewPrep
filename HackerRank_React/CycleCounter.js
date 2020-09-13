import React from 'react';

class CycleCounter extends React.Component {
  state = {
    count: 0 , 
  }

  handleClick = () => {
    if ( (this.props.cycle !== undefined) && (this.state.count+1 < this.props.cycle)){
      this.setState({ count: this.state.count + 1})
    }
    else{
      this.setState({ count: 0})
    }
  }

  render() {
    console.log("CycleCounter Component props counter", this.props.cycle)
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="pt-20 layout-row align-items-center justify-content-center">
          <button
            data-testid="cycle-counter"
            style={{ fontSize: '1rem', width: 120, height: 30, }}
            onClick={this.handleClick}
          >{this.state.count}</button>
        </section>
      </div>
    );
  }
}

export default CycleCounter;
