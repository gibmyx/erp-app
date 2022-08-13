import {Outlet} from "react-router";
import {useAuthStore} from "../modules/auth/hooks";

export const ErpLayout = () => {

    const {startLogout} = useAuthStore()


    return (
        <>
            <h1>there hi</h1>
            <Outlet />
            <button className="btn btn-close" onClick={() => startLogout()}></button>
        </>
    );
};
