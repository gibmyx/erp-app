import {lazy} from "react";
import {Route, Routes} from "react-router-dom";
import Loadable from "./../../shared/components/Loadable"

const AuthLogin = Loadable(lazy(() => import('./../modules/auth/pages/Login')));
const AuthForgotPassword = Loadable(lazy(() => import('./../modules/auth/pages/ForgotPassword')));
const AuthResetPassword = Loadable(lazy(() => import('./../modules/auth/pages/ResetPassword')));

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<AuthLogin/>}/>
            <Route path="forgot-password" element={<AuthForgotPassword/>}/>
            <Route path="reset-password/:token" element={<AuthResetPassword/>}/>
        </Routes>
    )
}
