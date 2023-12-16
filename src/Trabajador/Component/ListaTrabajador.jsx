import React, {useState} from 'react'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Avatar } from 'primereact/avatar';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from "primereact/inputtext";
import './ListaTrabajador.css';
const ListaTrabajador = ({data,filter,setFilter,handleClickAddCliente,handleClickUpdateUser, handleClickPermisos}) => {
    
    const nameBodyTemplate = (rowData) => {
        return (
            <>
            <div className="m-0 p-0 flex align-items-center">
                <div>
                    <Avatar 
                        image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        shape="circle" 
                    />
                </div>
                <div>
                    <p className="ml-2 m-0 p-0 text-sm font-semibold">{`${rowData.lastName}`}</p>
                    <p className="ml-2 m-0 p-0 text-xs ">{`${rowData.firstName}`}</p>
                </div>
            </div>
            
            </>
        )
    };
    const numberDocumentBodyTemplate = (rowData) => {
        return (
            <>
            <div className="m-0 p-0 flex align-items-center">
                
                <div>
                    
                    <p className="ml-2 m-0 p-0 text-xs font-semibold">{`${rowData.typeDocument.name}`}</p>
                    <p className="ml-2 m-0 p-0 text-sm font-semibold">{`${rowData.numberDocument}`}</p>
                </div>
            </div>
            
            </>
        )
    };
    const statusBodyTemplate = (rowData) => {
        return (
            <>
            <Tag className="mr-2 bg-green-50 text-green-500 border-1 border-green-300" severity="success" value={rowData.status.name}>

            </Tag>
            </>
        )
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <>
            <Button label="Permisos" size="small" text severity='help'  onClick={()=> handleClickPermisos(rowData)}/>
            <Button label="Editar" size="small" text severity='warning' onClick={()=> handleClickUpdateUser(rowData)}/>
            </>
        )
    };
    const startContent = (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search text-sm"/>
                <InputText placeholder="Buscar Usuario" className="p-inputtext-sm" onChange={setFilter}/>
            </span>
        </>
    );
    const endContent = (
        <>
        <Button label="Agregar usuario" className="bg-button-template" size="small" 
        onClick={()=>handleClickAddCliente()}
        />     
        </>
    );
    
    return (
        <>
            <Toolbar className="border-none bg-white p-0 py-3 border-round"  start={startContent} end={endContent}/>
            <DataTable 
                value={data} 
                tableStyle={{ minWidth: '10rem',tableLayout:'fixed' }} 
                scrollable 
                scrollHeight="21rem" 
                size="small" 
                globalFilter={filter} 
                paginator 
                rows={5}
                
                
    
            >
                {/* <Column field="id" header="Nro de Historia" headerClassName='bg-white'></Column> */}
                <Column field="firstName" header="Usuario" headerClassName='bg-white' body={nameBodyTemplate}></Column>
                {/* <Column field="firstName" header="Número Documento" headerClassName='bg-white' body={numberDocumentBodyTemplate}></Column> */}
                <Column field="typeDocument.name" header="Tipo Documento" headerClassName='bg-white'></Column>
                <Column field="numberDocument" header="Número Documento" headerClassName='bg-white'></Column>
                {/* <Column field="category" header="Telefono" headerClassName='bg-white'></Column> */}
                <Column field="status" header="Estado" headerClassName='bg-white' body={statusBodyTemplate}></Column>
                <Column header="" headerClassName='bg-white' body={actionBodyTemplate}></Column>
            </DataTable>
        </>
    )
}

export default ListaTrabajador