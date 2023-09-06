import React from 'react';
import { shallow, render, mount } from 'enzyme';
import checkboxRow from './checkboxRow';

describe('checkboxRow', () => {
  let props;
  let shallowcheckboxRow;
  let renderedcheckboxRow;
  let mountedcheckboxRow;

  const shallowTestComponent = () => {
    if (!shallowcheckboxRow) {
      shallowcheckboxRow = shallow(<checkboxRow {...props} />);
    }
    return shallowcheckboxRow;
  };

  const renderTestComponent = () => {
    if (!renderedcheckboxRow) {
      renderedcheckboxRow = render(<checkboxRow {...props} />);
    }
    return renderedcheckboxRow;
  };

  const mountTestComponent = () => {
    if (!mountedcheckboxRow) {
      mountedcheckboxRow = mount(<checkboxRow {...props} />);
    }
    return mountedcheckboxRow;
  };  

  beforeEach(() => {
    props = {};
    shallowcheckboxRow = undefined;
    renderedcheckboxRow = undefined;
    mountedcheckboxRow = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
