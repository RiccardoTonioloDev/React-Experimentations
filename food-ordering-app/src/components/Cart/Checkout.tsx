import classes from './Checkout.module.css';
import { FormEvent, useRef, useState } from 'react';

type CheckoutProps = {
    onCancel: () => void;
    onConfirm: (userData: {
        name: string;
        street: string;
        city: string;
        postalCode: string;
    }) => void;
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
        const enteredStreet = streetInputRef.current!.value;
        const enteredPostalCode = postalInputRef.current!.value;
        const enteredCity = cityInputRef.current!.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
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

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        });
    };

    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
        formInputsValidity.street ? '' : classes.invalid
    }`;
    const postalCodeControlClasses = `${classes.control} ${
        formInputsValidity.postalCode ? '' : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
        formInputsValidity.city ? '' : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" id="name" />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input ref={streetInputRef} type="text" id="street" />
                {!formInputsValidity.street && (
                    <p>Please enter a valid street!</p>
                )}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input ref={postalInputRef} type="text" id="postal" />
                {!formInputsValidity.postalCode && (
                    <p>Please enter a valid postal code!</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input ref={cityInputRef} type="text" id="city" />
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
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
