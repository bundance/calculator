import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const CalcUL = Styled.ul`
    width: 350px;
    list-style-type: none;
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


class App extends Component {
    handleClick = buttonName => () => {
        console.log({ buttonName });
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
              <Paper>
                  <CalcUL>
                  {this.buttons.map(button =>
                      <CalcLI key={button.name} width={button.width} break={button.break}><CalculatorButton variant="contained" color="primary" width={button.width} onClick={this.handleClick(button.name) }>{button.name}</CalculatorButton></CalcLI>
                  )}
                  </CalcUL>
              </Paper>
            </div>
          </div>
        );
    }
}

export default App;
