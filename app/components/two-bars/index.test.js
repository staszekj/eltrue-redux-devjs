import React from 'react'
import {mount} from 'enzyme'
import TwoBars, {MAX_VALUE, TOO_BIG_DATA_MESSAGE} from 'app/components/two-bars/'
import * as twoBarsComponentData from 'app/components/two-bars/index.test.data'
import {LEFT_BAR, RIGHT_BAR} from "app/actions";

export const clickLeftBar = wrapper => {
  wrapper.find('TwoBars div.value1').simulate('click');
};

export const clickRightBar = wrapper => {
  wrapper.find('TwoBars div.value2').simulate('click');
};

describe('TwoBars component', function () {
  it('should be rendered', function () {
    //when
    const twoBarsClickSpy = jest.fn();
    const wrapper = mount(
      <TwoBars
        valueOne={twoBarsComponentData.valueOne}
        valueTwo={twoBarsComponentData.valueTwo}
        actions={{twoBarsClick: twoBarsClickSpy}}
      />
    );

    //then
    expect(wrapper.find('BarContent .value1').text()).toBe('' + twoBarsComponentData.valueOne);
    expect(wrapper.find('BarContent .value2').text()).toBe('' + twoBarsComponentData.valueTwo);
  });

  it('should handle left bar click', function () {
    //given
    const twoBarsClickSpy = jest.fn();
    const wrapper = mount(
      <TwoBars
        valueOne={twoBarsComponentData.valueOne}
        valueTwo={twoBarsComponentData.valueTwo}
        actions={{twoBarsClick: twoBarsClickSpy}}
      />
    );

    //when
    clickLeftBar(wrapper);

    //then
    expect(twoBarsClickSpy).toHaveBeenCalledWith(LEFT_BAR);
    expect(twoBarsClickSpy).not.toHaveBeenCalledWith(RIGHT_BAR);
  });

  it('should handle right bar click', function () {
    //given
    const twoBarsClickSpy = jest.fn();
    const wrapper = mount(
      <TwoBars
        valueOne={twoBarsComponentData.valueOne}
        valueTwo={twoBarsComponentData.valueTwo}
        actions={{twoBarsClick: twoBarsClickSpy}}
      />
    );

    //when
    clickRightBar(wrapper);

    //then
    expect(twoBarsClickSpy).toHaveBeenCalledWith(RIGHT_BAR);
    expect(twoBarsClickSpy).not.toHaveBeenCalledWith(LEFT_BAR);
  })

  it('should handle bar values are too big', function () {
    //when
    const twoBarsClickSpy = jest.fn();
    const wrapper = mount(
      <TwoBars
        valueOne={MAX_VALUE + 1}
        valueTwo={MAX_VALUE + 1}
        actions={{twoBarsClick: twoBarsClickSpy}}
      />
    );

    //then
    expect(wrapper.find('EmptyContent').text()).toBe(TOO_BIG_DATA_MESSAGE);
  })
});
