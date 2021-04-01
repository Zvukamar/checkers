import React from 'react';
import PropTypes from 'prop-types';

import Figure from '../Figure';
import * as Strings from '../../../utilities/strings';
import styles from './Square.module.css';

const getClassName = (index) => {
    return index % 2 === 0 ? styles.even_square : styles.odd_square;
}

const BoardSquare = React.memo(({ index, playerTurn }) => {
    return (
        <div className={getClassName(index)}>
            {playerTurn && <Figure playerTurn={playerTurn} />}
        </div>
    )
});

export default BoardSquare;

BoardSquare.propTypes = {
    index: PropTypes.number.isRequired,
    playerTurn: PropTypes.oneOf([Strings.c_player_one, Strings.c_player_two, null])
};