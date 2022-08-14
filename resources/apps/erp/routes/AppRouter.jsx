import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import {AuthRoutes} from "../modules/auth/router/AuthRoutes";
import {useAuthStore} from "../modules/auth/hooks";
import {PrivateRouter} from "./PrivateRouter";
import {CheckingRouter} from "./CheckingRouter";

export const AppRouter = () => {

    const {status, TYPE_CHECKING, TYPE_NOT_AUTHENTICATED, TYPE_CHECKING_IS_LOGIN} = useAuthStore()

    if (status === TYPE_CHECKING)
        return <CheckingRouter/>

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {
                        (status === TYPE_NOT_AUTHENTICATED || status === TYPE_CHECKING_IS_LOGIN)
                            ? (
                                <>
                                    <Route path="/auth/*" element={<AuthRoutes/>}/>
                                    <Route path="/*" element={<Navigate to="/auth/login"/>}/>
                                </>
                            )
                            : (
                                <>
                                    <Route path="/*" element={<PrivateRouter/>}/>
                                </>
                            )
                    }
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
