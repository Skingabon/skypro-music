

import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext(true);
export const useUserContext = () => {
return useContext(UserContext)
};

function getUserFromLS() {
    try {
return JSON.parse(localStorage.getItem("user"));
    }
    catch {
return null
    }
}

export const UserProvider = ({ children }) => {
    // const [currentTrack, setCurrentTrack] = useState(null);
    const [user, setUser] = useState(getUserFromLS());

function setLSandState(userData) {
    localStorage.setItem('user', JSON.stringify(userData))
setUser(userData)
}

function resetUser() {
    localStorage.removeItem('user')
setUser(null)
}


    return <UserContext.Provider 
    value={{user, setUser, setLSandState, resetUser }}>{children}
    </UserContext.Provider>
};


