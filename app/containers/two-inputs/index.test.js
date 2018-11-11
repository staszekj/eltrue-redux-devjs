import React from 'react'
import {create} from 'app/redux/index'
import state from 'app/redux/index.test'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import TwoInputs from "app/containers/two-inputs/index";

describe('TwoInputs container', function () {
  it('should be rendered', function () {
    //when
    const wrapper = mount(
      <Provider store={create(state)}>
        <TwoInputs/>
      </Provider>)
    ;

    //then
    expect(wrapper.find('input.input1').prop('value')).toBe('123');
    expect(wrapper.find('input.input2').prop('value')).toBe('40');
  })
});
