import React from 'react';

const Input = React.forwardRef(({ title, ...props }, ref) => {
    return (
        <div>
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