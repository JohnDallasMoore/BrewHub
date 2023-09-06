/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, createContext, useMemo, useCallback, useState } from "react";
import { PropTypes } from 'prop-types'

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        loggedIn: false
    })

    const login = useCallback(() => setUser({ loggedIn: true }), [])
    const logout = useCallback(() => setUser({ loggedIn: false }), [])

    const value = useMemo(() => ({
        login,
        logout,
        user
    }), [login, logout, user])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export {
    useUserContext,
    UserContextProvider
}