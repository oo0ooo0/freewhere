import { ADD_CLICK, CHANGE_CLICK, LOAD_SIMILARS } from './actions';

const initialState = { items: [] };

export function similarReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SIMILARS: {
      return {
        ...state,
        items: action.payload.data,
      };
    }

    default:
      return state;
  }
}
