import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorActions } from '../../store/actions';
import styles from './ErrorSnackbar.module.css';

const TIME_OUT_ANIMATION_HIDE = 2000;

const ErrorSnackbar = () => {
    const { message, visible } = useSelector(state => state.errors);
    const dispatch = useDispatch();

    const onClose = useCallback(() => {
        dispatch(ErrorActions.hideErrorMessage());
    }, [dispatch]);

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                onClose();
            }, TIME_OUT_ANIMATION_HIDE);
        }
    }, [visible, onClose]);

    // Initial render
    if (visible === null) return null;

    return (
        <div className={`${styles.container} ${visible ? styles.popup_show : styles.popup_hide}`}>
            <div className={styles.message_text}>{message}</div>
        </div>
    );
}

export default ErrorSnackbar;