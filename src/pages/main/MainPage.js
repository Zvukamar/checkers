import { useState } from 'react';

import Board from '../../components/Board';
import Controller from "../../components/Controller";
import { createBoard } from '../../utilities/helpers';
import styles from './MainPage.module.css';

const MainPage = (props) => {
    const [board, setBoard] = useState(createBoard());

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