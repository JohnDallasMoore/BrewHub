import { useContext, createContext, useMemo, useCallback, useState } from "react";
import { PropTypes } from 'prop-types'

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        // Any other user-related state can be stored here
        loggedIn: false
    })

    // useCallback so these functions are never needlessly re-computed
    // https://react.dev/reference/react/useCallback
    const login = useCallback(() => setUser({ loggedIn: true }), [])
    const logout = useCallback(() => setUser({ loggedIn: false }), [])

    // useMemo so the context values are only re-computed when necessary 
    const value = useMemo(() => ({
        login,
        logout,
        user
    }), [login, logout, user])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

/* 
Custom hook so we don't have to import both useContext and UserContext
every time we want to use the user context
*/
const useUserContext = () => useContext(UserContext);

// Runtime type validation for props
// No longer used often because TypeScript
UserContextProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export {
    useUserContext,
    UserContextProvider
}