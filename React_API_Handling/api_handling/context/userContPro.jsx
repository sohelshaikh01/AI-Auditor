import React from "react";
import PropTypes from 'prop-types';
import UserContext from "./userContext";


const UserContextProvider = (props) => {
    // All wrap components has access of the context data.
    // We need to wrap it inside the provider

    const [user, setUser] = React.useState(null);

    const userLogin = ({username}) => {
        setUser({username});
    }

    const userLogout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user:user, setUser:setUser, userLogin, userLogout}}>
            {props.children}
        </UserContext.Provider>
    )
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserContextProvider;