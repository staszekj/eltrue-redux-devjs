import {selectValueOne, selectValueTwo, selectResult} from "app/redux/two-inputs";

const parseValue = valueAsStr => parseInt(valueAsStr);
const calculateResult = (valueOneStr, valueTwoStr) => parseInt(valueOneStr) + parseInt(valueTwoStr);

export const selectValueOneAsNumber = state => parseValue(selectValueOne(state));
export const selectValueTwoAsNumber = state => parseValue(selectValueTwo(state));
export const selectResultAsNumber = state => calculateResult(selectValueOne(state), selectValueTwo(state));
export const isResultMod10 = state => !isNaN(selectResultAsNumber(state)) && selectResultAsNumber(state) % 10 === 0;

