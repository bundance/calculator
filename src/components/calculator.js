import React, { Component } from 'react';
import Styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { CalculatorState } from './calculator-state';
import { eventTypes } from '../constants/event-types';

////// CALCULATOR STYLES //////
const CalcUL = Styled.ul`
    width: 400px;
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
`;

const CalcLI = Styled.li`
    float: left;
`;

const CalculatorButton = Styled(Button)`
    height: 75px;
    width: ${props => (100 * props.width)}px;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border: 0;
    border-radius: 0 !important;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    color: white !important;
    font-size: 24px !important;
    height: 48;
    padding: '0 30px';
`;

const CalculatorContainer = Styled(Paper)`
    float: left;
    margin: 30px;
    padding: 20px;
`;


const DisplayContainer = Styled('div')`
    margin-top: 0px;
    border-radius: 0 !important;
    width: 400px !important;
    margin-bottom: -15px;
    position: relative;
     
`;

const Display = Styled('input')`
    height: 75px;
    font-size: 40px !important;
    font-weight: 100;
    width: 356px;
    padding: 20px;
    margin-bottom: 10px !important;
    text-align: right !important;
`;

const Header = Styled(Paper)`
    background-color: #1795d4 !important;
    border-radius: 0 !important;
    color: white;
    padding: 30px;
`;

const Logo = Styled('img')`
    width: 150px;
    height: 40px;
`;

/**
 * Calculator - A presentational component that renders the calculator's UI, passes user input to
 * CalculatorState, and renders the value determined by CalculatorState
 */
export class Calculator extends Component {
    buttons = [{
        name: 'C',
        eventType: eventTypes.ON_CLEAR_ALL,
        width: 2,
    }, {
        name: 'CE',
        eventType: eventTypes.ON_CLEAR,
        width: 1,
    }, {
        id: 'divide',
        name: '/',
        eventType: eventTypes.ON_OPERATOR,
        width: 1,
    }, {
        name: '7',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        name: '8',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        name: '9',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        name: 'X',
        eventType: eventTypes.ON_OPERATOR,
        width: 1,
    }, {
        name: '4',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        name: '5',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        name: '6',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        id: 'minus',
        name: '-',
        eventType: eventTypes.ON_OPERATOR,
        width: 1,
    }, {
        name: '1',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        name: '2',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        name: '3',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        id: 'plus',
        name: '+',
        eventType: eventTypes.ON_OPERATOR,
        width: 1,
    }, {
        name: '0',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        id: 'point',
        name: '.',
        eventType: eventTypes.ON_OPERAND,
        width: 1,
    }, {
        id: 'equals',
        name: '=',
        eventType: eventTypes.ON_CALCULATE,
        width: 1,
    }, {
        id: 'percent',
        name: '%',
        eventType: eventTypes.ON_OPERATOR,
        width: 1,
    }];

    render() {
        return (
            <CalculatorState>
                {(display, onClick) => {
                return (
                    <CalculatorContainer elevation={3}>
                        <Header>
                            <Logo
                                src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
                                alt="[=] Equal Experts"
                            />
                        </Header>
                        <DisplayContainer>
                            <Display
                                id="outlined-dense"
                                readOnly
                                value={display}
                                margin="dense"
                            />
                        </DisplayContainer>
                        <CalcUL>
                            {this.buttons.map(button =>
                                <CalcLI key={button.name} width={button.width}>
                                    <CalculatorButton
                                        id={`id${button.id || button.name}`}
                                        width={button.width}
                                        onClick={onClick(button)
                                    }>
                                        {button.name}
                                    </CalculatorButton>
                                </CalcLI>
                            )}
                        </CalcUL>
                    </CalculatorContainer>
                )
                }}
            </CalculatorState>
        );
    }
}