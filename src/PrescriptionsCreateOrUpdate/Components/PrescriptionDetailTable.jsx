
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import './PrescriptionDetail.css';
export const PrescriptionDetailTable = (
        {
            formik, 
            visionText,
            rightEsfValue,
            rigthCilValue, 
            rigthEjeValue, 
            leftEsfValue, 
            leftCilValue, 
            leftEjeValue,
            
            rightEsfName,
            rigthCilName,
            rigthEjeName,
            leftEsfName,
            leftCilName,
            leftEjeName,

        }) => {
    return (

            <div className={`border-1 border-round border-solid p-3 border-300 mb-2`}>
                <div className='text-center'>
                    <span className='font-semibold text-center'>{visionText}</span>
                </div>
                
                <div className="formgrid grid mt-3">

                    <div className="field col-3 py-0">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">OJO</label>
                    </div>
                    <div className="field col-3 py-0">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Esferico</label>
                    </div>
                    <div className="field col-3 py-0">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Cilindrico</label>
                    </div>
                    <div className="field col-3 py-0">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Eje</label>
                    </div>
                </div>

                <div className="formgrid grid ">
                
                    <div className="field col-3 py-0 align-self-center">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Derecho</label>
                    </div>
                    <div className="field col-3 py-0 align-self-center">
                        <span className="p-input-icon-right w-full">
                            <i
                                className={`
                                            
                                    `}
                            />

                            <InputText

                                className={
                                    `w-full p-inputtext-sm border-1 p-dialog-responsive-detail
                                            
                                    `}
                                id={rightEsfName}
                                name={rightEsfName}
                                value={rightEsfValue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}


                            />
                        </span>
                    </div>
                    <div className="field col-3 py-0 align-self-center">
                        <span className="p-input-icon-right w-full">
                            <i
                                className={`
                                            
                                    `}
                            />

                            <InputText

                                className={
                                    `w-full p-inputtext-sm border-1 p-dialog-responsive-detail
                                            
                                    `}
                                id={rigthCilName}
                                name={rigthCilName}
                                value={rigthCilValue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}


                            />
                        </span>
                    </div>
                    <div className="field col-3 py-0 align-self-center">
                        <span className="p-input-icon-right w-full">
                            <i
                                className={`
                                            
                                    `}
                            />
                            {/* <InputNumber inputClassName={
                                `w-full p-inputtext-sm border-1
                                        
                                `}
                                
                                inputId={rigthEjeName} 
                                value={rigthEjeName} 
                                // onValueChange={(e)=>formik.handleChange(e)}
                                onChange={(e)=>formik.handleChange(e)}
                                suffix="°" 
                                onBlur={formik.handleBlur}
                                // min={0} 
                                // max={40} 
                            /> */}
                            <InputText

                                className={
                                    `w-full p-inputtext-sm border-1 p-dialog-responsive-detail
                                            
                                    `}
                                id={rigthEjeName}
                                name={rigthEjeName}
                                value={rigthEjeValue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}


                            />
                        </span>
                    </div>
                </div>

                <div className="formgrid grid ">

                <div className="field col-3 py-0 align-self-center">
                        <label htmlFor="numero-documento" className="block font-medium text-900 text-sm">Izquierdo</label>
                    </div>
                    <div className="field col-3 py-0 align-self-center">
                        <span className="p-input-icon-right w-full">
                            <i
                                className={`
                                            
                                    `}
                            />

                            <InputText

                                className={
                                    `w-full p-inputtext-sm border-1 p-dialog-responsive-detail
                                            
                                    `}
                                id={leftEsfName}
                                name={leftEsfName}
                            value={leftEsfValue}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}


                            />
                        </span>
                    </div>
                    <div className="field col-3 py-0 align-self-center">
                        <span className="p-input-icon-right w-full">
                            <i
                                className={`
                                            
                                    `}
                            />

                            <InputText

                                className={
                                    `w-full p-inputtext-sm border-1 p-dialog-responsive-detail
                                            
                                    `}
                                id={leftCilName}
                                name={leftCilName}
                                value={leftCilValue}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}


                            />
                        </span>
                    </div>
                    <div className="field col-3 py-0 align-self-center">
                        <span className="p-input-icon-right w-full">
                            <i
                                className={`
                                            
                                    `}
                            />
                            {/* <InputNumber inputClassName={
                                `w-full p-inputtext-sm border-1
                                        
                                `}
                                inputId={leftEjeName} 
                                value={leftEjeValue} 
                                onValueChange={formik.handleChange} 
                                suffix="°" 
                                onBlur={formik.handleBlur}
                                // onChange={formik.handleChange}
                                // min={0} 
                                // max={40} 
                            /> */}
                            <InputText

                                className={
                                    `w-full p-inputtext-sm border-1 p-dialog-responsive-detail
                                            
                                    `}
                                id={leftEjeName}
                                name={leftEjeName}
                            value={leftEjeValue}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}


                            />
                        </span>
                    </div>
                </div>
            </div>
        

    )
}
