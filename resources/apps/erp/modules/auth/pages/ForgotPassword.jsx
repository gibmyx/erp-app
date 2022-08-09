import './../assets/css/style.css'
import imgLogin from "../assets/img/img.png";
import {Link} from "react-router-dom";

const ForgotPassword = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={imgLogin}
                             className="img-fluid" alt="Sample image"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Recuperar contraseña</p>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Correo electronico</label>
                                <input type="email" id="form3Example3" className="form-control"
                                       placeholder="Enter a valid email address"/>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                </div>
                                <Link to="/auth/login" className="text-body">Iniciar sesion</Link>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary"
                                        style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Enviar
                                </button>
                            </div>

                        </form>
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
};

export default ForgotPassword;
