import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';

import reduxThunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(rootReducer, /* preload */ enhancer);

export default store;
