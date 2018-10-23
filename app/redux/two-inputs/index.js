export const TWO_INPUTS_CHANGE = 'TWO_INPUTS/change';

// Action Creators
export const twoInputsChange = (valueOne, valueTwo, result) =>
  ({type: TWO_INPUTS_CHANGE, payload: {valueOne, valueTwo, result}});


// Int state
const initState = {
  valueOne: 60,
  valueTwo: 40,
  result: 100

};

// Reducer
export default (state = initState, action) => {
  switch (action.type) {
    case TWO_INPUTS_CHANGE:
      return {
        ...state,
        inputOne: action.payload.inputOne,
        inputTwo: action.payload.inputOne,
        result: action.payload.result
      };
    default:
      return state;
  }
}
