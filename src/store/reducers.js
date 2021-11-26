import { combineReducers } from 'redux';

import { clientsReducer } from './Clients';

const rootReducer = combineReducers({ clientsReducer });

export default rootReducer;
