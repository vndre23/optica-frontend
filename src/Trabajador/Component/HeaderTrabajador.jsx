import { Button } from 'primereact/button'
import React from 'react'
import "./headerTrabajador.css";
const HeaderTrabajador = ({handleClickAddCliente}) => {
    return (
        <>
            <div className="flex justify-content-between align-items-center  mb-4">
                <div className="">
                    <p className="font-bold">Usuarios</p>
                    <span>Lista de todos los usuarios</span>
                </div>
                <div className="">
                    <Button label="Agregar usuario" className="bg-button-template" size="small" onClick={()=>handleClickAddCliente()}/>
                </div>
            </div>
        </>
    )
}

export default HeaderTrabajador