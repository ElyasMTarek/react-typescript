import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';

interface Props {
  // your props validation
}

interface State {
  counter: number // state types
}


class App extends Component<Props, State> {

  callError = () =>{
    if(this.props==6){
      return false;
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} style={{ height: '50px' }} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ErrorBoundary>
            <div>
              <p>
                <b>
                  This is an example of error boundaries in React 16.
                <br /><br />
                        Click on the numbers to increase the counters.
                <br />
                        The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
              </b>
              </p>
              <hr />
              <ErrorBoundary>
                {this.callError()}
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                <BuggyCounter />
                <BuggyCounter />
              </ErrorBoundary>
              <hr />
              <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
              <ErrorBoundary><BuggyCounter /></ErrorBoundary>
              <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            </div>
          </ErrorBoundary>
        </header>
      </div>
    );
  }
}

export default App;
