import AuthLayout from "../layout/AuthLayout";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useLocation, useParams} from "react-router";
import queryString from 'query-string';
import {useAuthStore} from "../hooks";
import {useEffect} from "react";
import {Link} from "react-router-dom";

//TODO: assets
import Alert from './../../../../shared/assets/icons/triangle-exclamation-solid.svg'
import Success from './../../../../shared/assets/icons/check-solid.svg'

const schema = yup.object({
    password: yup.string().min(8, "La contraseña requiere 8 caracteres minimo").required("Este campo es requerido"),
    confirmedPassword: yup.string()
        .min(8, "La contraseña requiere 8 caracteres minimo")
        .required("Este campo es requerido")
        .oneOf([yup.ref('password'), null], 'La contraseña no coincide'),
}).required();

const ResetPassword = () => {

    const params = useParams()
    const location = useLocation()
    const querystring = queryString.parse(location.search);

    const {errorMessage, successMessage, startResetPassword, clearMessage} = useAuthStore();

    const { register, handleSubmit, formState:{ errors, isSubmitting } } = useForm({
        defaultValues: {
            token: params.token,
            email: querystring.email,
            password: '',
            confirmedPassword: '',
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        startResetPassword(data)
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
                    <p className="text-center fw-bold mx-3 mb-0">Restablecer contraseña</p>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="formPassword">Contrasela</label>
                    <input type="password" id="formPassword" className="form-control" {...register("password")}
                           placeholder="Enter password"/>
                    <p className="errorForm">{errors.password?.message}</p>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="formConfirmedPassword">Confirmar contraseña</label>
                    <input type="password" id="formConfirmedPassword" className="form-control" {...register("confirmedPassword")}
                           placeholder="Confirmed password"/>
                    <p className="errorForm">{errors.confirmedPassword?.message}</p>
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
                                <img src={Success} alt="Alert" width="20" height="20" className="me-2"/>
                                {successMessage}
                            </div>
                        </div>
                    )
                }

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}
                            style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Cambiar contraseña
                    </button>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to="/auth/login" className="text-body">Iniciar sesion</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ResetPassword;
