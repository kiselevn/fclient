import * as clientsActions from './actions';

const initialState = {
  clients: null,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case clientsActions.GET_CLIENTS:
      return {
        ...state,
        clients: new Map(Object.entries(action.payload)),
      };

    default:
      return state;
  }
};
