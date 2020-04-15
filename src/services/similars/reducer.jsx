import {
  ADD_CLICK,
  CHANGE_CLICK,
  LOAD_SIMILARS,
  PROBLEM_TO_SIMILAR,
  REMOVE_SIMILAR,
} from './actions';

const initialState = { items: [] };

export function similarReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SIMILARS: {
      return {
        ...state,
        items: action.payload.data,
      };
    }
    case REMOVE_SIMILAR: {
      const { payload } = action;

      const items = state.items.filter((item) => item.id !== payload.id);

      return {
        ...state,
        items,
      };
    }
    case PROBLEM_TO_SIMILAR: {
      const items = state.items.map((item) => {
        if (item.id === action.payload.similarId) {
          return action.payload.replaceSimilar;
        }
        return item;
      });
      return {
        ...state,
        items,
      };
    }

    default:
      return state;
  }
}
