import React from 'react'
import {create} from 'app/redux/index'
import reduxTestData from './index.test.data'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import TwoInputs from "app/containers/two-inputs/index";
import {input1Change, input2Change} from "app/components/two-inputs/index.test"

describe('TwoInputs container', function () {
  it('should be rendered', function () {
    //when
    const wrapper = mount(
      <Provider store={create(reduxTestData)}>
        <TwoInputs/>
      </Provider>
    );

    //then
    expect(wrapper.find('input.input1').prop('value')).toBe('123');
    expect(wrapper.find('input.input2').prop('value')).toBe('40');
  });

  it('should handle input1 and input2 change', function () {
    //given
    const wrapper = mount(
      <Provider store={create(reduxTestData)}>
        <TwoInputs/>
      </Provider>
    );
    expect(wrapper.find('.background-color-green').exists()).toBe(false);

    //when
    input1Change(wrapper, '22');
    input2Change(wrapper, '8');

    //then
    expect(wrapper.find('input.input1').prop('value')).toBe('22');
    expect(wrapper.find('input.input2').prop('value')).toBe('8');
    expect(wrapper.find('.background-color-green').exists()).toBe(true);
  });
});
