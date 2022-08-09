import AuthLayout from "../layout/AuthLayout";

const ResetPassword = () => {
    return (
        <AuthLayout>
            <form>
                <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Restablecer contraseña</p>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Contrasela</label>
                    <input type="password" id="form3Example3" className="form-control"
                           placeholder="Enter a valid email address"/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">Confirmar contraseña</label>
                    <input type="password" id="form3Example4" className="form-control"
                           placeholder="Enter a valid email address"/>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary"
                            style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Cambiar contraseña
                    </button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ResetPassword;
