import {
  SET_ACTIVE_ITEM,
  SIMILLAR_CLICK,
  DELETE_CLICK,
  DELETE_PROBLEM,
  LOAD_PROBLEMS,
  ADD_PROBLEM,
  SIMILAR_TO_PROBLEM,
} from './actions';

const initialState = { items: [], selectedId: null };

export function problemReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROBLEMS: {
      const {
        payload: { data: items },
      } = action;

      return {
        ...state,
        items,
      };
    }
    case DELETE_PROBLEM: {
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        selectedId: id === state.selectedId ? null : state.selectedId,
        items: state.items.filter((item) => item.id !== id),
      };
    }
    case ADD_PROBLEM: {
      const { payload } = action;
      const index = state.items.findIndex((item) => item.id == state.selectedId);
      const copied = state.items;
      copied.splice(index + 1, 0, payload);
      return {
        ...state,
        items: copied,
      };
    }
    case SIMILAR_TO_PROBLEM: {
      const items = state.items.map((item) => {
        if (item.id === state.selectedId) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        items,
        selectedId: action.payload.id,
      };
    }
    case SET_ACTIVE_ITEM: {
      const {
        payload: { id },
      } = action;
      return {
        ...state,
        selectedId: id,
      };
    }

    default:
      return state;
  }
}
