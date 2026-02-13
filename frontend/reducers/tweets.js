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
    },
    removeTweet: (state, action) => {
      state.value = state.value.filter((data) => !data.content.toLowerCase().includes(action.payload.toLowerCase()))
    },
 },
});

export const { addTweets,removeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;