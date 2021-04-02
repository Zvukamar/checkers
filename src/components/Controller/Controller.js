import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { BOARD_SIZE } from '../../utilities/constances';
import styles from './Controller.module.css';
import Input from './Input';
import { isValid } from './validations';
import * as Strings from '../../utilities/strings';
import { ErrorActions } from '../../store/actions';

const Controller = React.memo(({ currentTurn, setCurrentTurn, handleOnAdd, handleOnRemove }) => {
    const dispatch = useDispatch();

    const rowRef = useRef(null);
    const colRef = useRef(null);

    const getValues = (e) => {
        e.preventDefault();
        const rowIndex = +rowRef.current.value;
        const colIndex = +colRef.current.value;
        return [rowIndex, colIndex];
    }

    const handleAdd = (e) => {
        const values = getValues(e);
        const error = isValid(values);
        if (error) return dispatch(ErrorActions.showErrorMessage(error));

        handleOnAdd(values);
    }

    const handleRemove = (e) => {
        const values = getValues(e);
        const error = isValid(values);
        if (error) return dispatch(ErrorActions.showErrorMessage(error));

        handleOnRemove(values);
    }

    const onChangeCurrentTurn = (e) => {
        setCurrentTurn(e.target.value)
    }

    return (
        <form className={styles.container}>
            <Input
                title={Strings.c_row}
                type='number'
                min={0}
                max={BOARD_SIZE - 1}
                ref={rowRef}
            />
            <Input
                title={Strings.c_col}
                type='number'
                min={0}
                max={BOARD_SIZE - 1}
                ref={colRef}
            />
            <Input
                title={Strings.c_player_one}
                type='radio'
                value={Strings.c_player_one}
                checked={currentTurn === Strings.c_player_one}
                onChange={onChangeCurrentTurn}
            />
            <Input
                title={Strings.c_player_two}
                type='radio'
                value={Strings.c_player_two}
                checked={currentTurn === Strings.c_player_two}
                onChange={onChangeCurrentTurn}
            />

            {/* Add Button */}
            <span className={styles.button}>
                <Button
                    onClick={handleAdd}
                    variant="outlined"
                    color="primary"
                >
                    {Strings.c_add}
                </Button>
            </span>

            {/* Remove Button */}
            <span className={styles.button}>
                <Button
                    onClick={handleRemove}
                    variant="outlined"
                    color="primary"
                >
                    {Strings.c_remove}
                </Button>
            </span>
        </form>
    )
});

export default Controller;