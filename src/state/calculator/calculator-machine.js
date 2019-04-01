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
            on: {
                OPERATOR:{ target: 'operator', actions: ['setOperator'] },
                OPERAND: { target: 'operand1', actions: ['updateDisplay', 'setOperand1'] },
            },
        },
        operator: {
            on: {
                OPERAND: {target: 'operand2', actions: ['setOperand2']},
            }
        },
        operand2: {
            on: {
                OPERAND: { target: 'operand2', actions: ['updateDisplay', 'setOperand2'] },
                ACTION: { target: 'displayResult', actions: ['calculateResult'] }
            }
        },
        displayResult: {
            on: { OPERAND: 'operand1' }
        }
    },
}, {
    actions: {
        updateDisplay: () => {},
        setOperator: () => {},
        calculateResult: () => {},
        displayResult: () => {},
        setOperand1: () => {},
        setOperand2: () => {},
    }
});