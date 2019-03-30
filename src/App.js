import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const CalcUL = Styled.ul`
    width: 350px;
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
`;

const CalcLI = Styled.li`
    float: left;
    width: ${props => (75 * props.width) + (props.width > 1 ? 10 : 0) }px;
    height: 75px
    background-color: orange;
    padding: 5px;
`;

const CalculatorButton = Styled(Button)`
    height: 75px;
    width: ${props => (75 * props.width) + (props.width > 1 ? 10 : 0) }px;
`;

const CalculatorContainer = Styled(Paper)`
    float: left;
    padding: 20px;
`;

const Display = Styled(TextField)`
    font-weight: 100px;
    width: 340px;
    margin-bottom: 10px !important;
`;

class App extends Component {
    state = {
        display: '0'
    };

    handleClick = display => () => {
        this.setState({ display })
    };

    buttons = [{
        name: 'C',
        width: 2,
    }, {
        name: 'CE',
        width: 1,
    }, {
        name: '/',
        width: 1,
    }, {
        name: '7',
        width: 1,
        break: true,
    }, {
        name: '8',
        width: 1,
    }, {
        name: '9',
        width: 1,
    }, {
        name: 'X',
        width: 1,
    }, {
        name: '4',
        width: 1,
    }, {
        name: '5',
        width: 1,
    }, {
        name: '6',
        width: 1,
    }, {
        name: '-',
        width: 1,
    }, {
        name: '1',
        width: 1,
    }, {
        name: '2',
        width: 1,
    }, {
        name: '3',
        width: 1,
    }, {
        name: '+',
        width: 1,
    }, {
        name: '0',
        width: 1,
    }, {
        name: '.',
        width: 1,
    }, {
        name: '=',
        width: 1,
    }, {
        name: '&',
        width: 1,
    },
    ];
    
    render() {
        return (
          <div className="App">
            <header>
              <p>
                Calculator
              </p>
            </header>
            <div>
              <CalculatorContainer>
                  <Display
                      disabled
                      id="outlined-dense"
                      label={this.state.display}
                      margin="dense"
                      variant="outlined"
                  />
                  <CalcUL>
                  {this.buttons.map(button =>
                      <CalcLI key={button.name} width={button.width} break={button.break}><CalculatorButton variant="contained" color="primary" width={button.width} onClick={this.handleClick(button.name) }>{button.name}</CalculatorButton></CalcLI>
                  )}
                  </CalcUL>
              </CalculatorContainer>
            </div>
          </div>
        );
    }
}

export default App;
