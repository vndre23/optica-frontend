import React, { useEffect } from 'react'
import { ListJobs } from './Components/ListJobs'
import { Controller } from './Infraestructure/controller'
import DialogJob from './Components/DialogJob';
import DialogListAccess from './Components/DialogListAccess';
import DialogAccess from './Components/DialogAccess';

const Index = () => {
  const {
      init,
      onHide,
      visible,
      handleClickAdd,
      formik,
      jobs,
      handleClickUpdate,
      handleClickAccess,
      visibleListAccess,
      onHideListAccess,
      handleClickAddAccess,
      visibleFormAccess,
      formikAccess,
      accesses
    } = Controller();

  useEffect(() => {
    init();
  
    
  }, [])
  
  return (
    <>
        <ListJobs 
          handleClickAdd={handleClickAdd} 
          data={jobs}
          handleClickUpdate={handleClickUpdate}
          handleClickAccess={handleClickAccess}
        />

        <DialogJob
          visible={visible}
          formik={formik}
          onHide={onHide}
        />

        <DialogListAccess 
          visible={visibleListAccess}
          onHide={onHideListAccess}
          handleClickAddAccess={handleClickAddAccess}
        />

        <DialogAccess 
          visible={visibleFormAccess}
          formik={formikAccess}
          optionsAccess={accesses}
          // onHide={onHideListAccess}
          // handleClickAddAccess={handleClickAddAccess}
        />
    </>
  )
}

export default Index
