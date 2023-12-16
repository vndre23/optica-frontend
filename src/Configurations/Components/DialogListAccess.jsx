import React from 'react'
import { Dialog } from 'primereact/dialog';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
const DialogListAccess = ({ visible, onHide,data,onChangeFilter,handleClickAddAccess }) => {
    const header=(
        <>
        <div className="flex align-items-center">
            <span 
                className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
                style={{width: "32px", height: "32px"}}
            >
                <i className="pi pi-cog"></i>
            </span>
            <span className="font-medium text-2xl text-900">
                Asignar Accesos
            </span>
        </div>
        </>
    );
    const startContent = (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search text-sm"/>
                <InputText placeholder="Buscar Permiso" className="p-inputtext-sm" onChange={(e)=>onChangeFilter(e)}/>
            </span>
        </>
    );
    const endContent = (
        <>
        <Button label="Agregar Permiso" className="bg-button-template" size="small"
        onClick={()=>handleClickAddAccess()}
        />
        </>
    );
    return (

        <Dialog header={header} visible={visible} style={{ width: '35vw' }} onHide={() => onHide()}>
            <Toolbar className="border-none bg-white p-0 py-3 border-round"  start={startContent} end={endContent}/>
            <DataTable
            value={data}
            paginator
            rows={10}
        >

            <Column field="name" header="Permisos" headerClassName='bg-white'  style={{ minWidth: '12rem' }}></Column>
            {/* <Column header="" headerClassName='bg-white'  style={{ minWidth: '16rem' }} body={actionBodyTemplate}></Column> */}
        </DataTable>
        </Dialog>
    )
}

export default DialogListAccess