import { Machine, interpret } from 'xstate';

// This machine is completely decoupled from React
export const toggleMachine = Machine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: { TOGGLE: 'active' }
        },
        active: {
            on: { TOGGLE: 'inactive' }
        }
    }
});

export const calculatorMachine = Machine({
    id: 'calculator',
    initial: 'operand1',
    states: {
        operand1: {
            on: { OPERATOR: 'operator' }
        },
        operator: {
            on: { OPERAND: 'operand2' }
        },
        operand2: {
            on: { ACTION: 'displayResult' }
        },
        displayResult: {
            on: { OPERAND: 'operand1' }
        }
    }
});