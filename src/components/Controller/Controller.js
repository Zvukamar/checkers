import { useRef } from "react";

import { BOARD_SIZE } from "../../utilities/constances";
import styles from './Controller.module.css';
import Input from "./Input";
import { isValid } from "./validations";
import * as Strings from '../../utilities/strings';

const Controller = ({ handleOnAdd, handleOnRemove }) => {
    const rowRef = useRef(null);
    const colRef = useRef(null);

    const getValues = (e) => {
        e.preventDefault();
        const rowIndex = rowRef.current.value;
        const colIndex = colRef.current.value;
        return [rowIndex, colIndex];
    }

    const handleAdd = (e) => {
        const values = getValues(e);
        const error = isValid(values);
        if (error) return alert(error);

        handleOnAdd(values);
    }

    const handleRemove = (e) => {
        const values = getValues(e);
        const error = isValid(values);
        if (error) return alert(error);

        handleOnRemove(values);
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
            <button onClick={handleAdd}>{Strings.c_add}</button>
            <button onClick={handleRemove}>{Strings.c_remove}</button>
        </form>
    )
}

export default Controller;