import Square from './Square';
import styles from './Board.module.css';

const Board = ({ board }) => {
    return (
        <div className={styles.container}>
            {board.map((row, i1) => {
                return (
                    <div key={i1} className={styles.row}>
                        {row.map((square, i2) => (
                            <Square
                                key={`${i1}${i2}`}
                                index={i1 + i2}
                                isChecked={!!square}
                            />
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default Board;