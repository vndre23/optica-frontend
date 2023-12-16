import { useFormik } from 'formik';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
/** ==== rtk query */
import { useLoginMutation } from './RepositoryImplMain';
import { useDispatch } from 'react-redux';

export const Controller = () =>{
    
    const dispatch = useDispatch();
    const [visible,setVisible] = useState(false);
    const navigate = useNavigate();
    const onHide=()=>{
        formikLogin.resetForm();
        setVisible(false);
    }
    const onLogin = () =>{
        setVisible(true);
    }
    const formikLogin = useFormik({
        initialValues: {
            email:'',
            password: '',
            
        },
        onSubmit: values => {
            login(values);
            console.log(values);
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Debes ingresar un email valido').required('El correo es requerido'),
            password: Yup.string().required('La contraseña es requerida'),
        })
    });
    
    const login=async (values)=> {
        // dispatch(login(true));
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        });
        console.log(response);
        const data = await response.json();
        if(response?.status===200){
            console.log(data);
            navigate(`${process.env.REACT_APP_ROUTE_CUSTOMERS}`);
        }
        
        
    }
    const register = (values) => {
        console.log(values);
        formikRegister.resetForm();
        const response = fetch('',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(data)
        });
    }
    const formikRegister = useFormik({
        initialValues: {
            email:'',
            //password: '',
            numberDocument:'',
            businessName:'',
            phone:'',
            address:'',
            
        },
        onSubmit: values => {
            register(values);
            console.log(values);
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Debes ingresar un email valido').required('El correo es requerido'),
            //password: Yup.string().required('La contraseña es requerida'),
            numberDocument: Yup.string().required('numero documento requerido').min(8,'debe ingresar minimo 8 caracteres').max(11,'debe ingresar maximo 11 caracteres'),
            businessName: Yup.string().required('el nombre de la empresa es requerido'),

        })
    });
    return {
        visible,
        onHide,
        onLogin,
        formikLogin,
        formikRegister
        
    }
}