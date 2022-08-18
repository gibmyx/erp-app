import {useEffect} from "react";
import {Outlet} from "react-router";
import {useAuthStore} from "../modules/auth/hooks";

import SimpleBar from "simplebar";

import './../assets/css/style.css'


const initializeSimplebar = () => {
    const simplebarElement = document.getElementsByClassName("js-simplebar")[0];

    if (simplebarElement) {
        const simplebarInstance = new SimpleBar(document.getElementsByClassName("js-simplebar")[0]);

        /* Recalculate simplebar on sidebar dropdown toggle */
        const sidebarDropdowns = document.querySelectorAll(".js-sidebar [data-bs-parent]");

        sidebarDropdowns.forEach(link => {
            link.addEventListener("shown.bs.collapse", () => {
                simplebarInstance.recalculate();
            });
            link.addEventListener("hidden.bs.collapse", () => {
                simplebarInstance.recalculate();
            });
        });
    }
}

const initializeSidebarCollapse = () => {
    const sidebarElement = document.getElementsByClassName("js-sidebar")[0];
    const sidebarToggleElement = document.getElementsByClassName("js-sidebar-toggle")[0];

    if (sidebarElement && sidebarToggleElement) {
        sidebarToggleElement.addEventListener("click", () => {
            sidebarElement.classList.toggle("collapsed");

            sidebarElement.addEventListener("transitionend", () => {
                window.dispatchEvent(new Event("resize"));
            });
        });
    }
}

export const ErpLayout = () => {

    const {startLogout} = useAuthStore()

    useEffect(() => {
        initializeSimplebar();
        initializeSidebarCollapse();
    }, []);


    return (<div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="#">
                    <span className="align-middle">AdminKit</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Pages
                    </li>

                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="#">
                            <i className="align-middle" data-feather="sliders"></i>
                            <span className="align-middle">Dashboard</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                            <i className="align-middle" data-feather="user"></i>
                            <span className="align-middle">Profile</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                            <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                            <i className="align-middle" data-feather="user-plus"></i> <span
                            className="align-middle">Sign Up</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="#">
                            <i className="align-middle" data-feather="book"></i> <span
                            className="align-middle">Blank</span>
                        </a>
                    </li>
                </ul>

            </div>

        </nav>
        <div className="main">
            <button className="btn btn-close" onClick={() => startLogout()}></button>
            <Outlet/>
        </div>
    </div>);
};
