import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import Board from '../../components/Board';
import Controller from '../../components/Controller';
import { ErrorActions } from '../../store/actions';
import { createBoard } from '../../utilities/helpers';
import * as Strings from '../../utilities/strings';
import styles from './MainPage.module.css';

const MainPage = (props) => {
    const dispatch = useDispatch();
    const [board, setBoard] = useState(createBoard());
    const [currentTurn, setCurrentTurn] = useState(Strings.c_player_one);

    const handleOnAdd = ([row, col]) => {
        handleButtonClick([row, col], currentTurn);
    }

    const handleOnRemove = ([row, col]) => {
        handleButtonClick([row, col], null);
    }

    const handleButtonClick = useCallback(([row, col], value) => {
        // Optimization
        if (value && board[row][col]) {
            return dispatch(ErrorActions.showErrorMessage(Strings.c_bad_add_to_exists_field));
        } else if (!value && !board[row][col]) {
            return dispatch(ErrorActions.showErrorMessage(Strings.c_bad_remove_from_empty_field));
        }

        const newBoard = JSON.parse(JSON.stringify(board));
        newBoard[row][col] = value;

        setBoard(newBoard);
    }, [board, dispatch]);

    return (
        <div className={styles.container}>
            <Board
                board={board}
            />

            <Controller
                currentTurn={currentTurn}
                setCurrentTurn={setCurrentTurn}
                handleOnAdd={handleOnAdd}
                handleOnRemove={handleOnRemove}
            />
        </div>
    )
}

export default MainPage;