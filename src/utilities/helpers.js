import { BOARD_SIZE } from './constances';

export const createBoard = () => {
    return Array(BOARD_SIZE).fill(null).map(_ => Array(BOARD_SIZE).fill(null));
}

