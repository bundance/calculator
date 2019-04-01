import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { interpret } from 'xstate';
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
    ACTION: 'ACTION',
    OPERAND: 'OPERAND',
    OPERATOR: 'OPERATOR'
};

class App extends Component {
    state = {
        operand1: 0,
        operand2: 0,
        operator: '',
        display: '0',
        current: calculatorMachine.initialState,
    };

    updateDisplay = event => {
        const updatedDisplay = `${this.state.display}${event.name}`;
        const display = updatedDisplay.charAt(0) === '0'
            ? updatedDisplay.slice(1)
            : updatedDisplay;
        this.setState({ display });
    };

    setOperator = event => this.setState({ operator: event.name });
    setOperand1 = event => this.setState({ operand1: event.name });
    setOperand2 = event => this.setState({ operand2: event.name });

    calculateResult = event => {
        switch (this.state.operator) {
            case '+':
                this.setState({ display: (Number.parseInt(this.state.operand1) + Number.parseInt(this.state.operand2)).toString() });
                break;
            case '-':
                this.setState({ display: (Number.parseInt(this.state.operand1) - Number.parseInt(this.state.operand2)).toString() });
                break;
            case 'X':
                this.setState({ display: (Number.parseInt(this.state.operand1) * Number.parseInt(this.state.operand2)).toString() });
                break;
            case '/':
                this.setState({ display: (Number.parseInt(this.state.operand1) / Number.parseInt(this.state.operand2)).toString() });
                break;
        }
    };

    runActions = (actions, event) => actions.forEach(action => this[action](event));

    service = interpret(calculatorMachine)
        .onTransition((current, event) => this.runActions(current.actions, event));

    componentDidMount() {
        this.service.start();
    }

    componentWillUnmount() {
        this.service.stop();
    }

    handleClick = button => () => {
        this.service.send(button);
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
