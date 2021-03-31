import { BOARD_SIZE } from '../../utilities/constances';
import * as Strings from '../../utilities/strings';

export const isValid = (values) => {
    const [row, column] = values;
    if (!row || row < 0 || row >= BOARD_SIZE) {
        return `${Strings.c_bad_row_idx} ${BOARD_SIZE - 1}`
    } else if (!column || column < 0 || column >= BOARD_SIZE) {
        return `${Strings.c_bad_col_idx} ${BOARD_SIZE - 1}`
    }
    return '';
}