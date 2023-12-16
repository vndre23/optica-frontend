import { useFormik } from 'formik';
import {useMemo, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
/** ==== rtk query */
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout, onChecking } from '../../store/slices/auth/authSlice';

//nuevooo cambios
import opticaApi from '../../api/opticaApi';

export const Controller = () =>{
    const msgs = useRef(null);
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.auth);
    const navigate = useNavigate();
    
    
    
    const formikLogin = useFormik({
        initialValues: {
            email:'',
            password: '',
            
        },
        onSubmit: values => {
            startLoginWithEmailAndPassword(values);
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Debes ingresar un email valido').required('El correo es requerido'),
            password: Yup.string().required('La contraseña es requerida'),
        })
    });
    const startLoginWithEmailAndPassword = async({email,password}) =>{
        debugger;
        try {
            clearMessages();    
            dispatch(onChecking());
            const {data} = await opticaApi.post('/users/login',{email,password});
            
            
            dispatch(onLogin(data));
            localStorage.setItem('token',data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate(`${process.env.REACT_APP_ROUTE_CUSTOMERS}`);
        } catch (error) {
            console.log(error);
            // addErrorMessage(error.response.data?.errorMessage);
            dispatch(onLogout(error.response.data?.errorMessage));
        }
        
        
    }
    const onClickRegister=()=>{
        navigate(`/${process.env.REACT_APP_ROUTE_REGISTER}`);
    }
    const addErrorMessage = (errorMessage) => {
        msgs.current.show([
            { severity: 'error', summary: 'Error', detail: errorMessage, sticky: true, closable: true }
        ]);
    };
    const clearMessages = () => {
        msgs.current.clear();
    };
    
    return {
        formikLogin,
        onClickRegister,
        status,
        msgs
       
    }
}