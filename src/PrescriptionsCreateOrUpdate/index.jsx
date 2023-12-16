import React, { useEffect } from 'react'
import { Controller } from './Infraestructure/controller'
import { CreateUpdatePrescription } from './Components/CreateUpdatePrescription';
import {Controller as ControllerClient} from '../Clientes/Infraestructure/controller';
import OverlayPanelCustomers from './Components/OverlayPanelCustomers';
import DialogCliente from '../Clientes/Components/DialogCliente';
import DialogCustomer from './Components/DialogCostumer';
const Index = () => {
    const {
      init,
      formik,
      selectedCustomer,
      onSelectionCustomer,
      customers,
      op,
      handleChangeFilter,
      filter,
      handleClickCancel,
      handleClickAddCustomer,
      dataCustomers,
      visible,
      genders,
      typeDocuments,
      formikCustomer,
      onHide

    } = Controller();
    
    useEffect(()=>{
      console.log('useEffect de prescription')
      init();
    },[]);
    useEffect(() => {
      
    
      
    }, [formik.values]);

    
    
  return (
    <>
        <CreateUpdatePrescription 
          formik={formik} 
          selectedCustomer={selectedCustomer} 
          onSelectionCustomer={onSelectionCustomer} 
          op={op}
          handleClickCancel={handleClickCancel}
        />


              <OverlayPanelCustomers
                customers={customers}
                selectedCustomer={selectedCustomer} 
                onSelectionCustomer={onSelectionCustomer} 
                op={op} 
                 
                handleChangeFilter={handleChangeFilter}
                filter={filter}
                handleClickAddCustomer={handleClickAddCustomer}
                dataCustomers={dataCustomers}
            />

      <DialogCustomer 
        visible={visible} 
        onHide={onHide} 
        genders={genders} 
        typeDocuments={typeDocuments} 
        formik={formikCustomer}
      />
    </>
  )
}

export default Index