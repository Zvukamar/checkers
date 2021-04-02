import { combineReducers } from 'redux';

import errorsReducer from './errors/errorsReducer';

export default combineReducers({
    errors: errorsReducer
});

