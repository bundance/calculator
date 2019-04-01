import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('calculator', () => {
  it('should change the display when a number button is clicked', () => {
      const wrap = shallow(
          <App />
      );

      wrap.find('#id2').simulate('click');
      expect(wrap.state('display')).toEqual('2');
  });

    it('should add new digits to the right of the display when number buttons are continually clicked', () => {
        const wrap = shallow(
            <App />
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
          <App />
      );

      wrap.find('#id2').simulate('click');
      wrap.find('#idplus').simulate('click');
      wrap.find('#id3').simulate('click');
      wrap.find('#idequals').simulate('click');
      expect(wrap.state('display')).toEqual('5');
    });

    it('should subtract two numbers', () => {
        const wrap = shallow(
            <App />
        );

        wrap.find('#id5').simulate('click');
        wrap.find('#idminus').simulate('click');
        wrap.find('#id2').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('3');
    });

    it('should add multiply two numbers together', () => {
        const wrap = shallow(
            <App />
        );

        wrap.find('#id2').simulate('click');
        wrap.find('#idX').simulate('click');
        wrap.find('#id3').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('6');
    });

    it('should divide two numbers', () => {
        const wrap = shallow(
            <App />
        );

        wrap.find('#id8').simulate('click');
        wrap.find('#iddivide').simulate('click');
        wrap.find('#id4').simulate('click');
        wrap.find('#idequals').simulate('click');
        expect(wrap.state('display')).toEqual('2');
    });
});