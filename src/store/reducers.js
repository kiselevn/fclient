import { combineReducers } from 'redux';

import { clientsReducer } from './Clients';
import { statusReducer } from './Status';

const rootReducer = combineReducers({ clientsReducer, statusReducer });

export default rootReducer;
