import React from 'react'

import { Controller } from './Infraestructure/controller';
import { Register } from './Components/Register';

const index = () => {
    const {formikRegister,onClickLogin} = Controller();
  return (
    <>
        <Register 
          formikRegister={formikRegister}
          onClickLogin={onClickLogin}
        />
    </>
  )
}

export default index;