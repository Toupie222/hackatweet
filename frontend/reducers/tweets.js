import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: []
};

export const tweetsSlice = createSlice({
 name: 'tweets',

  initialState,
 reducers: {
    setTweets: (state, action) => {
      state.value = action.payload
    },
    addTweets: (state, action) => {
      state.value.push(action.payload)
      state.value = state.value.sort((a,b) => b.date - a.date)
    },
    removeTweet: (state, action) => {
      state.value = state.value.filter((data) => !data.content.toLowerCase().includes(action.payload.toLowerCase()))
    },
 },
});

export const { addTweets,removeTweet,setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;