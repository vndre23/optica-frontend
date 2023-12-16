import React from 'react'
import FeatureCard from './FeatureCard'

function Feature() {
  return (
    <div className='px-4 pt-8 md:px-6 lg:px-8 surface-ground'
        // style={{background:"radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)"}}
    >
        <div className='text-primary-600 text-xl font-medium mb-3'>TODO LO QUE NECESITAS</div>
        <div className='text-900 text-teal-600 text-3xl font-bold mb-3'>Concentrate en lo tuyo</div>
        <div className='grid mt-7'>
            <div className='col-12 md:col-4'>
                <FeatureCard icon="pi-heart-fill" text='Interfaz Amigable' color='purple'/>
            </div>
            <div className='col-12 md:col-4'>
                <FeatureCard icon="pi-lock" text='Seguridad para ti y tus clientes' color='orange'/>
            </div>
            <div className='col-12 md:col-4'>
                <FeatureCard icon="pi-desktop" text='Acceso inmediato' color='primary'/>
            </div>
        </div>
    </div>
  )
}

export default Feature