import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { FormEvent, useContext, useRef, useState } from 'react';
import cartContext from '../../../store/cart-context';

type MealItemFormProps = {
    id: string;
    onAddToCart: (amount: number) => void;
};

const MealItemForm = (props: MealItemFormProps) => {
    const cartCtx = useContext(cartContext);
    const amountInputRef = useRef<HTMLInputElement>(null);
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current!.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
                label="Amount"
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};
export default MealItemForm;
