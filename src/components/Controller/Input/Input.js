import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(({ title, ...props }, ref) => {
    return (
        <div className={styles.container}>
            <label htmlFor={title}>{title}</label>
            <input
                {...props}
                name={title}
                ref={ref}
            />
        </div>
    )
});

export default Input;