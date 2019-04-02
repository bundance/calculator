import React, { Component } from 'react';
import { Calculator } from "./components/calculator";
import './App.css';

class App extends Component {

    render() {
        return (
          <div className="App">
            <header>
              <p>
                Calculator
              </p>
            </header>
            <div>
                <Calculator />
            </div>
          </div>
        );
    }
}

export default App;
