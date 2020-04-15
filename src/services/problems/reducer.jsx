import { SET_ACTIVE_ITEM, SIMILLAR_CLICK, DELETE_CLICK, LOAD_PROBLEMS } from './actions';

const initialState = { items: [] };

export function problemReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROBLEMS: {
      return {
        ...state,
        items: action.payload.data.map((item) => ({ ...item, isActive: false })),
      };
    }
    case SET_ACTIVE_ITEM: {
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      });
      return {
        items: newItems,
      };
    }

    default:
      return state;
  }
}
