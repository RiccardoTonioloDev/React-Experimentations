import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
    const totalAmount = useSelector((state) => state.cart.totalQuantity);
    return (
        <button onClick={props.onClick} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalAmount}</span>
        </button>
    );
};

export default CartButton;
