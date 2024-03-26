import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name: "track",
    initialState: {
        currentTrack: null,
        currentPlayList: [],
        isShuffle: false,
        initialPlaylist: [],
        isPlaying: false,


    },
    reducers: {
        //метод 
        //state - состояние
        //action - то что принимаем

clearCurentTrack: (state) => {
  state.currentTrack = null;  
},

        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },

        setCurrentTrack: (state, action) => {
            state.isPlaying = true;
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
export const { clearCurrentTrack, setCurrentTrack, setNextTrack, setPrevTrack, setToggleShufTrack, setIsPlaying } = trackSlice.actions

export const trackReducer = trackSlice.reducer





