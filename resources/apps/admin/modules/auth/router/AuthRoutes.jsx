import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";

const AuthLogin = lazy(() => import('./../pages/Login'));
const AuthForgotPassword = lazy(() => import('./../pages/ForgotPassword'));
const AuthResetPassword = lazy(() => import('./../pages/ResetPassword'));

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<AuthLogin/>}/>
            <Route path="forgot-password" element={<AuthForgotPassword/>}/>
            <Route path="reset-password/:token" element={<AuthResetPassword/>}/>
        </Routes>
    )
}
