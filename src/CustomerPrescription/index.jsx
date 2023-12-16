import React, { useEffect } from 'react'


import { Controller } from './Infraestructure/controller';
import { CreateCostumerPrescription } from './Components/CreateCostumerPrescription';

const Index=()=> {
    
    const {init,formik,costumer,handleClickCancel} = Controller();
    useEffect(() => {
      
      init();
      
    }, [])
    
  return (
    <>
        <CreateCostumerPrescription
          formik={formik}
          selectedCustomer={costumer}
          handleClickCancel={handleClickCancel}

          
        />
    </>
  )
}

export default Index