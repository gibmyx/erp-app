import {lazy} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Loadable from "./../../shared/components/Loadable"

const DashboardPage = Loadable(lazy(() => import('./../modules/dashboard/pages/Dashboard')));
const RolesListPage = Loadable(lazy(() => import('./../modules/roles/pages/List')));

import {ErpLayout} from "../layouts/ErpLayout";

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ErpLayout/>}>
                <Route path="dashboard" element={<DashboardPage/>}/>
                <Route path="roles/list" element={<RolesListPage/>}/>
            </Route>
            <Route path="/*" element={<Navigate to="/dashboard"/>}/>
        </Routes>
    );
};
