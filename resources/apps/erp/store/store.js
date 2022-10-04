import { configureStore } from '@reduxjs/toolkit';
import {authSlice} from "./auth/authSlice.js";
import {breadcrumbsSlice} from './breadcrumbs/breadcrumbsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        breadcrumbs: breadcrumbsSlice.reducer
    },
});
