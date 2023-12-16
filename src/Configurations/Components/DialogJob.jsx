import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const DialogJob = ({ visible, onHide,formik }) => {
    const header=(
        <>
        <div className="flex align-items-center">
            <span 
                className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
                style={{width: "32px", height: "32px"}}
            >
                <i className="pi pi-cog"></i>
            </span>
            <span className="font-medium text-2xl text-900">
                Crear Cargo
            </span>
        </div>
        </>
    );
    return (

        <Dialog header={header} visible={visible} style={{ width: '30vw' }} onHide={() => onHide()}>
            <form onSubmit={formik.handleSubmit}>
                <div className="formgrid grid ">
                <div className="field lg:col-12 md:col-12 sm:col-12 py-0">
                        <label htmlFor="nombres" className="block font-medium text-900 text-sm">Cargo</label>
                        <span className="p-input-icon-right w-full">
                         <InputText 
                            className={`
                                w-full  p-inputtext-sm border-1 
                                ${formik.touched.name && !formik.errors.name  && 'border-green-500'}
                                ${formik.touched.name && formik.errors.name && 'border-red-500'}`
                            }
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {/*  */}
                        <i className={`
                            ${formik.touched.name && !formik.errors.name && 'pi pi-check text-green-500'}
                            ${formik.touched.name && formik.errors.name && 'pi pi-exclamation-circle text-red-500'} `}
                        />
                        </span>
                        {formik.touched.name && formik.errors.name && <small id="username-help" className="text-red-500 text-xs">{formik.errors.name}</small>}
                        
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

export default DialogJob