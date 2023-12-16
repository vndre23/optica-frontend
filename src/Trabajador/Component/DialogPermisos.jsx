import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
export const  DialogPermisos = ({ visible, onHide,accesses,onChangeFilter,handleClickAddAccess,selectedAcceses,expandedRows,handleClickSelectedAcceses,handleClickExpandedRows}) => {

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
    
    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                    <i className={`${data.icon}`}></i>
                    <span className="vertical-align-middle ml-2 font-bold line-height-3">{data.name}</span>
            </React.Fragment>
        );
    };
    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total Customers:</div>
                </td>
            </React.Fragment>
        );
    };
    return (

        <Dialog header={header} visible={visible} style={{ width: '50vw' }} className='dialog' onHide={() => onHide()}>
            <Toolbar className="border-none bg-white p-0 py-3 border-round"  start={startContent} end={endContent}/>
            <DataTable 
                value={accesses} 
                rowGroupMode="subheader" 
                groupRowsBy="name" 
                selection={selectedAcceses}
                dataKey="_id" 
                sortMode="single" 
                sortOrder={1} 
                onSelectionChange={(e) => handleClickSelectedAcceses(e)}
                expandableRowGroups 
                expandedRows={expandedRows} 
                onRowToggle={(e) => handleClickExpandedRows(e)}
                rowGroupHeaderTemplate={headerTemplate} 
                // rowGroupFooterTemplate={footerTemplate} 
                tableStyle={{ minWidth: '10rem' }}
            >
                <Column selectionMode="multiple"></Column>
                <Column field="permiso" header="Permiso"></Column>
                
            </DataTable>
            
        </Dialog>
    )
}

