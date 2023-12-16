import React from 'react'
import Header from './Components/Header'
import Feature from './Components/Feature'
import CallAction from './Components/CallAction'
import ContatUs from './Components/ContatUs'
import NavbarLandingPage from './Components/NavbarLandingPage'
import { Controller } from './Infraestructure/controller'
import Login from './Components/Login'

const index=()=> {
    const {visible,onHide, onLogin,formikLogin,formikRegister} = Controller();
  return (
    <>
    <NavbarLandingPage onLogin={onLogin} visible={visible} onHide={onHide}/>
    <section id="header" className='pt-6'>
        <Header/>
    </section>
    <section id="feature">
        <Feature/>
        <CallAction/>
    </section>
    <section id="register">
        <ContatUs formikRegister={formikRegister}/>
    </section>
    <Login visible={visible} onHide={onHide} formikLogin={formikLogin}/>
        
        
        
        
    </>
  )
}

export default index