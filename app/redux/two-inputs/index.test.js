import twoInputsReducer, {initState, twoInputsChange, selectValueOne, selectValueTwo} from 'app/redux/two-inputs'
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

  it('should handle TWO_INPUTS/change action with number type', function () {
    //given
    const action = twoInputsChange(parseInt(twoInputsData.valueOne), parseInt(twoInputsData.valueTwo));

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
  })

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
  })
});
