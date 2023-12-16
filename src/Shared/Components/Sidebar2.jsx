import React, { useEffect } from 'react'
import "./sidebar2.css";
import "./ScrollPanelCustom.css";
import { Avatar } from 'primereact/avatar';
import MainToolbar from './MainToolbar';
import {  NavLink } from 'react-router-dom';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Controller } from '../Infraestructure/controller';
import {Profile} from './Profile';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { ChangePassword } from './ChangePassword';
const Sidebar2 = (props) => {
    const access = [
        
                {
                    name:'Clientes',
                    icon: 'pi pi-users',
                    path: `${process.env.REACT_APP_ROUTE_CUSTOMERS}`
                },
                
                {
                    name:'Recetas',
                    icon: 'pi pi-book',
                    path: `${process.env.REACT_APP_ROUTE_PRESCRIPTIONS}`
                },
                {
                    name:'Usuarios',
                    icon: 'pi pi-wrench',
                    path: `${process.env.REACT_APP_ROUTE_USERS}`
                },
                {
                    name:'Configuración',
                    icon: 'pi pi-wrench',
                    path: `${process.env.REACT_APP_CONFIGURATIONS}`
                }
        
    ]
    const {user} = useSelector(state => state.auth);
    const {init, sidebarHidden,handleClickLogout,onSidebarHidden, visibleProfile, handleClickProfile, onHideProfile,formik,typeDocuments,genders,handleClickChangePassword,visibleChangePassword,formikChangePassword,onHideChangePassword} = Controller();
    const {isLoading} = useSelector(state=>state.loading);
    useEffect(() => {
      init();
    
      
    }, [])

    // useEffect(() => {
        
      
        
    //   }, [isLoading])
    
    
    // const items = [
    //     {
    //         name:'Clientes',
    //         icon: 'pi pi-users',
    //         path: '/clientes'
    //     },
        
    //     {
    //         name:'Recetas',
    //         icon: 'pi pi-book',
    //         path: '/recetas'
    //     },
    //     {
    //         name:'Usuarios',
    //         icon: 'pi pi-wrench',
    //         path: '/usuarios'
    //     },
    //     // {
    //     //     name:'Consultas Médicas',
    //     //     icon: 'pi pi-users'
    //     // }
    // ]
    console.log(isLoading);
  return (
    <>
        <div className="" style={{height: "100vh", overflow: "hidden"}}>
            <div className="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-1" className={`bg-template-sidebar2 h-screen lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-2 select-none w-16rem ${sidebarHidden===true ? 'hidden' : ''} `} >
                    <div className="flex flex-column h-full">
                        <div className="flex" style={{height: "60px"}}>
                            <div className='flex align-items-center px-5 bg-template-sidebar2 flex-shrink-0'>
                                <img src="https://tailwindui.com/img/logos/mark.svg?color=white" height={30}/>
                                <span className="text-white ml-2 font-medium">Empresa SAC</span>
                            </div>
                            
                            <Button icon='pi pi-times' className='lg:hidden ' onClick={()=>onSidebarHidden()}/>
                        </div>
                        
                        <div className="overflow-y-auto mt-0">
                        
                            <ul className="list-none px-3 m-0">
                                {
                                    user?.accesses?.map((item)=> {
                                        
                                        return(
                                        <li key={item._id} onClick={()=>onSidebarHidden()}>
                                            <NavLink

                                                className={`no-underline text-sidebar2 p-ripple flex align-items-center cursor-pointer my-2 px-3 py-2 bg-select-template-sidebar hover:text-white  border-round  transition-duration-150 transition-colors w-full`}
                                                to={`main${item.path}`}
                                            >
                                                <i className={`${item.icon} mr-2 hover:text-white`}></i>
                                                <span className="font-semibold hover:text-white">
                                                    {item.name}
                                                </span>
                                                <span className="p-ink" style={{height: "248px", width: "248px", top:"-97px", left: "-81px"}}></span>
                                            </NavLink>
                                            
                                        </li>)
                                    })
                                }
                                
                                
                            </ul>
                        </div>
                        <div className="mt-auto mx-3">
                            <hr className="mb-3 border-top-1 border-bluegray-100"/>
                            <div className="p-ripple my-3 px-3 py-2 flex align-items-center  border-round bg-select-template-sidebar cursor-pointer text-sidebar2 hover:text-white transition-duration-150 transition-colors w-full">
                            <Avatar
                                // image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                                shape="circle"
                                label={`${user.firstName.substring(0,1)}`}
                                style={{ backgroundColor: '#ffffff', color: '#4F46E5' }}
                            />
                                {/* <i className="pi pi-user"></i> */}
                                <span className="ml-2 font-medium text-white">{`${user.firstName} ${user.lastName}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex flex-column relative flex-auto">
                    <div className="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style={{height: "60px"}}>
                        <MainToolbar handleClickLogout={handleClickLogout} onSidebarHidden={onSidebarHidden} handleClickProfile={()=>handleClickProfile()} handleClickChangePassword={()=>handleClickChangePassword()}/>
                    </div>
                    
                    <div className="p-5 flex flex-column flex-auto">
                    
                        <div className="border-2 surface-border border-round surface-section flex-auto">
                            
                            <div className="p-3">
                            
                            <ScrollPanel style={{ width: '100%', height: '450px' }} className="custombar1">
                                {props.children}
                            </ScrollPanel>
                                
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Profile visible={visibleProfile} onHide={onHideProfile} formik={formik} typeDocuments={typeDocuments} genders={genders}/>
        <ChangePassword  formik={formikChangePassword} visible={visibleChangePassword} onHide={onHideChangePassword}/>
    </>
  )
}

export default Sidebar2