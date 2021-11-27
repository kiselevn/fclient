import * as statusActions from './actions';

const initialState = {
  status: null,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case statusActions.GET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
