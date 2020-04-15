import { combineReducers } from 'redux';
import { problemReducer } from './problems/reducer';
import { similarReducer } from './similars/reducer';

export const rootReducer = combineReducers({
  problems: problemReducer,
  similars: similarReducer,
});
