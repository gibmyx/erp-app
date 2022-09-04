import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import {AuthRoutes} from "../modules/auth/router/AuthRoutes";
import {useAuthStore} from "../modules/auth/hooks";
import {PrivateRouter} from "./PrivateRouter";
import {CheckingRouter} from "./CheckingRouter";

export const AppRouter = () => {

    const {status, TYPE_CHECKING, TYPE_NOT_AUTHENTICATED} = useAuthStore()

    if (status === TYPE_CHECKING)
        return <CheckingRouter/>

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {
                        (status === TYPE_NOT_AUTHENTICATED)
                            ? (
                                <>
                                    <Route path="/admin/auth/*" element={<AuthRoutes/>}/>
                                    <Route path="/admin/*" element={<Navigate to="/admin/auth/login"/>}/>
                                </>
                            )
                            : (
                                <>
                                    <Route path="/admin/*" element={<PrivateRouter/>}/>
                                </>
                            )
                    }
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
