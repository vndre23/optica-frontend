import React, { useEffect } from 'react';
import ListaTrabajador from './Component/ListaTrabajador';
import { Button } from 'primereact/button';
import HeaderTrabajador from './Component/HeaderTrabajador';
import { Controller } from './Infraestructure/controller';
import DialogTrabajador from './Component/DialogTrabajador';
import {DialogPermisos} from './Component/DialogPermisos';

const Index = () => {
  const {init,handleClickAddCliente, visible, onHide,data, setFilter, filter,genders,typeDocuments,formik,handleClickUpdateUser,visibleAccess,handleClickPermisos,accesses,onHidePermisos,selectedAcceses,expandedRows,handleClickSelectedAcceses,handleClickExpandedRows,handleClickAddAccess} =  Controller();
  useEffect(()=>{
    init();
  },[])
  
  
  return (
    <>
    <div className="px-3">
        
        {/* <HeaderPaciente handleClickAddPaciente={handleClickAddPaciente}/> */}
        <ListaTrabajador data={data} filter={filter} setFilter={setFilter} handleClickAddCliente={handleClickAddCliente} handleClickUpdateUser={handleClickUpdateUser} handleClickPermisos={handleClickPermisos}/>
        <DialogTrabajador visible={visible} onHide={onHide} genders={genders} typeDocuments={typeDocuments} formik={formik}/>
        <DialogPermisos visible={visibleAccess} accesses={accesses} users={data} onHide={onHidePermisos} selectedAcceses={selectedAcceses} expandedRows={expandedRows} handleClickSelectedAcceses={handleClickSelectedAcceses} handleClickExpandedRows={handleClickExpandedRows} handleClickAddAccess={handleClickAddAccess}/>
    </div>
    </>
  )
}

export default Index