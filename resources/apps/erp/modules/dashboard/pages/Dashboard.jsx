import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onSetBreadCrumbs} from "../../../store";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onSetBreadCrumbs('Dashboard'))
    }, []);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Dashboard;
