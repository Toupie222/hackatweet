import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {token:null}
};

export const usersSlice = createSlice({
 name: 'users',

  initialState,
 reducers: {
   addUserInfo: (state, action) => {
     state.value.token = action.payload.token;
   },
 },
});

export const { addUserInfo } = usersSlice.actions;
export default usersSlice.reducer;