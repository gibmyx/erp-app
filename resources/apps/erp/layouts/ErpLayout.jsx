import {useEffect} from "react";
import {Outlet} from "react-router";
import {useAuthStore} from "../modules/auth/hooks";

import SimpleBar from "simplebar";
import feather from "feather-icons";

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
        feather.replace();
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
            <nav className="navbar navbar-expand navbar-light navbar-bg">
                <a className="sidebar-toggle js-sidebar-toggle">
                    <i className="hamburger align-self-center"></i>
                </a>

                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav navbar-align">
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown"
                               data-bs-toggle="dropdown">
                                <div className="position-relative">
                                    <i className="align-middle" data-feather="bell"></i>
                                    <span className="indicator">4</span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                                 aria-labelledby="alertsDropdown">
                                <div className="dropdown-menu-header">
                                    4 New Notifications
                                </div>
                                <div className="list-group">
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-danger" data-feather="alert-circle"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Update completed</div>
                                                <div className="text-muted small mt-1">Restart server 12 to complete the
                                                    update.
                                                </div>
                                                <div className="text-muted small mt-1">30m ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-warning" data-feather="bell"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Lorem ipsum</div>
                                                <div className="text-muted small mt-1">Aliquam ex eros, imperdiet
                                                    vulputate hendrerit et.
                                                </div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-primary" data-feather="home"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Login from 192.186.1.8</div>
                                                <div className="text-muted small mt-1">5h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-success" data-feather="user-plus"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">New connection</div>
                                                <div className="text-muted small mt-1">Christina accepted your
                                                    request.
                                                </div>
                                                <div className="text-muted small mt-1">14h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="#" className="text-muted">Show all notifications</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                               data-bs-toggle="dropdown">
                                <i className="align-middle" data-feather="settings"></i>
                            </a>

                            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                               data-bs-toggle="dropdown">
                                {/*<img src="" className="avatar img-fluid rounded me-1" alt="Charles Hall"/> */}
                                <span className="text-dark">Charles Hall</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="">
                                    <i className="align-middle me-1" data-feather="user"></i>Profile
                                </a>
                                <a className="dropdown-item" href="#"><i className="align-middle me-1"
                                                                         data-feather="pie-chart"></i> Analytics</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href=""><i className="align-middle me-1"
                                                                                  data-feather="settings"></i> Settings
                                    & Privacy</a>
                                <a className="dropdown-item" href="#"><i className="align-middle me-1"
                                                                         data-feather="help-circle"></i> Help Center</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" onClick={() => startLogout()}>Log out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


            <main className="content">
                <div className="container-fluid p-0">
                    <h1 className="h3 mb-3"><strong>Dashboard</strong></h1>
                    <Outlet/>
                </div>
            </main>

            <footer className="footer">
                <div className="container-fluid">
                    <div className="row text-muted">
                        <div className="col-6 text-start">
                            <p className="mb-0">
                                <a className="text-muted" href="https://adminkit.io/"
                                   target="_blank"><strong>AdminKit</strong></a> - <a className="text-muted"
                                                                                      href="https://adminkit.io/"
                                                                                      target="_blank"><strong>Bootstrap
                                Admin Template</strong></a>                                &copy;
                            </p>
                        </div>
                        <div className="col-6 text-end">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/" target="_blank">Help
                                        Center</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    </div>);
};
