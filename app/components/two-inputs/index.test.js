import React from 'react';
import {mount} from 'enzyme';
import TwoInputs from 'app/components/two-inputs';
import * as twoInputsTestData from 'app/components/two-inputs/index.test.data'
import {actions} from "app/components/two-inputs/index.test.data";

describe('TwoBars component', function () {
  it('should be rendered', function () {
    //when
    const twoInputs = mount(<TwoInputs {...twoInputsTestData}/>);

    //then
    const input1 = twoInputs.find('input.input1');
    const input2 = twoInputs.find('input.input2');
    const greenTwoInputs = twoInputs.find('.background-color-green');

    expect(input1.prop('value')).toEqual('123');
    expect(input2.prop('value')).toEqual('40');
    expect(greenTwoInputs.exists()).toBe(false);
  });

  it('should handle input1 change', function () {
    //given
    const twoInputs = mount(<TwoInputs {...twoInputsTestData}/>);
    const input1 = twoInputs.find('input.input1');
    const input2 = twoInputs.find('input.input2');
    expect(input2.prop('value')).toEqual('40');

    //when
    input1.simulate('change', {
      target: {
        value: "105"
      }
    });

    //then
    expect(actions.twoInputsChange).toHaveBeenCalledWith('105', '40')
  });

  it('should handle input2 change', function () {
    //given
    const twoInputs = mount(<TwoInputs {...twoInputsTestData}/>);
    const input1 = twoInputs.find('input.input1');
    const input2 = twoInputs.find('input.input2');
    expect(input1.prop('value')).toEqual('123');

    //when
    input2.simulate('change', {
      target: {
        value: "200"
      }
    });

    //then
    expect(actions.twoInputsChange).toHaveBeenCalledWith('123', '200')
  });

  it('should be render if result mod 10', function () {
    //given
    const isResultMod10 = true;

    //when
    const twoInputs = mount(<TwoInputs {...twoInputsTestData} isResultMod10={isResultMod10}/>);
    const greenTwoInputs = twoInputs.find('.background-color-green');

    //then
    expect(greenTwoInputs.exists()).toBe(true);
  });
});
