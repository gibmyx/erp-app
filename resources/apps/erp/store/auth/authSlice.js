import { createSlice } from '@reduxjs/toolkit';

export const TYPE_CHECKING = "checking"
export const TYPE_AUTHENTICATED = "authenticated"
export const TYPE_NOT_AUTHENTICATED = "not-authenticated"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        errorMessage: null,
        successMessage: null,
        status: TYPE_CHECKING, // 'checking', 'authenticated','not-authenticated',
        user: {},
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = TYPE_CHECKING;
            state.user   = {};
            state.errorMessage = null;
        },
        onLogin: ( state, { payload }) => {
            state.status = TYPE_AUTHENTICATED;
            state.user = payload;
            state.errorMessage = null;
        },
        onLogout: ( state, { payload } ) => {
            state.status = TYPE_NOT_AUTHENTICATED;
            state.user   = {};
            state.errorMessage = payload;
        },
        onSuccesssMessage: ( state, { payload } ) => {
            state.successMessage = payload;
        },
        onClearMessage: ( state) => {
            state.errorMessage = null;
            state.successMessage = null;
        }
    }
});

export const {onChecking, onLogin, onLogout, onClearMessage, onSuccesssMessage} = authSlice.actions;
