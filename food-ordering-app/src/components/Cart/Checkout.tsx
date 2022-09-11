import classes from './Checkout.module.css';
import { FormEvent, useRef, useState } from 'react';

type CheckoutProps = {
    onCancel: () => void;
};

const isEmpty = (value: string) => {
    return value.trim() === '';
};
const isFiveChars = (value: string) => {
    return value.trim().length === 5;
};

const Checkout = (props: CheckoutProps) => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const streetInputRef = useRef<HTMLInputElement>(null);
    const postalInputRef = useRef<HTMLInputElement>(null);
    const cityInputRef = useRef<HTMLInputElement>(null);

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const confirmHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredName = nameInputRef.current!.value;
        const enteredStreet = nameInputRef.current!.value;
        const enteredPostalCode = nameInputRef.current!.value;
        const enteredCity = nameInputRef.current!.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredName);
        const enteredCityIsValid = !isEmpty(enteredName);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });

        const formIsValid =
            enteredCityIsValid &&
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalCodeIsValid;

        if (!formIsValid) {
            return;
        }
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input ref={streetInputRef} type="text" id="street" />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal Code</label>
                <input ref={postalInputRef} type="text" id="postal" />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input ref={cityInputRef} type="text" id="city" />
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};
export default Checkout;
