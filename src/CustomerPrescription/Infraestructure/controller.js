import { useFormik } from 'formik';
import {useRef, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import opticaApi from '../../api/opticaApi';
export const Controller = () =>{
    const navigate =  useNavigate();
    const {customerId} = useParams()
    const [costumer,setCostumer] = useState();
    const init=async()=> {
        await dataCostumer();
        
    }
    const dataCostumer = async() => {
        console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",customerId);
        try {
            
            const {data} = await opticaApi.get(`/customers/${customerId}`);
            
            
            
            setCostumer(data.customer);
            formik.setValues({
                ...formik.values,
                customer:data.customer
            })
        } catch (error) {
            console.log(`${error}`);
        }
    }
    
    
    
    const formik = useFormik({
        initialValues: {
            emisionDate: Date(),
            customer: '',
            dip: '',
            observations:'',
            far:{
                right:{
                    esf:null,
                    cil:null,
                    eje:null
                },
                left:{
                    esf:null,
                    cil:null,
                    eje:null
                }
            },
            near:{
                right:{
                    esf:null,
                    cil:null,
                    eje:null
                },
                left:{
                    esf:null,
                    cil:null,
                    eje:null
                }
            }
        },
        onSubmit: values => {
            console.log(values);
            
            
                create(values);
            
            
            console.log(values);
        },
        validationSchema: Yup.object({
            // firstName: Yup.string().required('El nombre es obligatorio'),
            // lastName: Yup.string().required('El apellido es obligatorio'),
            // numberDocument: Yup.number().typeError('Debe ingresar números').required('El número de documento es obligatorio'),
            // typeDocument: Yup.object().shape({_id: Yup.string().required('requerido')}).required('El tipo es requerido'),
            // gender: Yup.object().shape({_id: Yup.string().required('requerido')}).required('El género es requerido'),
            // birthDate: Yup.date().notRequired(),
        })
    })
    const create =async (values) => {
        console.log("creato",values);
        try {
            const {data} = await opticaApi.post(`/prescriptions`,values);
           
            if(data.ok){
                formik.resetForm();
                navigate(`${process.env.REACT_APP_ROUTE_PRESCRIPTIONS}`)
                
                
            }
        } catch (error) {
            console.log(`${error}`);
        }
    }

    const handleClickCancel = (e) =>{
        navigate(`${process.env.REACT_APP_ROUTE_CUSTOMERS}`);
    }
    
    
    return {
        init,
        formik,
        handleClickCancel,
        costumer
        
    }
}