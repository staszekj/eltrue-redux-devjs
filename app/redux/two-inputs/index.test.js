import twoInputsReducer, {
  initState,
  twoInputsChange,
  twoInputsChangedDelayed,
  selectValueOne,
  selectValueTwo,
  TWO_INPUTS_CHANGE_DELAYED
} from 'app/redux/two-inputs'
import twoInputsData from 'app/redux/two-inputs/index.test.data'

describe('two-inputs redux', function () {
  it('should handle TWO_INPUTS/change action', function () {
    //given
    const action = twoInputsChange(twoInputsData.valueOne, twoInputsData.valueTwo);

    //when
    const newState = twoInputsReducer(undefined, action);
    const newTotalState = {
      twoInputs: newState
    };

    //then
    expect(selectValueOne(newTotalState)).toBe(twoInputsData.valueOne);
    expect(selectValueTwo(newTotalState)).toBe(twoInputsData.valueTwo);

  });

  it('should return the same state for unknow action', function () {
    //given
    const oldState = {
      twoInputs: twoInputsData
    };
    const dummyAction = {
      type: 'DUMMY'
    };

    //when
    const newState = twoInputsReducer(oldState, dummyAction);

    //then
    expect(oldState).toEqual(newState);
  });

  it('should have initialized state', function () {
    //given
    const dummyAction = {
      type: 'DUMMY'
    };

    //when
    const newState = twoInputsReducer(undefined, dummyAction);

    //then
    const newTotalState = {
      twoInputs: newState
    };

    expect(selectValueOne(newTotalState)).toBe(initState.valueOne);
    expect(selectValueTwo(newTotalState)).toBe(initState.valueTwo);
  });

  it('should create twoInputChangedDelayed action', function () {
    //when
    const actionObject = twoInputsChangedDelayed(10, 100);

    //then
    expect(actionObject).toEqual({
      type: TWO_INPUTS_CHANGE_DELAYED,
      payload: {
        valueOne: '10',
        valueTwo: '100'
      }
    })
  });

  it('should handle twoInputChangedDelayed action', function () {
    //given
    const valueOne = 10;
    const valueTwo = 100;
    const action = twoInputsChangedDelayed(valueOne, valueTwo);

    //when
    const newState = twoInputsReducer(twoInputsData, action);

    //then
    expect(newState.valueOne).toBe(valueOne.toString());
    expect(newState.valueTwo).toBe(valueTwo.toString());
  })
});
