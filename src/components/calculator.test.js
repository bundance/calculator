import React from 'react';
import { Calculator } from './calculator';
import { shallow } from 'enzyme'

describe('calculator', () => {
    it('should change the display when a number button is clicked', () => {
        const wrap = shallow(
            <Calculator />
        );

        wrap.find('#id2').simulate('click');
        expect(wrap.state('display')).toEqual('2');
    });

    it('should add new digits to the right of the display when number buttons are continually clicked', () => {
        const wrap = shallow(
            <Calculator />
        );

        wrap.find('#id2').simulate('click');
        wrap.find('#id7').simulate('click');
        wrap.find('#id5').simulate('click');
        wrap.find('#id9').simulate('click');
        wrap.find('#id8').simulate('click');
        expect(wrap.state('display')).toEqual('27598');
    });


    it('should add two numbers together', () => {
        const wrap = shallow(
            <Calculator />
        );

        wrap.find('#id2').simulate('click');
        wrap.find('#idplus').simulate('click');
        wrap.find('#id3').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('5');
    });

    it('should subtract two numbers', () => {
        const wrap = shallow(
            <Calculator />
        );

        wrap.find('#id5').simulate('click');
        wrap.find('#idminus').simulate('click');
        wrap.find('#id2').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('3');
    });

    it('should add multiply two numbers together', () => {
        const wrap = shallow(
            <Calculator />
        );

        wrap.find('#id2').simulate('click');
        wrap.find('#idX').simulate('click');
        wrap.find('#id3').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('6');
    });

    it('should divide two numbers', () => {
        const wrap = shallow(
            <Calculator />
        );

        wrap.find('#id8').simulate('click');
        wrap.find('#iddivide').simulate('click');
        wrap.find('#id4').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('2');
    });

    // To Do
    it.skip('should calculate a set percentage of a number', () => {
        const wrap = shallow(
            <Calculator />
        );

        // Test 50% of 8
        wrap.find('#id5').simulate('click');
        wrap.find('#id0').simulate('click');
        wrap.find('#idpercent').simulate('click');
        wrap.find('#id8').simulate('click');
        wrap.find('#idequals').simulate('click');

        expect(wrap.state('display')).toEqual('4');
    });

    it('should handle multiple numbers separated by operators', () => {
        const wrap = shallow(
            <Calculator />
        );

        wrap.find('#id1').simulate('click');
        wrap.find('#idplus').simulate('click');
        wrap.find('#id2').simulate('click');
        wrap.find('#idplus').simulate('click');
        wrap.find('#id3').simulate('click');
        wrap.find('#idplus').simulate('click');
        wrap.find('#id4').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('10');
    });

    it('should reset the operands, operator and display state when Clear All (C) button is pressed', () => {
        const wrap = shallow(
            <Calculator />
        );

        expect(wrap.state()).toEqual(expect.objectContaining({ operand1: '0', operator: '', operand2: '0', display: '0' }));

        wrap.find('#id1').simulate('click');
        wrap.find('#idplus').simulate('click');
        wrap.find('#id2').simulate('click');

        expect(wrap.state()).toEqual(expect.objectContaining({ operand1: '1', operator: '+', operand2: '2', display: '2' }));
        wrap.find('#idC').simulate('click');

        expect(wrap.state()).toEqual(expect.objectContaining({ operand1: '0', operator: '', operand2: '0', display: '0' }));
    });

    it('should reset operand1 when CE button is pressed', () => {
        const wrap = shallow(
            <Calculator />
        );

        expect(wrap.state()).toEqual(expect.objectContaining({ operand1: '0', operator: '', operand2: '0', display: '0' }));

        wrap.find('#id1').simulate('click');
        wrap.find('#idCE').simulate('click');

        expect(wrap.state()).toEqual(expect.objectContaining({ operand1: '0', operator: '', operand2: '0', display: '0' }));
    });

    it('should reset operand2 when CE button is pressed', () => {
        const wrap = shallow(
            <Calculator />
        );

        expect(wrap.state()).toEqual(expect.objectContaining({ operand1: '0', operator: '', operand2: '0', display: '0' }));

        wrap.find('#id1').simulate('click');
        wrap.find('#idplus').simulate('click');
        wrap.find('#id2').simulate('click');
        wrap.find('#idCE').simulate('click');

        expect(wrap.state()).toEqual(expect.objectContaining({ operand1: '1', operator: '+', operand2: '0', display: '0' }));
    });

});