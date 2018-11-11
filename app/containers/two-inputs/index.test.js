import React from 'react'
import {create} from 'app/redux/index'
import reduxTestData from './index.test.data'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import TwoInputs from "app/containers/two-inputs/index";
import {input1Click} from "app/components/two-inputs/index.test"

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

  it('should handle input1 click', function () {
    //given
    const wrapper = mount(
      <Provider store={create(reduxTestData)}>
        <TwoInputs/>
      </Provider>
    );

    //when
    input1Click(wrapper, '22');

    //then
    expect(wrapper.find('input.input1').prop('value')).toBe('22');
  });
});
