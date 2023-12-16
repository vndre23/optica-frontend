import React from 'react'
import { Login } from './Components/Login';
import { Controller } from './Infraestructure/controller';

const index = () => {
    const {formikLogin,onClickRegister,status,loading,errorMessage,msgs} = Controller();
  return (
    <>
        <Login 
          formikLogin={formikLogin}
          onClickRegister={onClickRegister}
          loading={loading}
          status={status}
          errorMessage={errorMessage}
          msgs={msgs}
        />
    </>
  )
}

export default index;