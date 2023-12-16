import { Dialog } from 'primereact/dialog'
import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
export const ChangePassword = ({ formik, visible, onHide, }) => {
    const header = (
        <>
            <div className="flex align-items-center">
                <span
                    className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
                    style={{ width: "32px", height: "32px" }}
                >
                    <i className="pi pi-users"></i>
                </span>
                <span className="font-medium text-2xl text-900">
                    Cambia tu contraseña
                </span>
            </div>
        </>
    );
    return (
        <Dialog header={header} visible={visible} style={{ width: '50vw' }} className='dialog' onHide={() => onHide()}>
            <form onSubmit={formik.handleSubmit}>
                <div className="formgrid grid ">
                    <div className="field lg:col-12 md:col-12 sm:col-12 py-0  col-12">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">contraseña actual</label>
                        <span className="p-input-icon-right w-full">
                            <i
                                className={
                                    `${formik.touched.passwordActual && !formik.errors.passwordActual && 'pi pi-check text-green-500'}
                                    ${formik.touched.passwordActual && formik.errors.passwordActual && 'pi pi-exclamation-circle text-red-500'} `}
                            />
                            <InputText
                                className={
                                    `w-full p-inputtext-sm border-1 
                                    ${formik.touched.passwordActual && !formik.errors.passwordActual && 'border-green-500'}
                                    ${formik.touched.passwordActual && formik.errors.passwordActual && 'border-red-500'}`

                                }
                                type='password'
                                id="passwordActual"
                                name="passwordActual"
                                value={formik.values.passwordActual}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </span>
                        {formik.touched.passwordActual && formik.errors.passwordActual && <small id="username-help" className="text-red-500 text-xs">{formik.errors.passwordActual}</small>}

                    </div>
                </div>
                <div className="formgrid grid py-0">
                    <div className="field lg:col-12 md:col-12 sm:col-12 py-0  col-12">
                        <label htmlFor="nombres" className="block font-medium text-900 text-sm">Contraseña nueva</label>
                        <span className="p-input-icon-right w-full">
                            <InputText
                                type='password'
                                className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.passwordNueva && !formik.errors.passwordNueva && 'border-green-500'}
                                ${formik.touched.passwordNueva && formik.errors.passwordNueva && 'border-red-500'}`
                                }
                                id="passwordNueva"
                                name="passwordNueva"
                                value={formik.values.passwordNueva}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                
                            />
                            {/*  */}
                            <i className={`
                            ${formik.touched.passwordNueva && !formik.errors.passwordNueva && 'pi pi-check text-green-500'}
                            ${formik.touched.passwordNueva && formik.errors.passwordNueva && 'pi pi-exclamation-circle text-red-500'} `}
                            />
                        </span>
                        {formik.touched.passwordNueva && formik.errors.passwordNueva && <small id="username-help" className="text-red-500 text-xs">{formik.errors.passwordNueva}</small>}

                    </div>
                    <div className="field lg:col-12 md:col-12 sm:col-12 py-0  col-12">
                        <label htmlFor="apellidos" className="block font-medium text-900 text-sm">Repetir nueva contraseña</label>
                        <span className="p-input-icon-right w-full">
                            <InputText
                                type='password'
                                className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.passwordRepeat && !formik.errors.passwordRepeat && 'border-green-500'}
                                ${formik.touched.passwordRepeat && formik.errors.passwordRepeat && 'border-red-500'}`
                                }
                                id="passwordRepeat"
                                name="passwordRepeat"
                                value={formik.values.passwordRepeat}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                
                            />
                            <i className={`
                            ${formik.touched.passwordRepeat && !formik.errors.passwordRepeat && 'pi pi-check text-green-500'}
                            ${formik.touched.passwordRepeat && formik.errors.passwordRepeat && 'pi pi-exclamation-circle text-red-500'} `}
                            />
                        </span>
                        {formik.touched.passwordRepeat && formik.errors.passwordRepeat && <small id="username-help" className="text-red-500 text-xs">{formik.errors.passwordRepeat}</small>}
                    </div>

                </div>
                

                <div className="flex gap-3 justify-content-end">
                    <div>
                        <Button type="submit" label="Guardar" size="small" severity="success" />
                    </div>
                    <div>
                        <Button type="button" label="Cancelar" size="small" severity="danger" onClick={() => onHide()} />
                    </div>


                </div>


            </form>
        </Dialog>
    )
}
