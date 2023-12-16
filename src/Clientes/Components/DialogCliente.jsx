import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const DialogCliente = ({ visible, onHide,genders,typeDocuments,formik }) => {
    const header=(
        <>
        <div className="flex align-items-center">
            <span 
                className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
                style={{width: "32px", height: "32px"}}
            >
                <i className="pi pi-users"></i>
            </span>
            <span className="font-medium text-2xl text-900">
                Crear Cliente
            </span>
        </div>
        </>
    );
    return (

        <Dialog header={header} visible={visible} style={{ width: '50vw' }} onHide={() => onHide()} className='dialog'>
            <form onSubmit={formik.handleSubmit}>
                <div className="formgrid grid ">
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0 col-12">
                        <label htmlFor="tipo-documento" className="block font-medium text-900 text-sm">Tipo Documento</label>
                        <Dropdown 
                            className={`
                                w-full p-inputtext-sm border-1 
                                ${formik.touched.typeDocument && !formik.errors.typeDocument && 'border-green-500'} 
                                ${formik.touched.typeDocument && formik.errors.typeDocument && 'border-red-500'}`}
                            options={typeDocuments} 
                            optionLabel='name'
                            id="typeDocument"
                            name="typeDocument"
                            value={formik.values.typeDocument}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.typeDocument && formik.errors.typeDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.typeDocument}</small>}
                    </div>
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0  col-12">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Número Documento</label>
                        <span className="p-input-icon-right w-full">
                            <i 
                                className={
                                    `${formik.touched.numberDocument && !formik.errors.numberDocument && 'pi pi-check text-green-500'}
                                    ${formik.touched.numberDocument && formik.errors.numberDocument && 'pi pi-exclamation-circle text-red-500'} `}
                            />
                            <InputText 
                                className={
                                    `w-full p-inputtext-sm border-1 
                                    ${formik.touched.numberDocument && !formik.errors.numberDocument && 'border-green-500'}
                                    ${formik.touched.numberDocument && formik.errors.numberDocument && 'border-red-500'}`
                                    
                                }
                                id="numberDocument"
                                name="numberDocument"
                                value={formik.values.numberDocument}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </span>
                        {formik.touched.numberDocument && formik.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.numberDocument}</small>}
                        
                    </div>
                </div>
                <div className="formgrid grid py-0">
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0  col-12">
                        <label htmlFor="nombres" className="block font-medium text-900 text-sm">Nombres</label>
                        <span className="p-input-icon-right w-full">
                         <InputText 
                            className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.firstName && !formik.errors.firstName  && 'border-green-500'}
                                ${formik.touched.firstName && formik.errors.firstName && 'border-red-500'}`
                            }
                            id="firstName"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {/*  */}
                        <i className={`
                            ${formik.touched.firstName && !formik.errors.firstName && 'pi pi-check text-green-500'}
                            ${formik.touched.firstName && formik.errors.firstName && 'pi pi-exclamation-circle text-red-500'} `}
                        />
                        </span>
                        {formik.touched.firstName && formik.errors.firstName && <small id="username-help" className="text-red-500 text-xs">{formik.errors.firstName}</small>}
                        
                    </div>
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0  col-12">
                        <label htmlFor="apellidos" className="block font-medium text-900 text-sm">Apellidos</label>
                        <span className="p-input-icon-right w-full">
                        <InputText 
                            className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.lastName && !formik.errors.lastName  && 'border-green-500'}
                                ${formik.touched.lastName && formik.errors.lastName && 'border-red-500'}`
                            }
                            id="lastName"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <i className={`
                            ${formik.touched.lastName && !formik.errors.lastName && 'pi pi-check text-green-500'}
                            ${formik.touched.lastName && formik.errors.lastName && 'pi pi-exclamation-circle text-red-500'} `}
                        />
                        </span>
                        {formik.touched.lastName && formik.errors.lastName && <small id="username-help" className="text-red-500 text-xs">{formik.errors.lastName}</small>}
                    </div>
                    
                </div>
                <div className="formgrid grid">
                    <div className="field lg:col-4 md:col-4 sm:col-12 py-0  col-12">
                        <label htmlFor='fecha-nacimiento' className="block font-medium text-900 text-sm">Fecha Nacimiento</label>
                        <InputText 
                            className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.birthDate && !formik.errors.birthDate  && 'border-green-500'}
                                
                            `}
                            type="date"
                            
                            id="birthDate"
                            name="birthDate"
                            value={formik.values.birthDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </div>
                    <div className="field lg:col-4 md:col-4 sm:col-12 py-0  col-12">
                        <label htmlFor='edad' className="block font-medium text-900 text-sm">Edad</label>
                        <InputText className="w-full p-inputtext-sm" disabled/>
                    </div>
                    <div className="field lg:col-4 md:col-4 sm:col-12 xs:col-12 py-0  col-12">
                        <label htmlFor='sexo' className="block font-medium text-900 text-sm">Sexo</label>
                        <Dropdown 
                            className={`
                            w-full p-inputtext-sm border-1 
                            ${formik.touched.gender && !formik.errors.gender && 'border-green-500'} 
                            ${formik.touched.gender && formik.errors.gender && 'border-red-500'}`} 
                            options={genders} 
                            optionLabel='name'
                            id="gender"
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.gender && formik.errors.gender && <small id="username-help" className="text-red-500 text-xs">{formik.errors.gender}</small>}
                    </div>
                </div>

                <div className="formgrid grid py-0">
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0 col-12">
                        <label htmlFor="email" className="block font-medium text-900 text-sm">Correo</label>
                        <span className="p-input-icon-right w-full">
                         <InputText 
                            className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.email && !formik.errors.email  && 'border-green-500'}
                                ${formik.touched.email && formik.errors.email && 'border-red-500'}`
                            }
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {/*  */}
                        <i className={`
                            ${formik.touched.email && !formik.errors.email && 'pi pi-check text-green-500'}
                            ${formik.touched.email && formik.errors.email && 'pi pi-exclamation-circle text-red-500'} `}
                        />
                        </span>
                        {formik.touched.email && formik.errors.email && <small id="username-help" className="text-red-500 text-xs">{formik.errors.email}</small>}
                        
                    </div>
                    <div className="field lg:col-6 md:col-6 sm:col-12 py-0  col-12">
                        <label htmlFor="phone" className="block font-medium text-900 text-sm">Telefono</label>
                        <span className="p-input-icon-right w-full">
                        <InputText 
                            className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.phone && !formik.errors.phone  && 'border-green-500'}
                                ${formik.touched.phone && formik.errors.phone && 'border-red-500'}`
                            }
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <i className={`
                            ${formik.touched.phone && !formik.errors.phone && 'pi pi-check text-green-500'}
                            ${formik.touched.phone && formik.errors.phone && 'pi pi-exclamation-circle text-red-500'} `}
                        />
                        </span>
                        {formik.touched.phone && formik.errors.phone && <small id="username-help" className="text-red-500 text-xs">{formik.errors.phone}</small>}
                    </div>
                    
                </div>

                <div className="formgrid grid py-0">
                    <div className="field lg:col-12 md:col-6 sm:col-12 py-0 col-12">
                        <label htmlFor="address" className="block font-medium text-900 text-sm">Dirección</label>
                        <span className="p-input-icon-right w-full">
                         <InputText 
                            className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.address && !formik.errors.address  && 'border-green-500'}
                                ${formik.touched.address && formik.errors.address && 'border-red-500'}`
                            }
                            id="address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {/*  */}
                        <i className={`
                            ${formik.touched.address && !formik.errors.address && 'pi pi-check text-green-500'}
                            ${formik.touched.address && formik.errors.address && 'pi pi-exclamation-circle text-red-500'} `}
                        />
                        </span>
                        {formik.touched.address && formik.errors.address && <small id="username-help" className="text-red-500 text-xs">{formik.errors.address}</small>}
                        
                    </div>
                    
                    
                </div>

                <div className="flex gap-3 justify-content-end">
                    <div>
                        <Button type="submit" label="Guardar" size="small" severity="success"/>
                    </div>
                    <div>
                        <Button type="button" label="Cancelar" size="small" severity="danger" onClick={()=>onHide()}/>
                    </div>
                    
                    
                </div>
                
                
            </form>
        </Dialog>
    )
}

export default DialogCliente