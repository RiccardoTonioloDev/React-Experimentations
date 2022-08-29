import CartContext from './cart-context';
import { ReactNode } from 'react';

type CartProviderProps = {
    children: ReactNode;
};

const CartProvider = (props: CartProviderProps) => {
    const addItemToCartHandler = (item: Item) => {};
    const removeItemToCartHandler = (id: string) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
