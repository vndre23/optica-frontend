import { Button } from 'primereact/button'
import React from 'react'

function CallAction() {
    return (
        <div className='surface-ground px-4 py-8 md:px-6 lg:px-8 '>
            <div className='flex flex-wrap relative overflow-hidden bg-teal-800 border-round-2xl'
                // style={{ borderRadius: '1rem', background: 'radial-gradient(100% 1126.49% at 100% 0%, rgba(106, 200, 212, 0.4) 0%, rgba(33, 33, 33, 0) 100%), rgb(33, 33, 33)' }}
            >
                <div className='px-6 py-8'>
                    <div className='text-white text-medium text-5xl mt-3 mb-5'>
                        Que esperas Registrate Ahora!
                    </div>
                    <a href="#register" className='no-underline p-button p-component bg-cyan-600 border-none hover:bg-cyan-500 p-button-rounded p-button-lg'>
                        <span className='p-button-icon p-c p-button-icon-left pi pi-check'>
                            
                        </span>
                        <span className='p-button-label p-c'>Registrate ahora</span>
                    </a>
                    {/* <Button className='bg-cyan-600 border-none hover:bg-cyan-500' rounded label="Registrate ahora" size='large' icon='pi pi-check'></Button> */}
                </div>
                <div className='static block mx-auto align-self-center'>
                    <i className='pi pi-star-fill text-white text-8xl'></i>
                </div>
            </div>
        </div>

    )
}

export default CallAction