import {selectValueOne, selectValueTwo, selectResult} from "app/redux/two-inputs";

const parseValue = valueAsStr => !valueAsStr || isNaN(valueAsStr) ? 0 : parseInt(valueAsStr);

export const selectValueOneAsNumber = state => parseValue(selectValueOne(state));
export const selectValueTwoAsNumber = state => parseValue(selectValueTwo(state));
export const selectResultAsNumber = state => parseValue(selectResult(state));
export const isResultMod10 = state => !isNaN(selectResult(state)) && selectResultAsNumber(state) % 10 === 0;

