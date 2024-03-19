

import React, { createContext, useContext, useState } from "react";

export const TrackContext = createContext(null);
export const useTrackContext = () => {
return useContext(TrackContext)
};

// function getUserFromLS() {
//     try {
// return JSON.parse(localStorage.getItem("user"));
//     }
//     catch {
// return null
//     }
// }

export const TrackProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    // const [user, setUser] = useState(getUserFromLS());

// function setLSandState(userData) {
//     localStorage.setItem('user', JSON.stringify(userData))
// setUser(userData)
// }

    return <TrackContext.Provider 
    value={{ currentTrack, setCurrentTrack}}>{children}
    {/* value={{ currentTrack, setCurrentTrack, user, setUser, setLSandState }}>{children} */}
    </TrackContext.Provider>
};


