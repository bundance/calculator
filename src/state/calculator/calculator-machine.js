import { Machine } from 'xstate';

export const calculatorMachine = Machine({
    id: 'calculator',
    initial: 'operand1',
    states: {
        operand1: {
            on: {
                CLEAR:{ target: 'operand1', actions: ['clearOperand1'] },
                OPERATOR:{ target: 'operator', actions: ['setOperator'] },
                OPERAND: { target: 'operand1', actions: ['updateOperand'] },
                CLEAR_ALL: { target: 'operand1', actions: ['clearAll'] },
            },
        },
        operator: {
            on: {
                OPERAND: { target: 'operand2', actions: ['clearDisplay', 'updateOperand'] },
                CLEAR:{ target: 'operand1', actions: ['clearOperand1', 'clearOperator'] },
                CLEAR_ALL: { target: 'operand1', actions: ['clearAll'] },
            },
        },
        operand2: {
            on: {
                OPERAND: { target: 'operand2', actions: ['updateOperand'] },
                CALCULATE: { target: 'displayResult', actions: ['calculateResult'] },
                CLEAR:{ target: 'operand2', actions: ['clearOperand2'] },
                CLEAR_ALL: { target: 'operand1', actions: ['clearAll'] },
            }
        },
        displayResult: {
            on: {
                OPERAND: { target: 'operand1', actions: ['clearAll', 'updateOperand'] }
            }
        }
    },
}, {
    actions: {
        setOperator: () => {},
        calculateResult: () => {},
        displayResult: () => {},
        updateOperand: () => {},
        clearAll: () => {},
        clearOperand1: () => {},
        clearOperand2: () => {},
    }
});