import {useEffect} from "react";
import SimpleBar from "simplebar";
import {Link, NavLink} from "react-router-dom";

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

export const Sidebar = () => {


    useEffect(() => {
        initializeSimplebar();
        initializeSidebarCollapse();
    }, []);

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="#">
                    <span className="align-middle">AdminKit</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <NavLink
                            className="sidebar-link"
                            to="dashboard">
                            <i className="align-middle" data-feather="sliders"></i>
                            <span className="align-middle">Dashboard</span>
                        </NavLink>
                    </li>
                </ul>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Administracion
                    </li>

                    <li className="sidebar-item">
                        <NavLink
                            className={'sidebar-link active'}
                            to="roles/list">
                            <i className="align-middle" data-feather="key"></i>
                            <span className="align-middle">Roles</span>
                        </NavLink>
                    </li>
                </ul>

            </div>

        </nav>
    );
};
