import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import { User } from '../../App';
import ErrorModal from '../UI/ErrorModal';
type Error = {
    title: string;
    message: string;
};

type AddUserProps = {
    onAddUser: (user: User) => void;
};
const AddUser = (props: AddUserProps) => {
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<Error>();

    const addUserHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredName = usernameInputRef.current!.value;
        const enteredAge = ageInputRef.current!.value;
        if (!enteredAge || +enteredAge <= 0) {
            setError({
                title: 'Incorrect age.',
                message: 'You passed an incorrect or invalid age.',
            });
            return;
        }
        if (!enteredName) {
            setError({
                title: 'Incorrect username.',
                message: 'You passed an incorrect or invalid username.',
            });
            return;
        }
        const user: User = {
            username: enteredName,
            age: enteredAge,
        };
        usernameInputRef.current!.value = '';
        ageInputRef.current!.value = '';
        props.onAddUser(user);
    };
    const errorChangeHandler = () => {
        setError(undefined);
    };

    return (
        <>
            {error ? (
                <ErrorModal
                    onClick={errorChangeHandler}
                    title={error.title}
                    message={error.message}
                />
            ) : (
                ''
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={usernameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" ref={ageInputRef} />
                    <Button type="submit" onClick={addUserHandler}>
                        Add User
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
