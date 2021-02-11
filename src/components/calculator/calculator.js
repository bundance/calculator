import React, { Component } from 'react';
import Styled from 'styled-components';
import Paper from '@material-ui/core/Paper/index';
import { CalculatorState } from './calculator-state';
import { CalculatorButtons } from '../calculator-buttons/calculator-buttons';
import { eventTypes } from '../../constants/event-types';

////// CALCULATOR STYLES //////

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
 * CalculatorState, and renders the value determined by CalculatorState. This component is purely
 * presentational, and contains no logic.
 */
export class Calculator extends Component {
    buttons = [{
        name: 'C',
        eventType: eventTypes.ON_CLEAR_ALL,
        width: 2,
    }, {
        name: 'CE',
        eventType: eventTypes.ON_CLEAR,
    }, {
        id: 'divide',
        name: '/',
        eventType: eventTypes.ON_OPERATOR,
    }, {
        name: '7',
        eventType: eventTypes.ON_OPERAND,
    }, {
        name: '8',
        eventType: eventTypes.ON_OPERAND,
    }, {
        name: '9',
        eventType: eventTypes.ON_OPERAND,
    }, {
        name: 'X',
        eventType: eventTypes.ON_OPERATOR,
    }, {
        name: '4',
        eventType: eventTypes.ON_OPERAND,
    }, {
        name: '5',
        eventType: eventTypes.ON_OPERAND,
    }, {
        name: '6',
        eventType: eventTypes.ON_OPERAND,
    }, {
        id: 'minus',
        name: '-',
        eventType: eventTypes.ON_OPERATOR,
    }, {
        name: '1',
        eventType: eventTypes.ON_OPERAND,
    }, {
        name: '2',
        eventType: eventTypes.ON_OPERAND,
    }, {
        name: '3',
        eventType: eventTypes.ON_OPERAND,
    }, {
        id: 'plus',
        name: '+',
        eventType: eventTypes.ON_OPERATOR,
    }, {
        name: '0',
        eventType: eventTypes.ON_OPERAND,
    }, {
        id: 'point',
        name: '.',
        eventType: eventTypes.ON_OPERAND,
    }, {
        id: 'equals',
        name: '=',
        eventType: eventTypes.ON_CALCULATE,
    }, {
        id: 'percent',
        name: '%',
        eventType: eventTypes.ON_OPERATOR,
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
                        <CalculatorButtons buttons={this.buttons} onClick={onClick}/>
                    </CalculatorContainer>
                )
                }}
            </CalculatorState>
        );
    }
}