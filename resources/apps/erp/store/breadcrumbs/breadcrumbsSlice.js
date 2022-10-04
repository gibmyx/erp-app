import { createSlice } from '@reduxjs/toolkit';

export const breadcrumbsSlice = createSlice({
    name: 'breadcrumbs',
    initialState: {
        nameModule: '',
    },
    reducers: {
        onSetBreadCrumbs: ( state, {payload, type} ) => {
            state.nameModule = payload;
        }
    }
});

export const {onSetBreadCrumbs} = breadcrumbsSlice.actions;
