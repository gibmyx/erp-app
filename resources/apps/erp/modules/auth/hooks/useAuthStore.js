import {useDispatch, useSelector} from 'react-redux';
import erpApi from "../../../../shared/api/erpApi";

import {
    onLogin,
    onLogout,
    TYPE_CHECKING,
    TYPE_AUTHENTICATED,
    TYPE_NOT_AUTHENTICATED
} from '../../../store';

export const useAuthStore = () => {

    const {
        status
    } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({email, password}) => {

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
        try {
            await erpApi.post('/auth/forgot-password', {email});
        } catch (error) {
        }
    }

    const startResetPassword = async ({email, token, password, confirmedPassword}) => {
        try {
            await erpApi.post('/auth/reset-password', {email, token, password, password_confirmation: confirmedPassword});
        } catch (error) {
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

    return {
        //* Propiedades
        status,
        TYPE_CHECKING,
        TYPE_AUTHENTICATED,
        TYPE_NOT_AUTHENTICATED,
        // user,

        //* Métodos
        startLogin,
        startLogout,
        checkingAuth,
        startResetPassword,
        startForgotPassword,
    }

}
