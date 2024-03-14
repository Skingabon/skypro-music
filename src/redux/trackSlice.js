import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name: "track",
    initialState: {
        currentTrack: null,
        currentPlayList: [],

    },
    reducers: {
        //метод 
        //state - состояние
        //action - то что принимаем
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload.track
            state.currentPlayList = action.payload.tracks

        },
        
    }
})
export const {setCurrentTrack} = trackSlice.actions

export const trackReducer = trackSlice.reducer



