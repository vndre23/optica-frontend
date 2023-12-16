import { useFormik } from 'formik';
import {useRef, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import opticaApi from '../../api/opticaApi';
export const Controller = () =>{
    const navigate =  useNavigate();
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const op = useRef(null);
    const {_id} = useParams()
    const [filter,setFilter] = useState(null);
    const [prescription, setPrescription] = useState(null);
    const [visible,setVisible] = useState(false);
    const [customers,setCustomers] = useState([]);
    const [typeDocuments,setTypeDocuments]=useState([]);
    const [genders,setGenders] = useState([]);
    const init=async()=> {
        await dataPrescriptions();
        await dataCustomers();
        await dataGenders();
        await dataTypeDocuments();
        
    }

    const dataPrescriptions = async() => {
        try {
            if(_id!==undefined){
                const {data} = await opticaApi.get(`/prescriptions/${_id}`)
                // const responsePrescription = await fetch(`${process.env.REACT_APP_API_URL}/prescriptions/${_id}`);
                if(!data.ok){
                    // navigate('/not-found')
                }
                
                setPrescription(data.prescription);
                console.log("prescriotion",data);
                setSelectedCustomer(data.prescription.customer);
                formik.setValues(
                    data.prescription
                );

            }
            
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const dataCustomers = async() => {
        const {data} = await opticaApi.get(`/customers`);
        setCustomers(data.customers);
    }
    const onSelectionCustomer=(e)=>{
        setSelectedCustomer(e.value);
        console.log(e.value);
        formik.setValues({
            ...formik.values,
            customer: e?.value,
        });
        op.current.hide();
        
        
    }
    const handleChangeFilter = (e) =>{
        setFilter(e.target.value);
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
            if(values['_id']!==undefined){
                 update(values);
            }else{
                create(values);
            }
            
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
    const update =async (values) => {
        console.log("update",values);
        try {
            const {data} = await opticaApi(`/prescriptions`,values);
            // const response =  await fetch(`${process.env.REACT_APP_API_URL}/prescriptions`,{
            //     method:'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(values)
            // });
            // console.log(response);
            if(data.ok){
                
                formik.resetForm();
                navigate(`${process.env.REACT_APP_ROUTE_PRESCRIPTIONS}`)
                
                
            }
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const handleClickAddCustomer = () => {
        console.log('por hacer')
        setVisible(true);
    }
    const handleClickCancel = (e) =>{
        navigate(`${process.env.REACT_APP_ROUTE_PRESCRIPTIONS}`);
    }
    const dataGenders = async() => {
        try {
            const {data} = await opticaApi.get(`/genders`);
            setGenders(data.genders);
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const dataTypeDocuments = async() => {
        try {
            const {data} = await opticaApi.get(`/type-document`);
            
            console.log(data);
            setTypeDocuments(data.typeDocuments);
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const formikCustomer = useFormik({
        initialValues: {
            typeDocument:null,
            numberDocument: '',
            firstName: '',
            lastName: '',
            gender:null,
            birthDate: null
        },
        onSubmit: values => {
            
            
            
            createCustomer(values);
            
            
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('El nombre es obligatorio'),
            lastName: Yup.string().required('El apellido es obligatorio'),
            numberDocument: Yup.number().typeError('Debe ingresar números').required('El número de documento es obligatorio'),
            typeDocument: Yup.object().shape({_id: Yup.string().required('requerido')}).required('El tipo es requerido'),
            gender: Yup.object().shape({_id: Yup.string().required('requerido')}).required('El género es requerido'),
            birthDate: Yup.date().notRequired(),
        })
    })
    const createCustomer = async(values) => {
        try {
            const {data} = await opticaApi.post(`/customers`,values);
            
            if(data.ok){
                await dataCustomers();
                formikCustomer.resetForm();
                setVisible(false); 
            }
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const onHide=async ()=>{
        formikCustomer.resetForm();   
        setVisible(false);
    }
    return {
        init,
        formik,
        selectedCustomer,
        onSelectionCustomer,
        customers,
        op,
        filter,
        handleChangeFilter,
        handleClickCancel,
        handleClickAddCustomer,
        dataCustomers,
        dataGenders,
        dataTypeDocuments,
        typeDocuments,
        genders,
        formikCustomer,
        onHide,
        visible
    }
}