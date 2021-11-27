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
    case clientsActions.EDIT_CLIENT_STATUS:
      for (let client of state.clients) {
        if (client[0] === action.payload.key) {
          client[1].status = action.payload.code;
        }
      }

      return {
        ...state,
      };

    default:
      return state;
  }
};
