export const TWO_INPUTS_CHANGE = 'TWO_INPUTS/change';

const convertToString = val => val + '';

// Action Creators
export const twoInputsChange = (valueOne, valueTwo) =>
  ({
    type: TWO_INPUTS_CHANGE,
    payload: {
      valueOne: convertToString(valueOne),
      valueTwo: convertToString(valueTwo)
    }
  });

// Selectors
export const selectValueOne = state => state.twoInputs.valueOne;
export const selectValueTwo = state => state.twoInputs.valueTwo;


// Int state
const initState = {
  valueOne: '60',
  valueTwo: '40'
};

// Reducer
export default (state = initState, action) => {
  switch (action.type) {
    case TWO_INPUTS_CHANGE:
      return {
        ...state,
        valueOne: action.payload.valueOne,
        valueTwo: action.payload.valueTwo
      };
    default:
      return state;
  }
}
