import React from 'react';
import { CartType } from './CartProvider';

export interface CartItem extends Item {
    amount: number;
}
interface CartTypeContext extends CartType {
    addItem: (item: CartItem) => void;
    removeItem: (item: CartItem) => void;
}
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
} as CartTypeContext);

export default CartContext;
