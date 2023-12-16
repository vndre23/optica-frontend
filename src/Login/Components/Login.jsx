import { InputText } from 'primereact/inputtext'
import React, { useMemo } from 'react'
import loginImage from '../../assets/login-landing.jpg';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
export const Login = (props) => {
    const isAuthenticating = useMemo(() => props.status === 'checking', [props.status]);
    return (
        <>

            <div className='surface-ground px-5 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center'>
                <div className='grid py-4 bg-white shadow-1 px-3'>
                    <div className='col-12 md:col-6 flex align-items-center justify-content-center' style={{ backgroundImage: "url('../../assets/register-landing-page.jpg')" }}>
                        <img src={loginImage} width={370} />
                    </div>
                    <div className='col-12 md:col-6'>
                        <Messages ref={props.msgs} />
                        <div className='font-semibold text-center	text-3xl'>
                            Login
                        </div>
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
                                <Button
                                    className='w-full'
                                    label="Ingresar"
                                    size='large'
                                    type='submit'
                                    loading={isAuthenticating}

                                ></Button>

                            </div>
                            <div className='mt-3 flex justify-content-center'>
                                <Button
                                    className=''
                                    label="Crear una cuenta"
                                    text
                                    onClick={() => props.onClickRegister()}
                                ></Button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>

    )
}
