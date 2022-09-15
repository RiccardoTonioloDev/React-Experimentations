import classes from './Card.module.css';
import { ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
};

function Card(props: CardProps) {
    return <div className={classes.card}>{props.children}</div>;
}

export default Card;
