import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name: "track",
    initialState: {
        currentTrack: null,
        currentPlayList: [],
        isShuffle: false,
        initialPlaylist: [],
    },
    reducers: {
        //метод 
        //state - состояние
        //action - то что принимаем
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload.track
            state.currentPlayList = action.payload.tracks
            state.initialPlaylist = action.payload.tracks

        },
        setNextTrack: (state) => {

            const currentIndexTrack = state.currentPlayList.findIndex((elem) => elem.id === state.currentTrack.id)
            if (currentIndexTrack === state.currentPlayList.length - 1) {
                return
            }
            state.currentTrack = state.currentPlayList[currentIndexTrack + 1]

        },

        setPrevTrack: (state) => {
            const currentIndexTrack = state.currentPlayList.findIndex((elem) => elem.id === state.currentTrack.id)
            if (currentIndexTrack === 0) {
                return
            }
            state.currentTrack = state.currentPlayList[currentIndexTrack - 1]

        },

        setToggleShufTrack: (state) => {
            state.isShuffle = !state.isShuffle
            state.currentPlayList = state.isShuffle ? [...state.currentPlayList].sort(() => Math.random() - 0.5) : state.initialPlaylist
        }
    }
})
export const { setCurrentTrack, setNextTrack, setPrevTrack, setToggleShufTrack } = trackSlice.actions

export const trackReducer = trackSlice.reducer





