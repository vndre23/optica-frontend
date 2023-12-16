import React, {useState} from 'react'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Avatar } from 'primereact/avatar';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from "primereact/inputtext";
const ListaCitas = () => {
    const [products, setProducts] = useState([
        {
            id:"001-0023jd0-231",
            name:"Adrian Walteon",
            "category": "Frontend",
            "email":"adrian@email.com",
            status: "Activo",
            rol: "admin",
        },
        {
            id:"001-0023jd0-231",
            name:"Adrian Walteon",
            "category": "Frontend",
            "email":"adrian@email.com",
            status: "Activo",
            rol: "admin",
        },
        {
            id:"001-0023jd0-231",
            name:"Adrian Walteon",
            "category": "Frontend",
            "email":"adrian@email.com",
            status: "Activo",
            rol: "admin",
        }
    ]);
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
                    <p className="ml-2 m-0 p-0 text-sm font-semibold">{rowData.name}</p>
                    <p className="ml-2 m-0 p-0 text-xs ">{rowData.email}</p>
                </div>
            </div>
            
            </>
        )
    };
    const statusBodyTemplate = (rowData) => {
        return (
            <>
            <Tag className="mr-2 bg-green-50 text-green-500 border-1 border-green-300" severity="success" value={rowData.status}>

            </Tag>
            </>
        )
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <>
            {/* <Button label="Cita" size="small" link onClick={()=> console.log(rowData)}/> */}
            <Button label="Editar" size="small" link onClick={()=> console.log(rowData)}/>
            </>
        )
    };
    const startContent = (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search text-sm"/>
                <InputText placeholder="Buscar Cita" className="p-inputtext-sm"/>
            </span>
        </>
    )
    return (
        <>
            <Toolbar className="border-none bg-white p-0 py-3" start={startContent}/>
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }} size="small">
                <Column field="id" header="Nro de Historia" headerClassName='bg-white'></Column>
                <Column field="name" header="Paciente" headerClassName='bg-white' body={nameBodyTemplate}></Column>
                <Column field="category" header="Telefono" headerClassName='bg-white'></Column>
                <Column field="category" header="Fecha" headerClassName='bg-white'></Column>
                <Column field="category" header="Hora" headerClassName='bg-white'></Column>
                <Column field="status" header="Estado" headerClassName='bg-white' body={statusBodyTemplate}></Column>
                <Column header="" headerClassName='bg-white' body={actionBodyTemplate}></Column>
            </DataTable>
        </>
    )
}

export default ListaCitas