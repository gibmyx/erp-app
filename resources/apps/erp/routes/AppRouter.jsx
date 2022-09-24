import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "./AuthRoutes";
import {useAuthStore} from "../modules/auth/hooks";
import {PrivateRouter} from "./PrivateRouter";
import {CheckingRouter} from "./CheckingRouter";

export const AppRouter = () => {

    const {status, TYPE_CHECKING, TYPE_NOT_AUTHENTICATED} = useAuthStore()

    if (status === TYPE_CHECKING)
        return <CheckingRouter/>

    return (
        <BrowserRouter>
                <Routes>
                    {
                        (status === TYPE_NOT_AUTHENTICATED)
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
        </BrowserRouter>
    );
};
