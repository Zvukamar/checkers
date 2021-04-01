import React from 'react';
import styles from './Input.module.css';

const Input = React.memo(React.forwardRef(({ title, ...props }, ref) => {
    return (
        <div className={styles.container}>
            <label
                className={styles.title}
                htmlFor={title}>
                {title}
            </label>
            <input
                className={styles.input_field}
                {...props}
                name={title}
                ref={ref}
            />
        </div>
    )
}));

export default Input;