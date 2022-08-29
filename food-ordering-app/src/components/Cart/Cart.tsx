import classes from './Cart.module.css';
import Modal from '../UI/Modal';

type CartProps = {
    onClose: () => void;
};

const Cart = (props: CartProps) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(
                (item) => {
                    return <li key={item.id}>{item.name}</li>;
                }
            )}
        </ul>
    );

    return (
        <Modal onClick={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button
                    onClick={props.onClose}
                    className={classes['button--alt']}
                >
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
export default Cart;
