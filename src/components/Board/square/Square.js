import PropTypes from 'prop-types';

import styles from './Square.module.css';

const getClassName = (index) => {
    return index % 2 === 0 ? styles.even_square : styles.odd_square;
}

const BoardSquare = ({ index }) => {
    return (
        <div className={getClassName(index)} />
    )
}

export default BoardSquare;

BoardSquare.propTypes = {
    index: PropTypes.number.isRequired,
};