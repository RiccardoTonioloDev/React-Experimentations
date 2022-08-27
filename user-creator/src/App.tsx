import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export type User = {
    username: string;
    age: string;
};

function App() {
    const [users, setUsers] = useState<User[]>([]);

    const onAddUser = (user: User) => {
        setUsers((prevState) => [...prevState, user]);
    };

    return (
        <div>
            <AddUser onAddUser={onAddUser} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
