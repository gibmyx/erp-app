import {useEffect} from "react";
import {Outlet} from "react-router";

import {Sidebar} from "../components/Sidebar";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

import feather from "feather-icons";
import './../assets/css/style.css'
import {useSelector} from "react-redux";

export const ErpLayout = () => {

    const {nameModule} = useSelector(state => state.breadcrumbs);
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="main">
                <Navbar/>
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>{nameModule}</strong></h1>
                        <Outlet/>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
};
