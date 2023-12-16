import { InputText } from 'primereact/inputtext'
import { Tooltip } from 'primereact/tooltip'
import React from 'react'

export const CustomerDetail = ({ formik, selectedCustomer, op, isOverlay=true }) => {
    return (
        <>

            {/*CABECERA DE SECCION CLIENTE */}
            <div className='flex justify-content-between px-3'>
                <div className='px-1 z-1 surface-0 flex align-items-center'>
                    <i className='pi pi-user text-900 mr-2'></i>
                    <span className='text-900 font-medium'>Cliente</span>
                    {
                        isOverlay && (
                            <>
                            <Tooltip target=".tooltip-search-customer" />
                            <i
                                className={`pi pi-search cursor-pointer text-primary-500 hover:bg-primary-50 border-circle p-2 tooltip-search-customer hover:text-primary-600`}
                                data-pr-tooltip="Buscar"
                                data-pr-position="right"
                                onClick={(e) => op.current.toggle(e)}

                            />
                            </>
                            
                        )
                    }
                    
                </div>

            </div>
            {/* FIN CABECERA */}

            {/* CABERA DE CUSTOMER FORM */}
            <div className='border-1 border-round border-solid p-3 border-300'>

                <div className="formgrid grid ">

                    <div className="field lg:col-3 md:col-4 sm:col-12 py-0 col-12">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Tipo Documento</label>
                        <span className="p-input-icon-right w-full " style={{ cursor: "not-allowed" }}>
                            <i
                                className={
                                    `${selectedCustomer && 'pi pi-check text-green-500'}
                                    `}
                            />

                            <InputText

                                className={
                                    `w-full p-inputtext-sm border-1 
                                        ${selectedCustomer && 'border-green-500'}
                                    `}
                                id="numberDocument"
                                name="numberDocument"
                                value={formik.values.customer?.typeDocument?.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled

                            />
                        </span>
                        {formik.touched.numberDocument && formik.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.numberDocument}</small>}

                    </div>
                    <div className="field lg:col-3 md:col-4 sm:col-12 py-0 col-12" >
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Numero Documento</label>
                        <span className="p-input-icon-right w-full" style={{ cursor: "not-allowed" }}>
                            <i
                                className={
                                    `${selectedCustomer && 'pi pi-check text-green-500'}
                                    `}
                            />

                            <InputText
                                style={{ cursor: "not-allowed !important" }}
                                className={
                                    `w-full p-inputtext-sm border-1 
                                        ${selectedCustomer && 'border-green-500'}
                                    `}
                                id="numberDocument"
                                name="numberDocument"
                                value={formik.values.customer?.numberDocument}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled

                            />
                        </span>
                        {formik.touched.numberDocument && formik.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.numberDocument}</small>}

                    </div>
                    <div className="field lg:col-3 md:col-4 sm:col-12 py-0 col-12">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Apellidos</label>
                        <span className="p-input-icon-right w-full" style={{ cursor: "not-allowed" }}>
                            <i
                                className={
                                    `${selectedCustomer && 'pi pi-check text-green-500'}
                                    `}
                            />

                            <InputText
                                className={
                                    `w-full p-inputtext-sm border-1
                                        ${selectedCustomer && 'border-green-500'}
                                    `}
                                id="numberDocument"
                                name="numberDocument"
                                value={formik.values.customer?.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled
                            />
                        </span>
                        {formik.touched.numberDocument && formik.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.numberDocument}</small>}

                    </div>
                    <div className="field lg:col-3 md:col-4 sm:col-12 py-0 col-12">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Nombres</label>
                        <span className="p-input-icon-right w-full" style={{ cursor: "not-allowed" }}>
                            <i
                                className={
                                    `${selectedCustomer && 'pi pi-check text-green-500'}
                                    `}
                            />

                            <InputText
                                className={
                                    `w-full p-inputtext-sm border-1 
                                        ${selectedCustomer && 'border-green-500'}
                                    `}
                                value={formik.values.customer?.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled
                            />
                        </span>
                        {formik.touched.numberDocument && formik.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.numberDocument}</small>}

                    </div>
                </div>
            </div>
            {/* FIN CABECERA CUSTOMER FORM */}
        </>
    )
}
