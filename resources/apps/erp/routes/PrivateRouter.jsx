import {lazy} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

const DashboardPage = lazy(() => import('./../modules/dashboard/pages/Dashboard'));

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
    );
};
