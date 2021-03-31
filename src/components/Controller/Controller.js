import { useRef } from "react";
import { _BOARD_SIZE } from "../../pages/main/MainPage";

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
        handleOnAdd(values);
    }

    const handleRemove = (e) => {
        const values = getValues(e);
        handleOnRemove(values);
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <form>
                <div>
                    <label>row: </label>
                    <input
                        type='number'
                        min={0}
                        max={_BOARD_SIZE}
                        ref={rowRef}
                    />
                </div>
                <div>
                    <label>column:</label>
                    <input
                        type='number'
                        min={0}
                        max={_BOARD_SIZE}
                        ref={colRef}
                    />
                </div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleRemove}>Remove</button>
            </form>
        </div>
    )
}

export default Controller;