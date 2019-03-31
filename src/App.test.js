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
  it('should change the display when an ordinal button is clicked', () => {
      const wrap = shallow(
          <App />
      );

      wrap.find('#id2').simulate('click');
      expect(wrap.state('display')).toEqual('2');
  });

  it('should add two numbers together', () => {
      const wrap = shallow(
          <App />
      );

      wrap.find('#id2').simulate('click');
      wrap.find('#idplus').simulate('click');
      wrap.find('#id3').simulate('click');
      expect(wrap.state('display')).toEqual('5');
  })
});