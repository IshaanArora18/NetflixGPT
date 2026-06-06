import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name: 'gpt',
    initialState:{
        isGptSearchEnabled: false,
        gptSearchResults: null,
    },
    reducers:{
        toggleGptSearch: (state) => {
            state.isGptSearchEnabled = !state.isGptSearchEnabled;
        },
        addGPTSearchResults:(state,action)=>{
            state.gptSearchResults = action.payload;
        },
        clearGPTSearchResults:(state) => {
            state.gptSearchResults = null;
        },
        setGPTToggleState:(state,action) => {
            state.isGptSearchEnabled = action.payload;
        }
    }
})

export const { toggleGptSearch, addGPTSearchResults, clearGPTSearchResults, setGPTToggleState } = gptSlice.actions;
export default gptSlice.reducer;