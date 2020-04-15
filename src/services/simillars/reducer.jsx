import { ADD_CLICK, CHANGE_CLICK } from './actions';

const initialState = {};

export function simillarReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLICK: {
      return state;
    }
    case CHANGE_CLICK: {
      return state;
    }
    default:
      return state;
  }
}
