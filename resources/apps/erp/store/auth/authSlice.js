import { createSlice } from '@reduxjs/toolkit';

export const TYPE_CHECKING = "checking"
export const TYPE_AUTHENTICATED = "authenticated"
export const TYPE_NOT_AUTHENTICATED = "not-authenticated"
export const TYPE_CHECKING_IS_LOGIN = "checking-is-loging"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        errorMessage: null,
        status: TYPE_CHECKING, // 'checking', 'authenticated','not-authenticated',
        user: {},
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = TYPE_CHECKING;
            state.user   = {};
            state.errorMessage = null;
        },
        onCheckingIsLoading: ( state ) => {
            state.status = TYPE_CHECKING_IS_LOGIN;
            state.user   = {};
            state.errorMessage = null;
        },
        onLogin: ( state, {payload}) => {
            state.status = TYPE_AUTHENTICATED;
            state.user = payload;
            state.errorMessage = null;
        },
        onLogout: ( state, { payload } ) => {
            state.status = TYPE_NOT_AUTHENTICATED;
            state.user   = {};
            state.errorMessage = payload;
        }
    }
});

export const {onChecking, onCheckingIsLoading, onLogin, onLogout} = authSlice.actions;
