import React, { Component } from 'react';
import './App.css';
import 'h8k-components';

import CycleCounter from './components/CycleCounter';

const title = "Cyclic Counter";

class App extends Component {
  render() {
    // const  cycle  = 3
    const { cycle } = this.props;
    console.log("app Component props ", this.props.cycle)

    return (
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <CycleCounter cycle={cycle} />
      </div>
    );
  }
}

export default App;
