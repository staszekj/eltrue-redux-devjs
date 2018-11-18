import {twoBarsClick, LEFT_BAR, RIGHT_BAR, INC_VALUE} from './index'
import reduxTestData from './index.test.data'
import {TWO_INPUTS_CHANGE_DELAYED} from "app/redux/two-inputs";

describe('Actions', function () {
  it('should create action object for leftClick', function (done) {
    //given
    const dispatch = jest.fn();
    const getState = jest.fn().mockReturnValue(reduxTestData);

    //when
    twoBarsClick(LEFT_BAR)(dispatch, getState);

    //then
    const expectedValueOne = parseInt(reduxTestData.twoInputs.valueOne) + INC_VALUE + '';
    const expectedValueTwo = reduxTestData.twoInputs.valueTwo;
    setTimeout(() => {
      expect(dispatch).toHaveBeenCalledWith({
        "payload":
          {
            "valueOne": expectedValueOne,
            "valueTwo": expectedValueTwo
          },
        "type": TWO_INPUTS_CHANGE_DELAYED
      });
      done();
    }, 600);
  });

  it('should create action object for rightClick', function (done) {
    //given
    const dispatch = jest.fn();
    const getState = jest.fn().mockReturnValue(reduxTestData);

    //when
    twoBarsClick(RIGHT_BAR)(dispatch, getState);

    //then
    const expectedValueOne = reduxTestData.twoInputs.valueOne;
    const expectedValueTwo = parseInt(reduxTestData.twoInputs.valueTwo) + INC_VALUE + '';
    setTimeout(() => {
      expect(dispatch).toHaveBeenCalledWith({
        "payload":
          {
            "valueOne": expectedValueOne,
            "valueTwo": expectedValueTwo
          },
        "type": TWO_INPUTS_CHANGE_DELAYED
      });
      done();
    }, 600);
  });
});
