import {useEffect} from "react";
import {useAuthStore} from "../modules/auth/hooks";

export const CheckingRouter = () => {

    const {status, checkingAuth} = useAuthStore()

    useEffect(() => {
        checkingAuth()
    }, [status]);

    return (
        <div>Loadingaa...</div>
    );
};
