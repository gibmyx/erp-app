import {Link} from "react-router-dom";
import AuthLayout from "./../../../layouts/AuthLayout";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useAuthStore} from "../hooks";
import {useEffect} from "react";

//TODO: assets
import Alert from './../../../../shared/assets/icons/triangle-exclamation-solid.svg'

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    remember: yup.boolean(),
}).required();

const defaultValues = {
    email: '',
    password: '',
    remember: false,
}

const Login = () => {
    const {errorMessage, startLogin, clearMessage} = useAuthStore();

    const { register, handleSubmit, formState:{ errors , isSubmitting} } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        startLogin(data)
    };


    useEffect(() => {
        if (errorMessage) {
            setTimeout(() => {
                clearMessage()
            }, 10000);
        }
    }, [errorMessage]);

    return (
        <AuthLayout>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Inicia sesion</p>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="formEmail">Correo electronico</label>
                    <input type="email" id="formEmail" className="form-control" {...register("email")}
                           placeholder="Enter a valid email address"/>
                    <p className="errorForm">{errors.email?.message}</p>
                </div>

                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="formPassword">Contraseña</label>
                    <input type="password" id="formPassword" className="form-control" {...register("password")}
                           placeholder="Enter password"/>
                    <p className="errorForm">{errors.password?.message}</p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                        <input className="form-check-input me-2" type="checkbox" value="" {...register("remember")}
                               id="formRemember"/>
                        <label className="form-check-label" htmlFor="formRemember">
                            Remember me
                        </label>
                    </div>
                    <Link to="/auth/forgot-password" className="text-body">¿Olvidaste tu contraseña?</Link>
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

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}
                            style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Entrar
                    </button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Login;
