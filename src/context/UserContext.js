import React, { useState, useEffect } from "react";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();



return (
    <UserContext.Provider
        value={{user, setUser}}
    >
        {children}
    </UserContext.Provider>
);

}

export default UserContext;

export { UserProvider };