import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import * as yup from "yup";
import './../../../../assets/css/modal.css'
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {ModalForm} from "./ModalForm";

Modal.setAppElement('#app');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const schema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    default: yup.boolean(),
}).required();

const defaultValues = {
    name: '',
    description: '',
    default: false,
}

const ModalCreate = ({modalIsOpen, closeModal}) => {

    const methods = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const {handleSubmit, formState: {isSubmitting}} = methods;
    // const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();

    const afterOpenModal = () => {
    }

    const onSubmit = data => console.log(data)
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={() => {
            }}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="container-fluid" style={{maxHeight: '620px', width: '500px', padding: 0}}>
                <div className="card" style={{borderRadius: 0}}>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-header">
                                <h3 className="card-title mb-0">Crear Rol</h3>
                            </div>
                            <div className="card-body">
                                <ModalForm/>
                            </div>
                            <div className="card-footer d-flex justify-content-around">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </Modal>
    );
};

ModalCreate.prototype = {
    modalIsOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}

export default ModalCreate
