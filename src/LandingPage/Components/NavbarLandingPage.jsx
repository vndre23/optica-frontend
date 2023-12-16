import React from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';
function NavbarLandingPage(props) {
  const items = [
    {
      id:1,
      name:'Inicio',
      to:'#header'
    },
    {
      id:2,
      name:'Registrate',
      to:'#register'
    }
  ];
  const endContent = (
    <React.Fragment>
      <Button label="Login" link className='text-white' onClick={()=>props.onLogin()}/>
    </React.Fragment>
  );
  const startContent = (
    <React.Fragment>
      {
        items.map((value)=> (
          <a key={value.id} className="p-button p-component text-white p-button-link no-underline" href={`${value.to}`}>
            <span className='p-button-label p-c'>{value.name}</span>
          </a>
        ))
      }
      
    </React.Fragment>
  );
  return (
    <>
      <Toolbar start={startContent} end={endContent} className='p-0 py-2 px-3 border-noround bg-primary-500 fixed w-full z-1' />
    </>
  )
}

export default NavbarLandingPage