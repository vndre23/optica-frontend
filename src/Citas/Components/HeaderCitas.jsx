import { Button } from 'primereact/button'
import React from 'react'
import "./headerCitas.css";
const HeaderCitas = ({handleClickAddCita}) => {
    return (
        <>
            <div className="flex justify-content-between align-items-center  mb-4">
                <div className="">
                    <p className="font-bold">Citas</p>
                    <span>Lista de todos las citas de los pacientes</span>
                </div>
                <div className="">
                    <Button label="Agregar cita" className="bg-button-template" size="small" onClick={()=>handleClickAddCita()}/>
                </div>
            </div>
        </>
    )
}

export default HeaderCitas