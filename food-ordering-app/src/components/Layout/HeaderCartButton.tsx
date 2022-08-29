import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

type HeaderCartButtonProps = {
    onClick: () => void;
};

const HeaderCartButton = (props: HeaderCartButtonProps) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};
export default HeaderCartButton;
