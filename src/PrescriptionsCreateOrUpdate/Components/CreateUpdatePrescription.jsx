
import React from 'react'
import { Button } from 'primereact/button';


import { PrescriptionDetail } from './PrescriptionDetail';
import { CustomerDetail } from './CustomerDetail';

export const CreateUpdatePrescription = ({ 
        formik, 
        onSelectionCustomer, 
        selectedCustomer, 
        customers, 
        op,
        handleClickCancel,
        isOverlay=true,
    }) => {



    return (
        <>
            
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <CustomerDetail formik={formik} onSelectionCustomer={onSelectionCustomer} selectedCustomer={selectedCustomer} customers={customers} op={op} isOverlay={isOverlay}/>
                </div>
                <div>
                    <PrescriptionDetail formik={formik}/>
                </div>
                <div className='flex gap-3 '>
                    <Button label="Guardar" icon="pi pi-save" severity="success"/>
                    <Button label="Cancelar" icon="pi pi-ban" severity="danger" type="button" onClick={(e)=>handleClickCancel(e)}/>
                </div>
                
            </form>
        </>
    )
}
