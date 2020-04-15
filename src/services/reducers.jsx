import { combineReducers } from 'redux';
import { problemReducer } from './problems/reducer';
import { simillarReducer } from './simillars/reducer';

export const rootReducer = combineReducers({
  problems: problemReducer,

  simillars: simillarReducer,
});
