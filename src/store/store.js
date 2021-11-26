import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const configureStore = (initialState) => {
  const newStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
  );

  return newStore;
};

const store = configureStore();

export default store;
