import React, { useEffect } from 'react'
import { ListDataViewPrescriptions } from './Components/ListDataViewPrescriptions'
import { ListPrescriptions } from './Components/ListPrescriptions'
import { Controller } from './Infraestructure/controller'


const Index = () => {
  const {init,handleClickAdd,data,handleClickUpdate,onChangeFilter,filter,handleClickNullify,visible,onHide,prescription,handleClickAccept,handleClickReject} = Controller();
  useEffect(()=>{
    init();
    console.log('user efefec')
  },[])
  return (
    <>
        {/* <ListDataViewPrescriptions/> */}
        <ListPrescriptions 
          handleClickAdd={handleClickAdd} 
          data={data} 
          handleClickUpdate={handleClickUpdate} 
          onChangeFilter={onChangeFilter} 
          filter={filter}
          handleClickNullify={handleClickNullify}
          visible={visible}
          onHide={onHide}
          prescription={prescription}
          handleClickReject={handleClickReject}
          handleClickAccept={handleClickAccept}
        />
        
    </>
  )
}

export default Index