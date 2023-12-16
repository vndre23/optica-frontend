import React, {useRef} from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Controller } from '../Infraestructure/controller';
import { useSelector } from 'react-redux';
const MainToolbar = (props) => {
    const menuLeft = useRef(null);
    const {user} = useSelector(state=>state.auth);
    
    const items = [
        {
            label: 'Tu Perfil',
            command: () => {
                props.handleClickProfile();
            }
            
        },
        {
            label: 'Cambiar Clave',
            command: () => {
                props.handleClickChangePassword();
            }
            
        },
        {
            label: 'Cerrar Sesión',
            command: ()=> {
                props.handleClickLogout();
            }
            
        }
    ];
    const startContent = (
        <React.Fragment>
            <div className='p-ripple cursor-pointer block lg:hidden text-700' onClick={()=>props.onSidebarHidden()}>
                <i className='pi pi-bars text-4xl'></i>
            </div>
        </React.Fragment>
    );
    const endContent = (
        <React.Fragment>
            <div className="m-0 p-0 cursor-pointer" onClick={(event) => menuLeft.current.toggle(event)}>
                <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                <div className="flex align-items-center">
                    <div className='pr-2 sm:hidden hidden lg:block md:block'>{`${user.firstName.split(' ')[0] } ${user.firstName.split(' ')[1]===undefined ? user.lastName.split(' ')[0] :user.firstName.split(' ')[1] }`}</div>
                    <Avatar
                        // image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        shape="circle"
                        label={`${user.firstName.substring(0,1)}`}
                        style={{ backgroundColor: '#4F46E5', color: '#ffffff' }}
                    />
                    <i className='pi pi-chevron-down ml-1 text-gray-500' style={{ fontSize: '0.8rem' }}></i>
                </div>
                
            </div>
            
        </React.Fragment>
    );
  return (
    <>
        <Toolbar start={startContent} end={endContent} className="p-1 lg:w-full bg-white border-none"/>
    </>
  )
}

export default MainToolbar