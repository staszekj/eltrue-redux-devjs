import {selectValueOneAsNumber, selectValueTwoAsNumber} from 'app/selectors'
import {twoInputsChange} from 'app/redux/two-inputs'

export const LEFT_BAR = 'LEFT_BAR';
export const RIGHT_BAR = 'RIGHT_BAR';

export const twoBarsClick = barName => (dispatch, getState) => {
  const state = getState();
  const incValueOne = barName === LEFT_BAR ? 50 : 0;
  const incValueTwo = barName === RIGHT_BAR ? 50 : 0;
  const valueOne = selectValueOneAsNumber(state) + incValueOne;
  const valueTwo = selectValueTwoAsNumber(state) + incValueTwo;

  setTimeout(() => {
    const actionObject = twoInputsChange(valueOne, valueTwo);
    dispatch(actionObject)
  }, 500);
};
