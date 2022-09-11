import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import CartContext, {
    CartItem as CartItemInterface,
} from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

type CartProps = {
    onClose: () => void;
};

const Cart = (props: CartProps) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (item: CartItemInterface) => {
        cartCtx.removeItem(item);
    };
    const cartItemAddHandler = (item: CartItemInterface) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.title}
                        amount={item.amount}
                        price={item.price}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoveHandler.bind(null, item)}
                    ></CartItem>
                );
            })}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    return (
        <Modal onClick={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Modal>
    );
};
export default Cart;
