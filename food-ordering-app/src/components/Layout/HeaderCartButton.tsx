import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
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

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
export default HeaderCartButton;
