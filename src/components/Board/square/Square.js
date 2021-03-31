import PropTypes from 'prop-types';

import Figure from '../Figure';
import styles from './Square.module.css';

const getClassName = (index) => {
    return index % 2 === 0 ? styles.even_square : styles.odd_square;
}

const BoardSquare = ({ index, isChecked }) => {
    return (
        <div className={getClassName(index)}>
            {isChecked && <Figure />}
        </div>
    )
}

export default BoardSquare;

BoardSquare.propTypes = {
    index: PropTypes.number.isRequired,
    isChecked: PropTypes.bool
};