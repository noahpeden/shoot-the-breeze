import React from 'react';
import sinon from 'sinon';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import FilterBar from '../lib/components/FilterBar';
import Application from '../lib/components/Application';
import {handleSort} from '../lib/components/Application';

describe('FilterBar', () => {
  const wrapper = shallow(<FilterBar
    handleSort={() => {}}
  />);

  it.skip('should have a class of filterBar', () => {
    assert.equal(wrapper.find('.filterBar').length, 1);
  });

  it.skip('should have an input with a prop of placeholder', () => {
    const wrapper = mount(<FilterBar
                          />)
    const xyz = wrapper.find('#search-input')
    console.log(xyz.debug())
    expect(xyz.first()).to.have.prop('placeholder');
  });

  it('class appName should have a value', () => {
    assert.equal(wrapper.find('.appName').text(), 'Shoot Thou Breeze');
  });

  it.skip('simulates clicking down', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <FilterBar onButtonClick={onButtonClick}
      handleSort={() => {}} />
    );
    wrapper.find('.sortChronoBtn').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it.skip('simulates clicking up', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <FilterBar onButtonClick={onButtonClick}
      handleSort={() => {}} />
    );
    wrapper.find('.sortReverseChronoBtn').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

});
