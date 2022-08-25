import React, { ReactComponentElement } from 'react';
import './Card.css';

type propsCard = {
    children: ReactComponentElement<any>[];
    className: string;
};

const Card: React.FC<propsCard> = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default Card;
