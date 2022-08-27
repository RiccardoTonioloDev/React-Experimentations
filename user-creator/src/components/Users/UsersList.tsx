import Card from '../UI/Card';
import styles from './UserList.module.css';
type UserListProps = {
    users: { username: string; age: string }[];
};

const UsersList = (props: UserListProps) => {
    return (
        <>
            {props.users.length > 0 ? (
                <Card className={styles.users}>
                    <ul>
                        {props.users.map((user) => (
                            <li key={Math.random()}>
                                {user.username} ({user.age} years old)
                            </li>
                        ))}
                    </ul>
                </Card>
            ) : (
                ''
            )}
        </>
    );
};
export default UsersList;
