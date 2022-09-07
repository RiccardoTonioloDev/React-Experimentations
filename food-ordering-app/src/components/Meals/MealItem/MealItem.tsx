import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

interface MealItemProps extends Item {}

const MealItem = (props: MealItemProps) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            description: '',
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
        </li>
    );
};
export default MealItem;
