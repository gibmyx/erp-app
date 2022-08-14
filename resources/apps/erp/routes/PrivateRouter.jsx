import {lazy} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {ErpLayout} from "../layouts/ErpLayout";

const DashboardPage = lazy(() => import('./../modules/dashboard/pages/Dashboard'));

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ErpLayout/>}>
                <Route path="dashboard" element={<DashboardPage/>}/>
            </Route>
            <Route path="/*" element={<Navigate to="/dashboard"/>}/>
        </Routes>
    );
};
