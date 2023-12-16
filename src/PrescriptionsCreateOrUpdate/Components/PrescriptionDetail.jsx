import { InputText } from 'primereact/inputtext'
import React from 'react'
import { PrescriptionDetailTable } from './PrescriptionDetailTable'

export const PrescriptionDetail = ({ formik }) => {
    return (
        <>
            <div>
                {/*CABECERA DE SECCION DETALLE */}
                <div className='flex justify-content-between px-3'>
                    <div className='px-1 z-1 surface-0 flex align-items-center pt-3'>
                        <i className='pi pi-book text-900 mr-2'></i>
                        <span className='text-900 font-medium'>Detalle</span>

                    </div>

                </div>
                {/* FIN CABECERA */}

                {/* CABERA DE DETALLE FORM */}
                {/* <div className='border-1 border-round border-solid p-3 border-300'> */}
                <div className='grid mt-2 formgrid'>
                    <div className='lg:col-6'>
                        <PrescriptionDetailTable
                            visionText={'Vista Lejos'}
                            formik={formik}
                            rightEsfValue={formik.values.far?.right.esf}
                            rightEsfName={'far.right.esf'}
                            rigthCilValue={formik.values.far?.right.cil}
                            rigthCilName={'far.right.cil'}
                            rigthEjeValue={formik.values.far?.right.eje}
                            rigthEjeName={'far.right.eje'}
                            leftEsfValue={formik.values.far?.left.esf}
                            leftEsfName={'far.left.esf'}
                            leftCilValue={formik.values.far?.left.cil}
                            leftCilName={'far.left.cil'}
                            leftEjeValue={formik.values.far?.left.eje}
                            leftEjeName={'far.left.eje'}
                        />
                    </div>
                    <div className='lg:col-6'>
                        <PrescriptionDetailTable
                            visionText={'Vista Cerca'}
                            formik={formik}
                            rightEsfValue={formik.values.near?.right.esf}
                            rightEsfName={'near.right.esf'}
                            rigthCilValue={formik.values.near?.right.cil}
                            rigthCilName={'near.right.cil'}
                            rigthEjeValue={formik.values.near?.right.eje}
                            rigthEjeName={'near.right.eje'}
                            leftEsfValue={formik.values.near?.left.esf}
                            leftEsfName={'near.left.esf'}
                            leftCilValue={formik.values.near?.left.cil}
                            leftCilName={'near.left.cil'}
                            leftEjeValue={formik.values.near?.left.eje}
                            leftEjeName={'near.left.eje'}

                        />
                    </div>
                    <div className='lg:col-12'>
                        <div className={`border-1 border-round border-solid p-3 border-300 mb-2`}>
                            <div className="formgrid grid ">
                                <div className="field lg:col-3 md:col-3 sm:col-12 py-0 col-12">
                                    <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">DIP</label>
                                    <span className="p-input-icon-right w-full ">
                                        <i
                                            className={`
                                            
                                        `}
                                        />

                                        <InputText

                                            className={
                                                `w-full p-inputtext-sm border-1 
                                        
                                    `}
                                            id="dip"
                                            name="dip"
                                            value={formik.values.dip}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}


                                        />
                                    </span>
                                    {formik.touched.numberDocument && formik.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.numberDocument}</small>}

                                </div>


                                <div className="field lg:col-9 md:col-9 sm:col-12 py-0 col-12">
                                    <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Observaciones</label>
                                    <span className="p-input-icon-right w-full " >
                                        <i
                                            className={`
                                            
                                        `}
                                        />

                                        <InputText

                                            className={
                                                `w-full p-inputtext-sm border-1 
                                        
                                    `}
                                            id="observations"
                                            name="observations"
                                            value={formik.values.observations}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}


                                        />
                                    </span>
                                    {formik.touched.numberDocument && formik.errors.numberDocument && <small id="username-help" className="text-red-500 text-xs">{formik.errors.numberDocument}</small>}

                                </div>
                            </div>
                        </div>



                    </div>

                </div>

                {/* </div> */}
                {/* FIN DETALLE DETALLE FORM */}
            </div>



        </>
    )
}
