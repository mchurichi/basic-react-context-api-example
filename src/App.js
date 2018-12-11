import React, { Component } from 'react';
import Parent from './Parent';
import AppContext from './AppContext';

import './App.css';

class App extends Component {

  state = {
    value: 0,
  }

  sumar = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    const context = {
      value: this.state.value,
      sumar: this.sumar
    };

    return (
      <AppContext.Provider value={context}>
        <div className="App">
          <Parent />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
