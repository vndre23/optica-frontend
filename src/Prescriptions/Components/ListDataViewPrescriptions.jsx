import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Toolbar } from 'primereact/toolbar'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import React, { useState } from 'react'

export const ListDataViewPrescriptions = ({handleClickAdd,setFilter,filter,onClickUpdate}) => {
    const [layout, setLayout] = useState('grid');
    const data = [
        {
            code: 'sd1dsa12',
            emisionDate: '2023-00-23',
            cliente:{
                _id:'sadsdad',
                firstName: 'Andre Jesus',
                lastName: 'Cruz',
                numberDocument: '71595562',
                typeDocument:{
                    name:'DNI'
                }
            },

        },
        {
            code: 'sd1dsa12',
            emisionDate: '2023-00-23',
            cliente:{
                _id:'sadsdad',
                firstName: 'Andre Jesus',
                lastName: 'Cruz',
                numberDocument: '71595562',
                typeDocument:{
                    name:'DNI'
                }
            },

        },
        {
            code: 'sd1dsa12',
            emisionDate: '2023-00-23',
            cliente:{
                _id:'sadsdad',
                firstName: 'Andre Jesus',
                lastName: 'Cruz',
                numberDocument: '71595562',
                typeDocument:{
                    name:'DNI'
                }
            },

        },
        {
            code: 'sd1dsa12',
            emisionDate: '2023-00-23',
            cliente:{
                _id:'sadsdad',
                firstName: 'Andre Jesus',
                lastName: 'Cruz',
                numberDocument: '71595562',
                typeDocument:{
                    name:'DNI'
                }
            },

        },
        {
            code: 'sd1dsa12',
            emisionDate: '2023-00-23',
            cliente:{
                _id:'sadsdad',
                firstName: 'Andre Jesus',
                lastName: 'Cruz',
                numberDocument: '71595562',
                typeDocument:{
                    name:'DNI'
                }
            },

        }
    ]
    const startContent = (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search text-sm"/>
                <InputText placeholder="Buscar Receta" className="p-inputtext-sm" onChange={setFilter}/>
            </span>
        </>
    );
    const endContent = (
        <>
        <Button label="Agregar receta" className="bg-button-template" size="small" 
        onClick={()=>handleClickAdd()}
        />     
        </>
    );
    const actionBodyTemplate = (rowData) => {
        return (
            <>
            <Button label="Cita" size="small" link onClick={()=> console.log(rowData)}/>
            <Button label="Editar" size="small" link onClick={()=> onClickUpdate(rowData)}/>
            </>
        )
    };
    const customerBodyTemplate = (rowData)=> {
        return(
            <>

                <span><Tag value={`${rowData.cliente.typeDocument.name}`} className='text-base'/>{`${rowData.cliente.firstName} ${rowData.cliente.lastName} ${rowData.cliente.numberDocument}`}</span>
            </>
        )
    }
    const gridItem = (rowData) => {
        return(
            <>
                <div className='col-12 sm:col-6 lg:col-6 xl:col-4 px-3 py-3'>
                    <div className='surface-card shadow-2 p-0 border-round'>
                        <div className='grid '>
                            <div className='col-4 bg-primary-500 py-1 border-round-left text-white font-semibold flex justify-content-center align-items-center flex-column'>
                                <div>Receta N°:</div>
                                <div>{`${rowData.code}`}</div>
                            </div>
                            <div className='col-6'>
                                <div className='font-semibold'><span>{`${rowData.cliente.typeDocument.name} ${rowData.cliente.numberDocument}`}</span></div>
                                <div className=''></div>
                                <div className=''>{`${rowData.cliente.firstName} ${rowData.cliente.lastName}`}</div>
                            </div>
                            <div className='col-2 align-items-center pl-1'>
                                <Button icon="pi pi-ellipsis-v" text rounded size='small'/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const itemTemplate = (rowData, layout) => {
        if (!rowData) {
            return;
        }

        if (layout === 'list') return gridItem(rowData);
        else if (layout === 'grid') return gridItem(rowData);
    };
  return (
    <>
        <Toolbar className="border-none bg-white p-0 py-3 border-round"  start={startContent} end={endContent}/>
        <DataView  paginator rows={5} value={data} itemTemplate={itemTemplate}  layout={layout} />
    </>
  )
}
