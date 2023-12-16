import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'
import { OverlayPanel } from 'primereact/overlaypanel'
import React, { useRef, useState } from 'react'
import {Toolbar} from 'primereact/toolbar'
import { Button } from 'primereact/button'
import DialogCliente from '../../Clientes/Components/DialogCliente'
import { Tag } from 'primereact/tag'
import { Avatar } from 'primereact/avatar'
function OverlayPanelCustomers({
        customers,
        selectedCustomer,
        onSelectionCustomer,
        op,
        handleChangeFilter,
        filter,
        handleClickAddCustomer,
        dataCustomers,
    }) {
    
    const header = (
        <div className='flex justify-content-end bg-white'>
            <span className="p-input-icon-left">
                <i className="pi pi-search " />
                <InputText className='p-inputtext-sm' type="search" onInput={(e) => handleChangeFilter(e)} placeholder="Buscar..." />
            </span>
        </div>
        
    )
    const endContent = (
        <>
        <Button label="Agregar cliente" className="bg-button-template" size="small" 
        onClick={()=>handleClickAddCustomer()}
        />     
        </>
    );
    const statusBodyTemplate = (rowData) => {
        return (
            <>
            <Tag className="mr-2 bg-green-50 text-green-500 border-1 border-green-300" severity="success" value={rowData.status.name}>

            </Tag>
            </>
        )
    };
    const nameBodyTemplate = (rowData) => {
        let label = rowData.firstName.sub;
        return (
            <>
            
            <div className="m-0 p-0 flex align-items-center">
                <div>
                    {/* <Avatar 
                        image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        shape="circle" 
                    /> */}
                    <Avatar label={`${rowData?.lastName?.substring(0,1).toUpperCase()}`}  className='bg-blue-600 text-white' shape="circle"/>
                </div>
                <div>
                    <p className="ml-2 m-0 p-0 text-sm font-semibold">{`${rowData.lastName}`}</p>
                    <p className="ml-2 m-0 p-0 text-xs ">{`${rowData.firstName}`}</p>
                </div>
            </div>
            
            </>
        )
    };
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text onClick={()=>dataCustomers()}/>;
    const paginatorRight = <div className=''></div>;
    return (
        <OverlayPanel ref={op} showCloseIcon closeOnEscape dismissable={false} >
            <Toolbar start={header} className='border-none bg-white' end={endContent}/>
            <DataTable 
                
                value={customers} 
                selectionMode="single" 
                paginator 
                rows={5} 
                selection={selectedCustomer} 
                onSelectionChange={(e) => onSelectionCustomer(e)}
                filter
                globalFilter={filter}
                paginatorLeft={paginatorLeft} 
                paginatorRight={paginatorRight}
            >
                <Column field="firstName" header="Cliente" headerClassName='bg-white' body={nameBodyTemplate}></Column>
                <Column field="lastName" header="Apellidos" headerClassName='bg-white' className='hidden'></Column>
                
                <Column field="typeDocument.name" header="Tipo Documento" headerClassName='bg-white'></Column>
                <Column field="numberDocument" header="Número Documento" headerClassName='bg-white'></Column>
                
                <Column field="status" header="Estado" headerClassName='bg-white' body={statusBodyTemplate}></Column>
            </DataTable>

            
        </OverlayPanel>
    )
}

export default OverlayPanelCustomers