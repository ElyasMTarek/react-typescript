import React, { Component } from 'react';

interface Props {
  // your props validation
}

interface State {
  counter: number // state types
}

export default class BuggyCounter extends Component<Props,State> {
    constructor(props:any) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    render() {
      if (this.state.counter === 3) {
        // Simulate a JS error
        throw new Error("This is my custom error!");
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }
  