import { Button } from 'primereact/button'
import React from 'react'
import "./headerCliente.css";
const HeaderCliente = ({handleClickAddCliente}) => {
    return (
        <>
            <div className="flex justify-content-between align-items-center  mb-4">
                <div className="">
                    <p className="font-bold">Clientes</p>
                    <span>Lista de todos los clientes</span>
                </div>
                <div className="">
                    <Button label="Agregar cliente" className="bg-button-template" size="small" onClick={()=>handleClickAddCliente()}/>
                </div>
            </div>
        </>
    )
}

export default HeaderCliente