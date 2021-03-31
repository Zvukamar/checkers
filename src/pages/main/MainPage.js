import { useState } from 'react';

import Board from '../../components/Board';
import Controller from "../../components/Controller";
import styles from './MainPage.module.css';

export const _BOARD_SIZE = 8;
const _BOARD = Array(_BOARD_SIZE).fill(null).map(_ => Array(_BOARD_SIZE).fill(null));


const MainPage = (props) => {
    const [board, setBoard] = useState(_BOARD);

    const handleOnAdd = ([row, col]) => {
        const newBoard = [...board];
        newBoard[row][col] = 1;
        setBoard(newBoard)
    }

    const handleOnRemove = ([row, col]) => {
        const newBoard = [...board];
        newBoard[row][col] = null;
        setBoard(newBoard)
    }

    return (
        <div className={styles.container}>
            <Board board={board} />
            <Controller
                handleOnAdd={handleOnAdd}
                handleOnRemove={handleOnRemove}
            />
        </div>
    )
}

export default MainPage;