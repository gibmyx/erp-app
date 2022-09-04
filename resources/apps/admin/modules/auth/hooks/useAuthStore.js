import {useDispatch, useSelector} from 'react-redux';
import erpApi from "../../../../shared/api/erpApi";

import {
    onLogin,
    onLogout,
    onClearMessage,
    onSuccesssMessage,
    TYPE_CHECKING,
    TYPE_AUTHENTICATED,
    TYPE_NOT_AUTHENTICATED
} from '../../../store';

export const useAuthStore = () => {

    const {
        status,
        errorMessage,
        successMessage
    } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({email, password}) => {
        dispatch(onClearMessage());
        try {
            const {data} = await erpApi.post('/auth/login', {email, password});
            const {user} = data
            localStorage.setItem('user', user);
            dispatch(onLogin(user));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout(error.response.data.message));
        }
    }

    const startForgotPassword = async ({email}) => {
        dispatch(onClearMessage());
        try {
            const {data} =  await erpApi.post('/auth/forgot-password', {email});
            const {message} = data
            dispatch(onSuccesssMessage(message));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout(error.response.data.message));
        }
    }

    const startResetPassword = async ({email, token, password, confirmedPassword}) => {
        dispatch(onClearMessage());
        try {
            const {data} = await erpApi.post('/auth/reset-password', {email, token, password, password_confirmation: confirmedPassword});
            const {message} = data
            dispatch(onSuccesssMessage(message));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout(error.response.data.message));
        }
    }

    const checkingAuth = async() => {

        const user = localStorage.getItem('user');
        if ( !user ) return dispatch( onLogout() );

        try {
            const { data } = await erpApi.get('/auth/verify-user');
            const {user} = data
            localStorage.setItem('user', user );
            dispatch(onLogin(user));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = async () => {
        await erpApi.post('/auth/logout');
        localStorage.clear();
        dispatch(onLogout());
    }

    const clearMessage = async () => {
        dispatch(onClearMessage());
    }

    return {
        //* Propiedades
        status,
        errorMessage,
        successMessage,
        TYPE_CHECKING,
        TYPE_AUTHENTICATED,
        TYPE_NOT_AUTHENTICATED,
        // user,

        //* Métodos
        startLogin,
        startLogout,
        clearMessage,
        checkingAuth,
        startResetPassword,
        startForgotPassword,
    }

}
