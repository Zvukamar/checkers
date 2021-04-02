import * as types from './errorsTypes';

export const showErrorMessage = (message) => ({
    type: types.SHOW_ERROR_MESSAGE,
    message
});

export const hideErrorMessage = () => ({
    type: types.HIDE_ERROR_MESSAGE
});