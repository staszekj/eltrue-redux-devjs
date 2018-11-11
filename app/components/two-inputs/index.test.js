import React from 'react';
import {mount} from 'enzyme';
import TwoInputs from 'app/components/two-inputs';
import * as twoInputsComponentTestData from 'app/components/two-inputs/index.test.data'

export const input1Click = (twoInputs, value) => {
  const input1 = twoInputs.find('input.input1');
  input1.simulate('change', {
    target: {
      value: value
    }
  });
};

export const input2Click = (twoInputs, value) => {
  const input2 = twoInputs.find('input.input2');
  input2.simulate('change', {
    target: {
      value: value
    }
  });
};

describe('TwoInputs component', function () {
  it('should be rendered', function () {
    //when
    const twoInputsChangeSpy = jest.fn();
    const twoInputs = mount(
      <TwoInputs
        valueOne={twoInputsComponentTestData.valueOne}
        valueTwo={twoInputsComponentTestData.valueTwo}
        isResultMod10={twoInputsComponentTestData.isResultMod10}
        actions={{twoInputsChange: twoInputsChangeSpy}}
      />
    );

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
    const twoInputsChangeSpy = jest.fn();
    const twoInputs = mount(
      <TwoInputs
        valueOne={twoInputsComponentTestData.valueOne}
        valueTwo={twoInputsComponentTestData.valueTwo}
        isResultMod10={twoInputsComponentTestData.isResultMod10}
        actions={{twoInputsChange: twoInputsChangeSpy}}
      />
    );
    const input2 = twoInputs.find('input.input2');
    expect(input2.prop('value')).toEqual('40');

    //when
    input1Click(twoInputs, "105");

    //then
    expect(twoInputsChangeSpy).toHaveBeenCalledWith('105', '40')
  });

  it('should handle input2 change', function () {
    //given
    const twoInputsChangeSpy = jest.fn();
    const twoInputs = mount(
      <TwoInputs
        valueOne={twoInputsComponentTestData.valueOne}
        valueTwo={twoInputsComponentTestData.valueTwo}
        isResultMod10={twoInputsComponentTestData.isResultMod10}
        actions={{twoInputsChange: twoInputsChangeSpy}}
      />
    );
    const input1 = twoInputs.find('input.input1');
    expect(input1.prop('value')).toEqual('123');

    //when
    input2Click(twoInputs, "200");

    //then
    expect(twoInputsChangeSpy).toHaveBeenCalledWith('123', '200')
  });

  it('should be render if result mod 10', function () {
    //given
    const twoInputsChangeSpy = jest.fn();
    const isResultMod10 = true;

    //when
    const twoInputs = mount(
      <TwoInputs
        valueOne={twoInputsComponentTestData.valueOne}
        valueTwo={twoInputsComponentTestData.valueTwo}
        isResultMod10={isResultMod10}
        actions={{twoInputsChange: twoInputsChangeSpy}}
      />
    );
    const greenTwoInputs = twoInputs.find('.background-color-green');

    //then
    expect(greenTwoInputs.exists()).toBe(true);
  });
});
