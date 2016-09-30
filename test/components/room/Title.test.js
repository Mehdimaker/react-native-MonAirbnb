import React from 'react';
import {Text} from 'react-native';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import Title from '../../../src/components/room/Title';

describe('Title', () => {
  it('has title', () => {
    const placeholder = 'Okdfsfsdf';
    const wrapper = shallow(<Title>{placeholder}</Title>);
    expect(wrapper.children().node).to.equal(placeholder);
  });

  it('is Text', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.type()).to.equal(Text);
  });
});
