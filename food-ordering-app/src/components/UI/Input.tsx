import classes from './Input.module.css';
import React, { ForwardedRef } from 'react';

type InputProps = {
    input: {
        id: string;
        [props: string]: string;
    };
    label: string;
};

const Input = React.forwardRef(
    (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input ref={ref} {...props.input} />
            </div>
        );
    }
);

export default Input;
