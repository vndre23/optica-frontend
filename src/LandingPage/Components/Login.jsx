import React from 'react'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import loginLandingPge from '../../assets/login-landing.jpg';
function Login(props) {
    return (
        <Dialog header="Login" visible={props.visible} style={{ width: '50vw' }} onHide={() => props.onHide()}>
            <div className='grid py-5'>
                <div className='col-12 md:col-6' style={{backgroundImage:"url('../../assets/register-landing-page.jpg')"}}>
                    <img src={loginLandingPge} width={370}/>
                </div>
                <div className='col-12 md:col-6 flex align-items-center'>
                    <form className='w-full' onSubmit={props.formikLogin.handleSubmit}>
                        <div className='grid'>
                            <div className='field px-3 w-full'>
                                <label htmlFor="email" className="block font-medium text-900 text-lg">Correo</label>
                                <InputText 
                                    className={`
                                        w-full p-inputtext-lg
                                        ${props.formikLogin.touched.email && !props.formikLogin.errors.email && 'border-green-500'} 
                                        ${props.formikLogin.touched.email && props.formikLogin.errors.email && 'border-red-500'}
                                    `}
                                    id="email"
                                    name="email"
                                    value={props.formikLogin.values.email}
                                    onChange={props.formikLogin.handleChange}
                                    onBlur={props.formikLogin.handleBlur}
                                />
                                {props.formikLogin.touched.email && props.formikLogin.errors.email && <small id="username-help" className="text-red-500 text-xs">{props.formikLogin.errors.email}</small>}
                            </div>
                            
                            <div className='field px-3  w-full'>
                                <label htmlFor="password" className="block font-medium text-900 text-lg">Contraseña</label>
                                <InputText 
                                    className={`
                                        w-full p-inputtext-lg
                                        ${props.formikLogin.touched.password && !props.formikLogin.errors.password && 'border-green-500'} 
                                        ${props.formikLogin.touched.password && props.formikLogin.errors.password && 'border-red-500'}
                                    `}
                                    id="password"
                                    name="password"
                                    value={props.formikLogin.values.password}
                                    onChange={props.formikLogin.handleChange}
                                    onBlur={props.formikLogin.handleBlur}
                                    type='password'
                                />
                                {props.formikLogin.touched.password && props.formikLogin.errors.password && <small id="username-help" className="text-red-500 text-xs">{props.formikLogin.errors.password}</small>}
                            </div>
                            
                        </div>
                        <div className='pl-1'>
                            <Button className='w-full' label="Ingresar" size='large' type='submit'></Button>
                        </div>

                    </form>
                </div>
                
            </div>
        </Dialog>
    )
}

export default Login