import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Toolbar } from 'primereact/toolbar';
import React from 'react'
import { ConfirmDialogPrescription } from './ConfirmDialogPrescription';

export const ListPrescriptions = ({
        data,
        handleClickAdd,
        onChangeFilter,
        handleClickUpdate,
        filter,
        handleClickNullify,
        visible,
        onHide,
        prescription,
        handleClickAccept,
        handleClickReject
    }) => {
    // const data = [
    //     {
    //         code: 'sd1dsa12',
    //         emisionDate: '2023-00-23',
    //         cliente:{
    //             _id:'sadsdad',
    //             firstName: 'Andre Jesus',
    //             lastName: 'Cruz',
    //             numberDocument: '71595562',
    //             typeDocument:{
    //                 name:'DNI'
    //             }
    //         },

    //     },
    //     {
    //         code: 'sd1dsa12',
    //         emisionDate: '2023-00-23',
    //         cliente:{
    //             _id:'sadsdad',
    //             firstName: 'Andre Jesus',
    //             lastName: 'Cruz',
    //             numberDocument: '71595562',
    //             typeDocument:{
    //                 name:'DNI'
    //             }
    //         },

    //     },
    //     {
    //         code: 'sd1dsa12',
    //         emisionDate: '2023-00-23',
    //         cliente:{
    //             _id:'sadsdad',
    //             firstName: 'Andre Jesus',
    //             lastName: 'Cruz',
    //             numberDocument: '71595562',
    //             typeDocument:{
    //                 name:'DNI'
    //             }
    //         },

    //     },
    //     {
    //         code: 'sd1dsa12',
    //         emisionDate: '2023-00-23',
    //         cliente:{
    //             _id:'sadsdad',
    //             firstName: 'Andre Jesus',
    //             lastName: 'Cruz',
    //             numberDocument: '71595562',
    //             typeDocument:{
    //                 name:'DNI'
    //             }
    //         },

    //     },
    //     {
    //         code: 'sd1dsa12',
    //         emisionDate: '2023-00-23',
    //         cliente:{
    //             _id:'sadsdad',
    //             firstName: 'Andre Jesus',
    //             lastName: 'Cruz',
    //             numberDocument: '71595562',
    //             typeDocument:{
    //                 name:'DNI'
    //             }
    //         },

    //     }
    // ]
    const startContent = (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search text-sm"/>
                <InputText placeholder="Buscar Receta" className="p-inputtext-sm" onChange={(e)=>onChangeFilter(e)}/>
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
            
            <Button label="Editar" size="small" className={`${rowData.status.code===2 && 'hidden'}`} text severity='warning' type="button" onClick={()=> handleClickUpdate(rowData)}/>
            <Button label={`${rowData.status.code===1 ? 'Anular' : 'Activar'}`} size="small" text severity={`${rowData.status.code===1 ? 'danger' : 'success'}`} onClick={()=> handleClickNullify(rowData)}/>
            </>
        )
    };
    
    const customerBodyTemplate = (rowData)=> {
        return(
            <>
                <div className='font-semibold'>
                    {`${rowData.customer.typeDocument.name} ${rowData.customer.numberDocument}`}
                </div>
                <span>{`${rowData.customer.firstName} ${rowData.customer.lastName}`} </span>
            </>
        )
    }
    const statusBodyTemplate = (rowData) => {
        let color = '';
        if(rowData.status.code ===1){
            color='green';
        }else if (rowData.status.code ===2){
            color='red'
        }else {
            color='primary'
        }
        
        return (
            <>
            <Tag className={`mr-2 bg-${color}-50 text-${color}-500 border-1 border-${color}-300`} value={rowData.status.name}>

            </Tag>
            </>
        )
    };
    const formatDate = (rowData) => {
        
        const date = new Date(rowData.emisionDate).toLocaleDateString('en-US',{
            day: '2-digit',
            year: 'numeric',
            month: '2-digit',
        }); 
        
        return date;
    };
  return (
    <>
        <Toolbar className="border-none bg-white p-0 py-3 border-round"  start={startContent} end={endContent}/>
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
                
                <Column field="_id" header="Nro Receta" headerClassName='bg-white'></Column>
                
                <Column field="emisionDate" header="Fecha Emisión" headerClassName='bg-white' body={formatDate}></Column>
                <Column field="customer.firstName" header="Cliente" headerClassName='bg-white' body={customerBodyTemplate}></Column>
                <Column field="customer.lastName" header="Estado" headerClassName='bg-white' body={statusBodyTemplate}></Column>
                <Column field="customer.numberDocument" header="Apellidos" headerClassName='bg-white' className='hidden'></Column>
                
                <Column header="" headerClassName='bg-white' body={actionBodyTemplate}></Column>
            </DataTable>

            <ConfirmDialogPrescription
                visible={visible}
                onHide={onHide}
                prescription={prescription}
                handleClickAccept={handleClickAccept}
                handleClickReject={handleClickReject}
            />
    </>
  )
}
