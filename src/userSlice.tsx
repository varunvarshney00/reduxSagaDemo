import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    user: null,
    loading: false,
    error: null,
};



const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        userFetchRequested: (state) => {
            state.loading = true;
            state.error = null;
        },

        userFetchSucceeded: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },

        userFetchFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});



export const { userFetchRequested, userFetchSucceeded, userFetchFailed } = userSlice.actions;

export default userSlice.reducer;

