import * as types from './errorsTypes';

const INITIAL_STATE = {
    visible: null,
    message: ''
};

const errorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SHOW_ERROR_MESSAGE: {
            return {
                ...state,
                message: action.message,
                visible: true
            };
        }
        case types.HIDE_ERROR_MESSAGE: {
            return {
                ...state,
                visible: false
            };
        }
        default: {
            return state;
        }
    }
}

export default errorsReducer;