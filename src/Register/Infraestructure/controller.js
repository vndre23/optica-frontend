import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
/** ==== rtk query */
import { useDispatch } from 'react-redux';
import opticaApi from '../../api/opticaApi';

export const Controller = () =>{
    
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
    
    
    
    
    const register = async (values) => {
        
        console.log(values);
        
        const {data} = await opticaApi.post(`/enterprise`,values);
        
        
        if(data?.ok){
            console.log(data);
            navigate(`${process.env.REACT_APP_ROUTE_LOGIN}`);
        }
        // formikRegister.resetForm();
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
    const onClickLogin = () =>{
        navigate(`/${process.env.REACT_APP_ROUTE_LOGIN}`);
    }
    return {
        
        formikRegister,
        onClickLogin,
    }
}