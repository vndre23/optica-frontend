import { useFormik } from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import opticaApi from '../../api/opticaApi';
export const Controller = () =>{
    const [visible,setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [typeDocuments, setTypeDocuments]= useState([]);
    const [genders, setGenders] = useState([]);
    const [filter,setFilter] = useState('');
    const [visibleAccess,setVisibleAccess] = useState(false);
    const [accesses,setAccesses]=useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const [selectedAcceses, setSelectedAcceses] = useState(null);
    const init= async() =>{
        await dataPatients();
        await dataGenders();
        await dataTypeDocuments();
        await dataAccesses();
    }
    
    const onHide=async ()=>{
        formik.resetForm();   
        setVisible(false);
    }
    const handleClickAddCliente = () =>{
        setVisible(true);
    }
    const create = async(values) => {
        try {
            
            const {data} =  await opticaApi.post(`/users`,values);
            console.log(data);
            if(data.ok){
                await dataPatients();
                formik.resetForm();
                setVisible(false);
                
            }
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const dataPatients = async() => {
        try {
            const {data} = await opticaApi.get(`/users`);
            console.log(data);
            setData(data.users);
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const dataGenders = async() => {
        try {
            const {data} = await opticaApi.get(`/genders`);
            console.log(data);
            setGenders(data.genders);
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const dataTypeDocuments = async() => {
        try {
            const {data} = await opticaApi.get(`/type-document`);
            setTypeDocuments(data.typeDocuments);
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const dataAccesses = async() => {
        try {
            const {data} = await opticaApi.get(`/access`);
            setAccesses(data.access);
            console.log(data.access);
            
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const formik = useFormik({
        initialValues: {
            typeDocument:null,
            numberDocument: '',
            firstName: '',
            lastName: '',
            gender:null,
            birthDate: null | '',
            accesses:[],
        },
        onSubmit: values => {
            if(values['_id']!==undefined){
                update(values);
            }else{
                create(values);
            }
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
    const handleClickUpdateUser = (values) => {
        try {
            formik.setValues( {
                ...values,
                ...values.birthDate=new Date(values.birthDate)
            });
            
            setVisible(true);
            console.log(values);
            
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const update = async(values) => {
        try {
            const {data} = await opticaApi.put(`/users`,values);
            console.log(data);
            if(data.ok){
                await dataPatients();
                formik.resetForm();
                setVisible(false);
                
            }
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const handleClickPermisos=(rowData)=>{
        setVisibleAccess(true);
        // setAccesses(rowData.accesses);
        formik.setValues(rowData);
        console.log(rowData)
    }
    const onHidePermisos=async ()=>{
        formik.resetForm();   
        setVisibleAccess(false);
    }

    const handleClickAddAccess=async(values)=> {
        try {
            console.log(formik.values)
            const {data} = await opticaApi.post(`/users/add-permisos`,formik.values);
            console.log(data);
            if(data.ok){
                await dataPatients();
                setVisibleAccess(false);
                
            }
        } catch (error) {
            console.log(`${error}`);
        }
    }

    const handleClickSelectedAcceses=(e)=> {
        
        setSelectedAcceses(e.value);
        formik.setValues({
            ...formik.values,
            accesses: e.value
        })
        console.log(e.value);
        
    }
    const handleClickExpandedRows = (e) => {
        setExpandedRows(e.data);
        console.log(e.data);
    }
    return {
        init,
        visible,
        onHide,
        handleClickAddCliente,
        // create,
        dataPatients,
        data,
        filter,
        setFilter,
        genders,
        typeDocuments,
        formik,
        handleClickUpdateUser,
        visibleAccess,
        handleClickPermisos,
        accesses,
        onHidePermisos,
        handleClickAddAccess,
        selectedAcceses,
        expandedRows,
        handleClickSelectedAcceses,
        handleClickExpandedRows
    }
}