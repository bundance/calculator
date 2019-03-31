import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Machine, interpret } from 'xstate';
import { calculatorMachine } from './state/calculator/calculator-machine';

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

const buttonType = {
    ACTION: 'action',
    OPERAND: 'operand',
    OPERATOR: 'operator'
}
class App extends Component {
    state = {
        display: '0',
        current: calculatorMachine.initialState
    };

    service = interpret(calculatorMachine).onTransition(current =>
        this.setState({ current })
    );

    componentDidMount() {
        this.service.start();
    }

    componentWillUnmount() {
        this.service.stop();
    }

    handleClick = button => () => {
        this.service.send(button.type);
        this.setState({ display: button.name });
    };

    buttons = [{
        name: 'C',
        type: buttonType.ACTION,
        width: 2,
    }, {
        name: 'CE',
        type: buttonType.ACTION,
        width: 1,
    }, {
        id: 'divide',
        name: '/',
        type: buttonType.OPERATOR,
        width: 1,
    }, {
        name: '7',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        name: '8',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        name: '9',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        name: 'X',
        type: buttonType.OPERATOR,
        width: 1,
    }, {
        name: '4',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        name: '5',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        name: '6',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        id: 'minus',
        name: '-',
        type: buttonType.OPERATOR,
        width: 1,
    }, {
        name: '1',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        name: '2',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        name: '3',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        id: 'plus',
        name: '+',
        type: buttonType.OPERATOR,
        width: 1,
    }, {
        name: '0',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        id: 'point',
        name: '.',
        type: buttonType.OPERAND,
        width: 1,
    }, {
        id: 'equals',
        name: '=',
        type: buttonType.ACTION,
        width: 1,
    }, {
        id: 'percent',
        name: '%',
        type: buttonType.OPERATOR,
        width: 1,
    },
    ];
    
    render() {
        const { send } = this.service;
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
                      <CalcLI key={button.name} width={button.width} break={button.break}>
                          <CalculatorButton id={`id${button.id || button.name}`} variant="contained" color="primary" width={button.width} onClick={this.handleClick(button) }>{button.name}</CalculatorButton>
                      </CalcLI>
                  )}
                  </CalcUL>
              </CalculatorContainer>
            </div>
          </div>
        );
    }
}

export default App;
