import React from 'react';
import {mount} from 'enzyme';
import MainApp from 'app/containers/main-app';
import {Provider} from 'react-redux';
import reduxTestData from './index.test.data';
import {create} from 'app/redux/index'
import {clickLeftBar} from 'app/components/two-bars/index.test'
import {INC_VALUE} from "app/actions";
import {selectValueOneAsNumber} from 'app/selectors'
import {input1Change, input2Change} from "app/components/two-inputs/index.test";

describe('Main container', function () {
  it('should render header', function () {
    //given
    const wrapper = mount(
      <Provider store={create(reduxTestData)}>
        <MainApp/>
      </Provider>
    );

    //when
    input1Change(wrapper, 150);
    input2Change(wrapper, 50);

    //then
    expect(wrapper.find('span.header-value-1').text()).toBe('150');
    expect(wrapper.find('span.header-value-2').text()).toBe('50');
    expect(wrapper.find('span.header-value-result').text()).toBe('200');
  });

  it('should handle left bar click', function (done) {
    //given
    const wrapper = mount(
      <Provider store={create(reduxTestData)}>
        <MainApp/>
      </Provider>
    );

    //when
    clickLeftBar(wrapper);

    //then
    setTimeout(function () {
      wrapper.update();
      const expectedIncValue = selectValueOneAsNumber(reduxTestData) + INC_VALUE;
      expect(wrapper.find('BarContent .value1').text()).toBe('' + expectedIncValue);
      done();
    }, 600)
  });
});
