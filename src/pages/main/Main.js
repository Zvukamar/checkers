import { useState } from "react";

import Board from "../../components/Board"

export const _BOARD_SIZE = 8;
const _BOARD = Array(_BOARD_SIZE).fill(null).map(_ => Array(_BOARD_SIZE).fill(null));


const MainPage = (props) => {
    const [board, setBoard] = useState(_BOARD);

    return (
        <div>
            <Board board={board} />
        </div>
    )
}

export default MainPage;