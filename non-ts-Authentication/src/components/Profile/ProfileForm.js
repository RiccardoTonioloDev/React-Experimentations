import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import { useHistory } from 'react-router-dom';

const API_KEY = 'INSERT_API_KEY_HERE';
const ProfileForm = () => {
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' +
                API_KEY,
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            //assumption: always succeeds.
            history.replace('/');
        });
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    minLength="7"
                    ref={newPasswordInputRef}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
