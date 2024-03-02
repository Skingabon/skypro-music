

import React, { createContext, useContext, useState } from "react";

export const TrackContext = createContext(null);
export const useTrackContext = () => {
return useContext(TrackContext)
};

export const TrackProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [user, setUser] = useState(localStorage.getItem("token"));

    return <TrackContext.Provider value={{ currentTrack, setCurrentTrack, user, setUser }}>{children}</TrackContext.Provider>
};


