import * as types from './errorsTypes';

const showErrorMessage = (message) => ({
    type: types.SHOW_ERROR_MESSAGE,
    message
});

const hideErrorMessage = (message) => ({
    type: types.SHOW_ERROR_MESSAGE,
    message
});