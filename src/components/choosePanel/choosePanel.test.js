import React from 'react';
import { shallow, render, mount } from 'enzyme';
import choosePanel from './choosePanel';

describe('choosePanel', () => {
  let props;
  let shallowchoosePanel;
  let renderedchoosePanel;
  let mountedchoosePanel;

  const shallowTestComponent = () => {
    if (!shallowchoosePanel) {
      shallowchoosePanel = shallow(<choosePanel {...props} />);
    }
    return shallowchoosePanel;
  };

  const renderTestComponent = () => {
    if (!renderedchoosePanel) {
      renderedchoosePanel = render(<choosePanel {...props} />);
    }
    return renderedchoosePanel;
  };

  const mountTestComponent = () => {
    if (!mountedchoosePanel) {
      mountedchoosePanel = mount(<choosePanel {...props} />);
    }
    return mountedchoosePanel;
  };  

  beforeEach(() => {
    props = {};
    shallowchoosePanel = undefined;
    renderedchoosePanel = undefined;
    mountedchoosePanel = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
