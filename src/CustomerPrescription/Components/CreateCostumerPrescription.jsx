
import React from 'react'
import { Button } from 'primereact/button';
import { PrescriptionDetail } from './PrescriptionDetail';
import { CustomerDetail } from './CustomerDetail';

export const CreateCostumerPrescription = ({ 
        formik,
        selectedCustomer, 
        handleClickCancel,
    }) => {



    return (
        <>
            
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <CustomerDetail formik={formik} selectedCustomer={selectedCustomer}/>
                </div>
                <div>
                    <PrescriptionDetail formik={formik}/>
                </div>
                <div className='flex gap-3'>
                    <Button label="Guardar" icon="pi pi-save" severity="success"/>
                    <Button label="Cancelar" icon="pi pi-ban" severity="danger" type="button" onClick={(e)=>handleClickCancel(e)}/>
                </div>
                
            </form>
        </>
    )
}
