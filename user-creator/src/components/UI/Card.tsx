import { ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
    children: ReactNode;
    className: string;
};
const Card = (props: CardProps) => {
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    );
};
export default Card;
