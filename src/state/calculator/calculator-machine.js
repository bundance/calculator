import { Machine } from 'xstate';


export const calculatorMachine = Machine({
    id: 'calculator',
    initial: 'operand1',
    states: {
        operand1: {
            on: {
                CLEAR:{ target: 'operand1', actions: ['clearOperand1', 'clearDisplay'] },
                OPERATOR:{ target: 'operator', actions: ['setOperator'] },
                OPERAND: { target: 'operand1', actions: ['updateOperand'] },
                CLEAR_ALL: { target: 'operand1', actions: ['clearAll'] },
            },
        },
        operator: {
            on: {
                OPERAND: { target: 'operand2', actions: ['clearDisplay', 'updateOperand'] },
                CLEAR:{ target: 'operand1', actions: ['clearOperand1', 'clearOperator', 'clearDisplay'] },
                CLEAR_ALL: { target: 'operand1', actions: ['clearAll'] },
            },
        },
        operand2: {
            on: {
                OPERAND: { target: 'operand2', actions: ['updateOperand'] },
                OPERATOR:{ target: 'operand2', actions: ['moveResultToOperand1', 'setOperator', 'clearOperand2'] },
                CALCULATE: { target: 'displayResult', actions: ['displayResult'] },
                CLEAR:{ target: 'operand2', actions: ['clearOperand2', 'clearDisplay'] },
                CLEAR_ALL: { target: 'operand1', actions: ['clearAll'] },
            }
        },
        displayResult: {
            on: {
                OPERAND: { target: 'operand1', actions: ['clearAll', 'updateOperand'] },
                OPERATOR:{ target: 'operand2', actions: ['moveResultToOperand1', 'setOperator', 'clearOperand2'] },
                CLEAR: { target: 'operand1', actions: ['clearAll'] },
                CLEAR_ALL: { target: 'operand1', actions: ['clearAll'] },
            }
        }
    },
}, {
    actions: {
        // noops, as the actions are handled in the class
        setOperator: () => {},
        calculateResult: () => {},
        displayResult: () => {},
        updateOperand: () => {},
        clearAll: () => {},
        clearDisplay: () => {},
        clearOperand1: () => {},
        clearOperand2: () => {},
        moveResultToOperand1: () => {},
    }
});