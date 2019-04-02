import React, { Component } from 'react';
import Styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { interpret } from 'xstate';
import { calculatorMachine } from "../state/calculator/calculator-machine";

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
    OPERATOR: 'OPERATOR',
    CALCULATE: 'CALCULATE',
    CLEAR: 'CLEAR',
    CLEAR_ALL: 'CLEAR_ALL',
};

export class Calculator extends Component {
    state = {
        operand1: '0',
        operand2: '0',
        operator: '',
        display: '0',
        current: calculatorMachine.initialState,
    };

    formatOperandString = (existingNumber, numberToAppend) => {
        const operandString = `${existingNumber}${numberToAppend}`;
        return operandString.charAt(0) === '0'
            ? operandString.slice(1)
            : operandString;
    };

    setOperator = (current, event) => ({ operator: event.name });

    clearOperand1 = () => ({ operand1: '0' });
    clearOperand2 = () => ({ operand2: '0' });
    clearOperator = () => ({ operator: '' });
    clearDisplay = () => ({ display: '0' });
    clearAll = () => ({
        operand1: '0',
        operand2: '0',
        operator: '',
        display: '0',
    });


    updateOperand = (current, event, prevState) => {
        const updatedValue = this.formatOperandString(prevState[current.value], event.name);
        return { [current.value]: updatedValue, display: updatedValue };
    };

    moveResultToOperand1 = () => ({
        operand1: this.calculateResult()
    });

    displayResult = () => ({ display: this.calculateResult() });

    calculateResult = () => {
        switch (this.state.operator) {
            case '+':
                return (Number.parseInt(this.state.operand1) + Number.parseInt(this.state.operand2)).toString();
            case '-':
                return (Number.parseInt(this.state.operand1) - Number.parseInt(this.state.operand2)).toString();
            case 'X':
                return (Number.parseInt(this.state.operand1) * Number.parseInt(this.state.operand2)).toString();
            case '/':
                return (Number.parseInt(this.state.operand1) / Number.parseInt(this.state.operand2)).toString();
            case '%':
                // ToDo
                return '';
            default:
                return '';
        }
    };

    runActions = (current, event) => current.actions.reduce((updatedState, action) => ({
        ...updatedState,
        ...this[action](current, event, updatedState)
    }), this.state);

    service = interpret(calculatorMachine)
        .onTransition((current, event) => {
            this.setState({ ...this.runActions(current, event) });
        });

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
        type: buttonType.CLEAR_ALL,
        width: 2,
    }, {
        name: 'CE',
        type: buttonType.CLEAR,
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
        type: buttonType.CALCULATE,
        width: 1,
    }, {
        id: 'percent',
        name: '%',
        type: buttonType.OPERATOR,
        width: 1,
    }];

    render() {
        return <CalculatorContainer>
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
                        <CalculatorButton
                            id={`id${button.id || button.name}`}
                            variant="contained"
                            color="primary"
                            width={button.width}
                            onClick={this.handleClick(button)
                        }>
                            {button.name}
                        </CalculatorButton>
                    </CalcLI>
                )}
            </CalcUL>
        </CalculatorContainer>
    }
}