import styles from './Button.module.css';
import React, { ReactNode } from 'react';
type ButtonProps = {
    type: string | undefined;
    onClick: (event: React.FormEvent) => void;
    children: ReactNode;
};
const Button = (props: ButtonProps) => {
    return (
        <button
            className={styles.button}
            typeof={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
