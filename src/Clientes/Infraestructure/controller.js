import { useFormik } from 'formik';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import opticaApi from '../../api/opticaApi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '../../store/slices/loading/loadingSlice';


export const Controller = () =>{
    
    const [visible,setVisible] = useState(false);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [typeDocuments, setTypeDocuments]= useState([]);
    const [genders, setGenders] = useState([]);
    const [filter,setFilter] = useState('');
    const {user} = useSelector(state=>state.auth);
    const navigate = useNavigate();
    const [permisos,setPermisos] = useState({vista:false,crear:false,actualizar:false,eliminar:false})
    const init= async() =>{
        
        await dataPatients();
        await dataGenders();
        await dataTypeDocuments();
        
        
        
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
            
            const {data} =  await opticaApi.post(`/customers`,values);
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
    const update = async(values) => {
        try {
            const {data} = await opticaApi.put(`/customers`,values);
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
    const onClickUpdateCustomer = async(values) => {
        try {
            formik.setValues(values);
            setVisible(true);
            console.log(values);
            
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const dataPatients = async() => {
        
        try {
            
            const {data} = await opticaApi.get(`/customers`);
            setData(data.customers);
            
            dispatch(toggleLoading(false));
        } catch (error) {
            console.log(`${error}`);
            dispatch(toggleLoading(false));
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
    const formik = useFormik({
        initialValues: {
            typeDocument:null,
            numberDocument: '',
            firstName: '',
            lastName: '',
            gender:null,
            birthDate: null,
            idUser: user._id,
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
    const onChangeFilter = (e) => {
        
        setFilter(e.target.value);
    }
    const onClickPrescriptionCustomer = (rowData) =>{
        navigate(`${process.env.REACT_APP_CUSTOMERS_PRESCRIPTIONS}/${rowData?._id}`)
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
        onChangeFilter,
        genders,
        typeDocuments,
        formik,
        onClickUpdateCustomer,
        onClickPrescriptionCustomer,
        user,
        permisos,
    }
}