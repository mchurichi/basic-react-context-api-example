import React, { Component } from 'react';
import AppContext from './AppContext';

class Child extends Component {

  static contextType = AppContext;

  render() {
    return (
      <div>
        {this.context.value}
        <button onClick={this.context.sumar}>Sumar</button>
      </div>
    );
  }

}

export default Child;
