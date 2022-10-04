import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onSetBreadCrumbs} from '../../../store';
import ModalCreate from "../component/modal/ModalCreate";

const List = () => {
    const dispatch = useDispatch();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        dispatch(onSetBreadCrumbs('Roles'))
    }, []);

    return (
        <>
            <div className="row mb-3">
                <div className="col-12">
                    <button onClick={openModal} type="button" className="btn btn-outline-primary">Crear</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title mb-0">Listado de Roles</h3>
                        </div>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
            <ModalCreate modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </>
    );
};

export default List
