import React, {useState} from 'react'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Avatar } from 'primereact/avatar';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from "primereact/inputtext";
import { BreadCrumb } from 'primereact/breadcrumb';
const ListaPacientes = ({
        data,
        filter,
        onChangeFilter,
        handleClickAddCliente,
        onClickUpdateCustomer,
        buttonsAction,
        onClickPrescriptionCustomer,
        user,
        
    }) => {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }
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
            <Button  label="Receta" size="small" text severity='info' onClick={()=> onClickPrescriptionCustomer(rowData)}/>
            <Button className={``} label="Editar" size="small" text severity='warning' onClick={()=> onClickUpdateCustomer(rowData)}/>
            </>
        )
    };
    const startContent = (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search text-sm"/>
                <InputText placeholder="Buscar Cliente" className="p-inputtext-sm" onChange={(e)=>onChangeFilter(e)}/>
            </span>
        </>
    );
    const endContent = (
        <>
        <Button 
            label="Agregar cliente" 
            className={`bg-button-template 
                ${user.accesses.filter(item=>(item.name==='Clientes')).filter((permiso)=>permiso==='crear').length!==0 ? 'hidden':''}`
            } 
            size="small" 
            onClick={()=>handleClickAddCliente()}
        />     
        </>
    );
    console.log(user.accesses.map(item=>item.name==='Clientes'))
    // user.accesses.filter(item=>(item.name==='Clientes')).filter(permiso=>{permiso==='crear';console.log(permiso)})
    return (
        <>
        {/* <BreadCrumb model={items} home={home}/> */}
            <Toolbar className={`border-none bg-white p-0 py-3 border-round `}  start={startContent} end={endContent}/>
            <DataTable 
                value={data} 
                tableStyle={{ minWidth: '10rem' }} 
                scrollable 
                scrollHeight="21rem" 
                size="small" 
                globalFilter={filter} 
                paginator 
                rows={5}
            >
                {/* <Column field="id" header="Nro de Historia" headerClassName='bg-white'></Column> */}
                <Column field="firstName" header="Cliente" headerClassName='bg-white' body={nameBodyTemplate}></Column>
                <Column field="lastName" header="Apellidos" headerClassName='bg-white' className='hidden'></Column>
                {/* <Column field="firstName" header="Número Documento" headerClassName='bg-white' body={numberDocumentBodyTemplate}></Column> */}
                <Column field="typeDocument.name" header="Tipo Documento" headerClassName='bg-white'></Column>
                <Column field="numberDocument" header="Número Documento" headerClassName='bg-white'></Column>
                {/* <Column field="category" header="Telefono" headerClassName='bg-white'></Column> */}
                <Column field="status" header="Estado" headerClassName='bg-white' body={statusBodyTemplate}></Column>
                <Column header="" headerClassName='bg-white' body={actionBodyTemplate} className={`${buttonsAction && 'hidden'}`}></Column>
            </DataTable>
        </>
    )
}

export default ListaPacientes