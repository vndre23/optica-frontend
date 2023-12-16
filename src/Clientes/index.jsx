import React, { useEffect } from 'react';
import ListaCliente from './Components/ListaCliente';
import { Button } from 'primereact/button';
import HeaderCliente from './Components/HeaderCliente';
import { Controller } from './Infraestructure/controller';
import DialogCliente from './Components/DialogCliente';

const Index = () => {
  const {
    init,
    handleClickAddCliente, 
    visible, 
    onHide,
    data, 
    onChangeFilter, 
    filter,
    genders,
    typeDocuments,
    formik,
    onClickUpdateCustomer,
    onClickPrescriptionCustomer,
    user,
    permisos
  } =  Controller();
  useEffect(()=>{
    init();
    console.log('user efefec')
  },[])
  if(user.accesses.filter(item=>(item.name==='Clientes')).filter((permiso)=>permiso==='vista').length!==0){
    return (<></>)
  }
  
  return (
    <>
    <div className="px-3">
        
        {/* <HeaderPaciente handleClickAddPaciente={handleClickAddPaciente}/> */}
        
        <ListaCliente data={data} filter={filter} onChangeFilter={onChangeFilter} handleClickAddCliente={handleClickAddCliente} onClickUpdateCustomer={onClickUpdateCustomer} onClickPrescriptionCustomer={onClickPrescriptionCustomer} user={user} permisos={permisos}/>
        <DialogCliente visible={visible} onHide={onHide} genders={genders} typeDocuments={typeDocuments} formik={formik}/>
    </div>
    </>
  )
}

export default Index