import React from 'react';
import Names from '../Names';
import Name from '../Name';
import {mount, render, shallow} from 'enzyme';

describe('Names component', () => {
  // static: render react components to static HTML and analyze the resulting HTML structure.
  it('displays a unordered list', () => {
    const names = [];
    const wrapper = render(<Names names={names}/>);
    expect(wrapper.find('ul')._root).toHaveLength(1);
  });

  // shadow: render just the given component and none of its children
  it('displays multiple Name components', () => {
    const names = ['bob', 'alice', 'alice'];
    const wrapper = shallow(<Names names={names}/>);
    expect(wrapper.find(Name)).toHaveLength(3);
    wrapper.unmount();
  });

  // mount: render the component and all its children components
  it('displays multiple names', () => {
    const names = ['bob', 'alice', 'alex'];
    const wrapper = mount(<Names names={names}/>);
    for (let i in names) {
      expect(wrapper.text()).toContain(names[i]);
    }
    wrapper.unmount();
  });

});