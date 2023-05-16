import {INPUT_VALUE} from '../type/index';
const initialState = {
  input: '',
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      console.log('reducer', action.payload);
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};
export default inputReducer;
