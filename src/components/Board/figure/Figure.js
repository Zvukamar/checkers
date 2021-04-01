import styles from './Figure.module.css';
import * as Strings from '../../../utilities/strings';

const Figure = ({ playerTurn }) => {
    return (
        <div className={playerTurn === Strings.c_player_one ? styles.playerOne : styles.playerTwo} />
    )
}

export default Figure;