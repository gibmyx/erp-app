import AuthLayout from "../layout/AuthLayout";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useForm} from "react-hook-form";

const schema = yup.object({
    password: yup.string().min(8, "La contraseña requiere 8 caracteres minimo").required("Este campo es requerido"),
    confirmedPassword: yup.string()
        .min(8, "La contraseña requiere 8 caracteres minimo")
        .required("Este campo es requerido")
        .oneOf([yup.ref('password'), null], 'La contraseña no coincide'),
}).required();

const defaultValues = {
    password: '',
    confirmedPassword: '',
}

const ResetPassword = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data)
    };

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

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary"
                            style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Cambiar contraseña
                    </button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ResetPassword;
