import {INPUT_VALUE} from '../type/index';

export function changeInput(input) {
  console.log('action', input);
  return {
    type: INPUT_VALUE,
    payload: input,
  };
}
