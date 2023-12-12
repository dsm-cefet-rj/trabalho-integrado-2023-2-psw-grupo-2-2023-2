import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentToken: null
});

export const loginServer = createAsyncThunk(
    'users/loginServer',
    async (login) => {
        const response = await axios.post("http://localhost:5000/user/login", login);
        return response.data;
});

export const signupUser = createAsyncThunk(
    'users/signupUser',
    async (user) => {
        const response = await axios.post("http://localhost:5000/user/signup", user);
        return response;
});

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginServer.pending, (state) => {
                state.status = 'trying_login';
            })
            .addCase(loginServer.fulfilled, (state, action) => {
                state.status = 'logged_in';
                loginAdapter.addOne(state, action.payload);
                state.currentToken = action.payload.token;
            })
            .addCase(signupUser.pending, (state) => {
                state.status = 'trying_signup';
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.status = 'signup_successful';
                loginAdapter.addOne(state, action.payload);
                state.currentToken = action.payload.token;
            });
    },
});

export default loginSlice.reducer;

export const {
    selectAll: selectAllLogin,
} = loginAdapter.getSelectors(state => state.login);