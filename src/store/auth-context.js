import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {} 

})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeUserLoggedInfo = localStorage.getItem("isLoggedIn");

        if (storeUserLoggedInfo === "1") {
          setIsLoggedIn(true);
        }
      }, []);


    const logOutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }

    const loginHander = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }
    return (<AuthContext.Provider value = {{isLoggedIn: isLoggedIn, onLogout: logOutHandler, onLogin: loginHander}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContext;