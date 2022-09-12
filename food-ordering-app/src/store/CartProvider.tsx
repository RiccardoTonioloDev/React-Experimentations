import CartContext, { CartItem } from './cart-context';
import { ReactNode, useReducer } from 'react';

type CartProviderProps = {
    children: ReactNode;
};
export type CartType = {
    items: Array<CartItem>;
    totalAmount: number;
};

const defaultCartState: CartType = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (
    state: CartType,
    action: { type: 'CLEAR' | 'REMOVE' | 'ADD'; item?: CartItem }
) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount =
            state.totalAmount + action.item!.price * action.item!.amount;
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item!.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item!.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item!);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const updatedTotalAmount = state.totalAmount - action.item!.price;
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item!.id
        );
        const oldCartItem = state.items[existingCartItemIndex];
        const newQuantity = oldCartItem.amount;
        let updatedItems;
        if (newQuantity <= 1) {
            updatedItems = state.items.filter(
                (item) => item.id !== action.item!.id
            );
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        }
        updatedItems = state.items;
        updatedItems[existingCartItemIndex] = {
            ...oldCartItem,
            amount: oldCartItem.amount - 1,
        };
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'CLEAR') {
        return defaultCartState;
    }

    return defaultCartState;
};

const CartProvider = (props: CartProviderProps) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: CartItem) => {
        dispatchCart({ type: 'ADD', item: item });
    };
    const removeItemToCartHandler = (item: CartItem) => {
        dispatchCart({ type: 'REMOVE', item: item });
    };
    const clearCartHandler = () => {
        dispatchCart({ type: 'CLEAR' });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clearCart: clearCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
