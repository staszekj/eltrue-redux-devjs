export const TWO_INPUTS_CHANGE = 'TWO_INPUTS/change';

// Action Creators
export const twoInputsChange = (valueOne, valueTwo) =>
  ({
    type: TWO_INPUTS_CHANGE,
    payload: {
      valueOne,
      valueTwo,
      result: parseInt(valueOne) + parseInt(valueTwo) + ''
    }
  });

// Selectors
export const selectTwoInputs = state => state.twoInputs;
export const selectValueOne = state => selectTwoInputs(state).valueOne;
export const selectValueTwo = state => selectTwoInputs(state).valueTwo;
export const selectResult = state => selectTwoInputs(state).result;


// Int state
const initState = {
  valueOne: '60',
  valueTwo: '40',
  result: '100'
};

// Reducer
export default (state = initState, action) => {
  switch (action.type) {
    case TWO_INPUTS_CHANGE:
      return {
        ...state,
        valueOne: action.payload.valueOne,
        valueTwo: action.payload.valueTwo,
        result: action.payload.result
      };
    default:
      return state;
  }
}
