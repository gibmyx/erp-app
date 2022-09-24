import {useEffect} from "react";
import {useAuthStore} from "../modules/auth/hooks";
import Loader from "../../shared/components/Loader";

export const CheckingRouter = () => {

    const {checkingAuth} = useAuthStore()

    useEffect(() => {
        checkingAuth()
    }, []);

    return (
        <Loader/>
    );
};
