import imgLogin from "../assets/img/img.png";
import './../assets/css/style.css'

const AuthLayout = ({children}) => (
    <section className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src={imgLogin}
                         className="img-fluid" alt="Sample image"/>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    {children}
                </div>
            </div>
        </div>
        <div
            className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
                Copyright © 2020. All rights reserved.
            </div>
        </div>
    </section>
);

export default AuthLayout;
