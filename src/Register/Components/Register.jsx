import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import registerImage from '../../assets/register-landing-page.jpg';
export const Register = ({ formikRegister,onClickLogin }) => {
    return (
        <>
            <div className='surface-ground px-5 py-3 md:px-6 lg:px-8 flex align-items-center justify-content-center'>
                
                <div className='grid bg-white py-4 shadow-1'>
                    <div className='col-12 md:col-6' style={{ backgroundImage: "url('../../assets/register-landing-page.jpg')" }}>
                        <img src={registerImage} height={550} />
                    </div>
                    <div className='col-12 md:col-6'>
                        <div className='text-900 text-3xl font-medium mb-3 text-center'>Registrate</div>
                        <form className='w-full' onSubmit={formikRegister.handleSubmit}>
                            <div className='grid'>
                                <div className='field px-3 w-full'>
                                    <label htmlFor="numberDocument" className="block font-medium text-900 text-lg">Número de documento</label>
                                    <InputText

                                        className={`
                                        w-full
                                        ${formikRegister.touched.numberDocument && !formikRegister.errors.numberDocument && 'border-green-500'} 
                                        ${formikRegister.touched.numberDocument && formikRegister.errors.numberDocument && 'border-red-500'}
                                    `}
                                        id="numberDocument"
                                        name="numberDocument"
                                        value={formikRegister.values.numberDocument}
                                        onChange={formikRegister.handleChange}
                                        onBlur={formikRegister.handleBlur}
                                    />
                                    {formikRegister.touched.numberDocument && formikRegister.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formikRegister.errors.numberDocument}</small>}
                                </div>
                                <div className='field px-3  w-full'>
                                    <label htmlFor="businessName" className="block font-medium text-900 text-lg">Razón Social</label>
                                    <InputText

                                        className={`
                                        w-full
                                        ${formikRegister.touched.businessName && !formikRegister.errors.businessName && 'border-green-500'} 
                                        ${formikRegister.touched.businessName && formikRegister.errors.businessName && 'border-red-500'}
                                    `}
                                        id="businessName"
                                        name="businessName"
                                        value={formikRegister.values.businessName}
                                        onChange={formikRegister.handleChange}
                                        onBlur={formikRegister.handleBlur}
                                    />
                                    {formikRegister.touched.businessName && formikRegister.errors.businessName && <small id="username-help" className="text-red-500 text-xs">{formikRegister.errors.businessName}</small>}
                                </div>
                                <div className='field px-3 w-full'>
                                    <label htmlFor="email" className="block font-medium text-900 text-lg">Email</label>
                                    <InputText

                                        className={`
                                        w-full
                                        ${formikRegister.touched.email && !formikRegister.errors.email && 'border-green-500'} 
                                        ${formikRegister.touched.email && formikRegister.errors.email && 'border-red-500'}
                                    `}
                                        id="email"
                                        name="email"
                                        value={formikRegister.values.email}
                                        onChange={formikRegister.handleChange}
                                        onBlur={formikRegister.handleBlur}
                                    />
                                    {formikRegister.touched.email && formikRegister.errors.email && <small id="username-help" className="text-red-500 text-xs">{formikRegister.errors.email}</small>}
                                </div>
                                <div className='field px-3  w-full'>
                                    <label htmlFor="phone" className="block font-medium text-900 text-lg">Telefono o Celular</label>
                                    <InputText

                                        className={`
                                        w-full
                                        ${formikRegister.touched.phone && !formikRegister.errors.phone && 'border-green-500'} 
                                        ${formikRegister.touched.phone && formikRegister.errors.phone && 'border-red-500'}
                                    `}
                                        id="phone"
                                        name="phone"
                                        value={formikRegister.values.phone}
                                        onChange={formikRegister.handleChange}
                                        onBlur={formikRegister.handleBlur}
                                    />
                                    {formikRegister.touched.phone && formikRegister.errors.phone && <small id="username-help" className="text-red-500 text-xs">{formikRegister.errors.phone}</small>}
                                </div>
                                <div className='field px-3  w-full'>
                                    <label htmlFor="address" className="block font-medium text-900 text-lg">Dirección</label>
                                    <InputText

                                        className={`
                                        w-full
                                        ${formikRegister.touched.address && !formikRegister.errors.address && 'border-green-500'} 
                                        ${formikRegister.touched.address && formikRegister.errors.address && 'border-red-500'}
                                    `}
                                        id="address"
                                        name="address"
                                        value={formikRegister.values.address}
                                        onChange={formikRegister.handleChange}
                                        onBlur={formikRegister.handleBlur}
                                    />
                                    {formikRegister.touched.address && formikRegister.errors.address && <small id="username-help" className="text-red-500 text-xs">{formikRegister.errors.address}</small>}
                                </div>
                            </div>
                            <div className='pl-1'>
                                <Button className='w-full' label="Registrate" size=''></Button>
                            </div>
                            <div className='mt-3 flex justify-content-center'>
                                <Button className='' label="Regresar Login" text onClick={()=>onClickLogin()}></Button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
