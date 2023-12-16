import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export const ListJobs = ({data,handleClickAdd,onChangeFilter,handleClickUpdate,filter,handleClickAccess}) => {
    const startContent = (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search text-sm"/>
                <InputText placeholder="Buscar Cargo" className="p-inputtext-sm" onChange={(e)=>onChangeFilter(e)}/>
            </span>
        </>
    );
    const endContent = (
        <>
        <Button label="Agregar Cargo" className="bg-button-template" size="small"
        onClick={()=>handleClickAdd()}
        />
        </>
    );
    const actionBodyTemplate = (rowData) => {
        return (
            <>

            <Button label="Editar" size="small" text severity='warning' type="button" onClick={()=> handleClickUpdate(rowData)}/>
            {/* <Button label="Permisos" size="small" text severity='primary' type="button" onClick={()=> handleClickAccess(rowData)}/> */}
            {/* <Button label="Anular" size="small" text severity='danger' type="button" onClick={()=> handleClickUpdate(rowData)}/> */}
            {/* <Button label={`${rowData.status.code===1 ? 'Anular' : 'Activar'}`} size="small" text severity={`${rowData.status.code===1 ? 'danger' : 'success'}`} onClick={()=> handleClickAccess(rowData)}/> */}
            </>
        )
    };
  return (
    <>
        <Toolbar className="border-none bg-white p-0 py-3 border-round"  start={startContent} end={endContent}/>
        <DataTable
            value={data}
            paginator
            rows={10}
        >

            <Column field="name" header="Cargo" headerClassName='bg-white'  style={{ minWidth: '12rem' }}></Column>
            <Column header="" headerClassName='bg-white'  style={{ minWidth: '16rem' }} body={actionBodyTemplate}></Column>
        </DataTable>
    </>
  )
}
