import {Link} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useAuthStore} from "../hooks";
import {useEffect} from "react";

//TODO: assets
import Alert from './../../../../shared/assets/icons/triangle-exclamation-solid.svg'
import Success from './../../../../shared/assets/icons/check-solid.svg'

const schema = yup.object({
    email: yup.string().email().required(),
}).required();

const defaultValues = {
    email: '',
}
const ForgotPassword = () => {
    const {errorMessage, successMessage, startForgotPassword, clearMessage} = useAuthStore()

    const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        startForgotPassword(data)
    };

    useEffect(() => {
        if (errorMessage || successMessage) {
            setTimeout(() => {
                clearMessage()
            }, 10000);
        }
    }, [errorMessage, successMessage]);

    return (
        <AuthLayout>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Recuperar contraseña</p>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Correo electronico</label>
                    <input type="email" id="form3Example3" className="form-control" {...register("email")}
                           placeholder="Enter a valid email address"/>
                    <p className="errorForm">{errors.email?.message}</p>
                </div>

                {
                    errorMessage && (
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <div className="alert alert-danger text-center" role="alert">
                                <img src={Alert} alt="Alert" width="20" height="20" className="me-2"/>
                                {errorMessage}
                            </div>
                        </div>
                    )
                }

                {
                    successMessage && (
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <div className="alert alert-success text-center" role="alert">
                                <img src={Success} alt="Success" width="20" height="20" className="me-2"/>
                                {successMessage}
                            </div>
                        </div>
                    )
                }

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}
                            style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Enviar
                    </button>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to="/auth/login" className="text-body">Iniciar sesion</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ForgotPassword;
