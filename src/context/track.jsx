

import React, { createContext, useContext, useState } from "react";

export const TrackContext = createContext(null);
export const useTrackContext = () => {
return useContext(TrackContext)
};

export const TrackProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);

    return <TrackContext.Provider value={{ currentTrack, setCurrentTrack}}>{children}</TrackContext.Provider>
};

