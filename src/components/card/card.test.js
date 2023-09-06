import React from 'react';
import { shallow, render, mount } from 'enzyme';
import card from './card';

describe('card', () => {
  let props;
  let shallowcard;
  let renderedcard;
  let mountedcard;

  const shallowTestComponent = () => {
    if (!shallowcard) {
      shallowcard = shallow(<card {...props} />);
    }
    return shallowcard;
  };

  const renderTestComponent = () => {
    if (!renderedcard) {
      renderedcard = render(<card {...props} />);
    }
    return renderedcard;
  };

  const mountTestComponent = () => {
    if (!mountedcard) {
      mountedcard = mount(<card {...props} />);
    }
    return mountedcard;
  };  

  beforeEach(() => {
    props = {};
    shallowcard = undefined;
    renderedcard = undefined;
    mountedcard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
