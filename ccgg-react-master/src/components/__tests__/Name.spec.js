import React from 'react';
import ReactDOM from 'react-dom';
import Name from '../Name';

describe('Name component', () => {
  it('displays name', () => {
    const container = document.createElement('div');
    const name = 'bob';
    ReactDOM.render(<Name name={name} />, container);
    expect(container.innerHTML).toContain(name);
    ReactDOM.unmountComponentAtNode(container);
  });
});