import React from 'react';

export interface CartItem extends Item {
    amount: number;
}

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item: Item) => {},
    removeItem: (id: string) => {},
});

export default CartContext;
