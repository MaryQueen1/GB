import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(name: "Guest")

    const changeUserName = (name) => {
        setUser({name})
    }

    return (
        <UserContext.Provider value={{user, changeUserName}}>
            {children}
        </UserContext.Provider>
    )
}