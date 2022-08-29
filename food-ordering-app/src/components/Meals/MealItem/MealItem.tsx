import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

type MealItemProps = {
    title: string;
    description: string;
    price: number;
    id: string;
};

const MealItem = (props: MealItemProps) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    );
};
export default MealItem;
