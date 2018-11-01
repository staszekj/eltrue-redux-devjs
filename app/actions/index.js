import {selectValueTwoAsNumber, selectValueOneAsNumber} from 'app/selectors'
import {twoInputsChange} from 'app/redux/two-inputs'

export const LEFT_BAR = 'LEFT_BAR';
export const RIGHT_BAR = 'RIGHT_BAR';

export const twoBarsClick = barName => (dispatch, getState) => {
  const state = getState();
  let valueOne = selectValueOneAsNumber(state);
  let valueTwo = selectValueTwoAsNumber(state);

  if (barName === LEFT_BAR) {
    valueOne += 50;
  } else if (barName === RIGHT_BAR) {
    valueTwo += 50;
  }

  const actionObject = twoInputsChange(valueOne, valueTwo);

  dispatch(actionObject)
};
