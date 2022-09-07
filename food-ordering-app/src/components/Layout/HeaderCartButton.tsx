import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext, { CartItem } from '../../store/cart-context';

type HeaderCartButtonProps = {
    onClick: () => void;
};

const HeaderCartButton = (props: HeaderCartButtonProps) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce(
        (curNumber, item: CartItem) => {
            return curNumber + item.amount;
        },
        0
    );
    const [buttonIsHighlighted, setButtonIsHiglighted] = useState(false);

    const { items } = cartCtx;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHiglighted(true);
        const timer = setTimeout(() => {
            setButtonIsHiglighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const btnClasses = `${classes.button} ${
        buttonIsHighlighted ? classes.bump : ''
    }`;

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
export default HeaderCartButton;
