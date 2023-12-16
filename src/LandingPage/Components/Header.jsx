import { Button } from 'primereact/button'
import React from 'react'
import header from '../../assets/header.jpg';
function Header() {
    return (
        <div className="grid grid-nogutter surface-section text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">¿Estas buscando un software</span>
                    <div className="text-6xl text-primary font-bold mb-3">para administrar para tu óptica?</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Te presentamos optics-automatic el software 100% confiable para que cubra las necesidades en tu optica el cual podras administrar tu negocio y olvidate del papeleo.</p>
                    <a href="#register" className='no-underline p-button p-component mr-3 p-button-raised p-button-lg hover:bg-primary-600 hover:text-white'>
                        <span className='p-button-label p-c'>
                            Registrate ahora
                        </span>
                    </a>
                    {/* <Button label="Registrate ahora" type="button" className="mr-3 p-button-raised" size='large'></Button> */}
                    {/* <Button label="Live Demo" type="button" className="p-button-outlined"></Button> */}
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src={header} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
    )
}

export default Header