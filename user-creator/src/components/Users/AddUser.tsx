import React, { useState } from 'react';
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
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState<Error>();

    const addUserHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (!age || +age <= 0) {
            setError({
                title: 'Incorrect age.',
                message: 'You passed an incorrect or invalid age.',
            });
            return;
        }
        if (!username) {
            setError({
                title: 'Incorrect username.',
                message: 'You passed an incorrect or invalid username.',
            });
            return;
        }
        const user: User = {
            username: username,
            age: age,
        };
        setAge('');
        setUsername('');
        props.onAddUser(user);
    };
    const usernameChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };
    const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
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
                    <input
                        value={username}
                        type="text"
                        id="username"
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        value={age}
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit" onClick={addUserHandler}>
                        Add User
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
