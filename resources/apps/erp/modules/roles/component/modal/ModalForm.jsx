import {useEffect} from "react";
import {useFormContext} from "react-hook-form";

export const ModalForm = () => {
    const {register, formState: {errors}} = useFormContext(); // retrieve all hook methods

    useEffect(() => {
        console.log("there")
    }, []);

    return (
        <>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" {...register("name")}
                       placeholder="Nombre"/>
                <p className="errorForm">{errors.name?.message}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción</label>
                <textarea className="form-control" id="description" {...register("description")}
                       placeholder="Descripción"/>
                <p className="errorForm">{errors.description?.message}</p>
            </div>
            <div className="mb-3">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="default" {...register("default")}/>
                    <label className="form-check-label" htmlFor="default">
                        Rol por default
                    </label>
                </div>
            </div>
        </>
    );
};
