import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const DialogCitas = ({ visible, onHide }) => {
    const header=(
        <>
        <div className="flex align-items-center">
            <span 
                className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
                style={{width: "32px", height: "32px"}}
            >
                <i className="pi pi-book"></i>
            </span>
            <span className="font-medium text-2xl text-900">
                Generar Cita
            </span>
        </div>
        </>
    );
    return (

        <Dialog header={header} visible={visible} style={{ width: '50vw' }} onHide={() => onHide()}>
            <form>
                <div className="formgrid grid ">
                    <div className="field lg:col-9 md:col-9 sm:col-12 py-0">
                        <label for="paciente" className="block font-medium text-900 text-sm">Cliente</label>
                        <Dropdown className="w-full p-inputtext-sm" filter/>
                    </div>
                    <div className="field lg:col-3 md:col-3 sm:col-12 py-0">
                        <label for="paciente" className="block font-medium text-900 text-sm">Agregar Cliente</label>
                        <Button type="button" icon="pi pi-plus" label="Paciente" size="small" className="bg-button-template w-full"/>
                    </div>
                </div>
                <div className="formgrid grid py-0">
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0">
                        <label for="nombres" className="block font-medium text-900 text-sm">Nombres</label>
                         <InputText className="w-full  p-inputtext-sm" disabled/>
                    </div>
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0">
                        <label for="apellidos" className="block font-medium text-900 text-sm">Apellidos</label>
                        <InputText className="w-full p-inputtext-sm" disabled/>
                    </div>
                </div>
                <div className="formgrid grid">
                    <div className="field lg:col-9 md:col-9 sm:col-12 py-0">
                        <label for='fecha-nacimiento' className="block font-medium text-900 text-sm">Fecha de la Cita</label>
                        <InputText className="w-full p-inputtext-sm" type="date"/>
                    </div>
                    <div className="field lg:col-3 md:col-3 sm:col-12 py-0">
                        <label for="cita" className="block font-medium text-900 text-sm">Ver Horario</label>
                        <Button type="button" icon="pi pi-calendar" label="Horario" size="small" className="bg-button-template w-full"/>
                    </div>
                </div>
                <div className="flex gap-3 justify-content-end">
                    <div>
                        <Button type="submit" label="Guardar" size="small" severity="success"/>
                    </div>
                    <div>
                        <Button type="button" label="Cancelar" size="small" severity="danger" onClick={()=>onHide()}/>
                    </div>
                    
                    
                </div>
                
                
            </form>
        </Dialog>
    )
}

export default DialogCitas