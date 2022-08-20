import {Link} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useAuthStore} from "../hooks";

const schema = yup.object({
    email: yup.string().email().required(),
}).required();

const defaultValues = {
    email: '',
}
const ForgotPassword = () => {
    const {startForgotPassword} = useAuthStore()

    const { register, handleSubmit, formState:{ errors } } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        startForgotPassword(data)
    };

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

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                    </div>
                    <Link to="/auth/login" className="text-body">Iniciar sesion</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary"
                            style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Enviar
                    </button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ForgotPassword;
