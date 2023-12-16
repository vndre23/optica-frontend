import React from 'react'
import { Controller } from './Infraestructure/controller'

import HeaderCitas from './Components/HeaderCitas'
import ListaCitas from './Components/ListaCitas'
import DialogCitas from './Components/DialogCitas'
import Sidebar2 from '../Shared/Components/Sidebar2'

const Index = () => {
  const {handleClickAddCita, visible, onHide} =  Controller();
  return (
    <>
    
    <div className="px-3">
        
        <HeaderCitas handleClickAddCita={handleClickAddCita}/>
        <ListaCitas/>
        <DialogCitas visible={visible} onHide={onHide}/>
    </div>
    
    </>
  )
}

export default Index