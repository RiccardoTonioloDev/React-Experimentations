import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedInLS = localStorage.getItem('isLoggedIn');

        if (isLoggedInLS === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('IsLoggedIn');
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1'); //1 per login; 0 per not-login
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
