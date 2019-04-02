import React, { Component } from 'react';
import { Calculator } from "./components/calculator";
import Paper from '@material-ui/core/Paper';
import './App.css';
import Styled from 'styled-components';

const StyledCalculator = Styled(Paper)`
    margin: 30px;
`

class App extends Component {
    render() {
        return (
          <div className="App">
            <StyledCalculator elevation={3}>
                <Calculator />
            </StyledCalculator>
          </div>
        );
    }
}

export default App;
