import {useEffect} from "react";
import {useAuthStore} from "../modules/auth/hooks";

export const CheckingRouter = () => {

    const {checkingAuth} = useAuthStore()

    useEffect(() => {
        checkingAuth()
    }, []);

    return (
        <div>Loading...</div>
    );
};
