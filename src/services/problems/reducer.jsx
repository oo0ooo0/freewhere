import { SIMILLAR_CLICK, DELETE_CLICK } from './actions';

const initialState = {};

export function problemReducer(state = initialState, action) {
  switch (action.type) {
    case SIMILLAR_CLICK: {
      return state;
    }
    case DELETE_CLICK: {
      return state;
    }
    default:
      return state;
  }
}
