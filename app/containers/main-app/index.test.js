import React from 'react';
import {mount} from 'enzyme';
import MainApp from 'app/containers/main-app';
import {Provider} from 'react-redux';
import reduxTestData from './index.test.data';
import {create} from 'app/redux/index'
import {clickLeftBar} from 'app/components/two-bars/index.test'
import {INC_VALUE} from "app/actions";
import {selectValueOneAsNumber} from 'app/selectors'

describe('Main container', function () {
  it('should render BarContainer with left bar click', function (done) {
    //given
    const store = create(reduxTestData);
    const wrapper = mount(
      <Provider store={store}>
        <MainApp/>
      </Provider>
    );

    //when
    clickLeftBar(wrapper);

    //then
    setTimeout(function () {
      wrapper.update();
      const expectedValue = selectValueOneAsNumber(reduxTestData) + INC_VALUE;
      expect(wrapper.find('BarContent .value1').text()).toBe('' + expectedValue);
      done();
    }, 600)
  });
});
