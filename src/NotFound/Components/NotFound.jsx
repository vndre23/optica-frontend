import { Button } from 'primereact/button'
import React from 'react'
import notFoundLogo from '../../assets/notFound.jpg';
import { Navigate, useNavigate } from 'react-router-dom';
export const NotFound = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
            <div className='flex flex-column lg:flex-row justify-content-center align-items-center gap-7'>
                <div className='text-center lg:text-right'>
                    <div className='mt-6 mb-3 font-bold text-6xl text-900'>
                    Página 404
                    </div>
                    <div className='text-700 text-3xl mt-0 mb-6'>
                    Lo sientimos pero no encontramos esta página.
                    </div>
                    <Button label="Regresar al Inicio" onClick={()=>navigate('/')}/>
                </div>
                <div>
                    <img src={notFoundLogo} alt="not found" className='w-full md:w-28rem'/>
                </div>
            </div>
        </div>
    </>
  )
}
