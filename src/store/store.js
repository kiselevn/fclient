import { createStore } from 'redux';

import rootReducer from './reducers';

const configureStore = (initialState) => {
  const newStore = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: {
          options: {
            map: true,
          },
        },
      })
  );

  return newStore;
};

const store = configureStore();

export default store;
