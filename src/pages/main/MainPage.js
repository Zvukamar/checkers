import { useCallback, useState } from 'react';

import Board from '../../components/Board';
import Controller from '../../components/Controller';
import { createBoard } from '../../utilities/helpers';
import styles from './MainPage.module.css';

const MainPage = (props) => {
    const [board, setBoard] = useState(createBoard());

    const handleOnAdd = useCallback(([row, col]) => {
        // Optimization
        if (board[row][col] === 1) return;

        const newBoard = JSON.parse(JSON.stringify(board));;
        newBoard[row][col] = 1;
        setBoard(newBoard);
    }, [board]);

    const handleOnRemove = useCallback(([row, col]) => {
        // Optimization
        if (board[row][col] === null) return;

        const newBoard = JSON.parse(JSON.stringify(board));;
        newBoard[row][col] = null;
        setBoard(newBoard);
    }, [board])

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