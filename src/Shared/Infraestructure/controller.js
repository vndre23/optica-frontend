import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  onLogout } from "../../store/slices/auth/authSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import opticaApi from "../../api/opticaApi";

export const Controller = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.auth);
    
    const navigate = useNavigate();
    const [sidebarHidden,setSidebarHidden] = useState(true);
    const [visibleProfile, setVisibleProfile] = useState(false);
    const [visibleChangePassword, setVisibleChangePassword] = useState(false);
    const [typeDocuments, setTypeDocuments]= useState([]);
    const [genders, setGenders] = useState([]);
    const init = async()=> {
        await loadAccess();
        await dataGenders();
        await dataTypeDocuments();
      }
    
    const loadAccess = async() => {

    }
    const handleClickLogout = () => {
      console.log('onLogout');
      localStorage.clear();
      dispatch(onLogout());
      navigate('/');
    }
    const onSidebarHidden = () => {
      setSidebarHidden(!sidebarHidden);
      
    }

    //=========================00000 Profile ==============================0
    
    const handleClickProfile = () => {
      setVisibleProfile(true);
      console.log('truee');
    }
    
    const onHideProfile = () => {
      setVisibleProfile(false);
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
          typeDocument:user?.typeDocument,
          numberDocument: user?.numberDocument,
          firstName: user?.firstName,
          lastName: user?.lastName,
          gender:user?.gender,
          birthDate: user?.birthDate,
          email: user?.email,
          phone: user?.phone,
          address: user?.address
          
      },
      onSubmit: values => {
          console.log("valueees user dispatch",values);
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
    //=====================Fin Profile ==================================

    //================== change password ================================0
    const handleClickChangePassword = () => {
      setVisibleChangePassword(true);
      console.log('truee');
    }
    
    const onHideChangePassword = () => {
      setVisibleChangePassword(false);
      formikChangePassword.resetForm();
    }
    const formikChangePassword = useFormik({
      initialValues: {
          passwordActual:'',
          passwordNueva:'',
          passwordRepeat:'',
          
      },
      onSubmit: values => {
          console.log(values);
          onSubmit(values);
      },
      validationSchema: Yup.object({
          passwordActual: Yup.string().required('El nombre es obligatorio'),
          passwordNueva: Yup.string().notOneOf([Yup.ref('passwordActual'), null], 'Las contraseña actual no debe ser igual a la nueva').required('El apellido es obligatorio'),
          passwordRepeat: Yup.string().oneOf([Yup.ref('passwordNueva'), null], 'Las contraseñas no  coinciden').required('Campo Obligatorio'),
          
      })
  })
  const onSubmit=async(values)=> {
    try {
      const {data} = await opticaApi.post(`users/change-password`,values);
        
        
        if(data?.ok){
            console.log(data);
            setVisibleChangePassword(false);
        }
    } catch (error) {
      console.log(`${error}`)
    }
    
  }
    //================= change password ===============================
  return {
    
    init,
    handleClickLogout,
    sidebarHidden,
    onSidebarHidden,
    setSidebarHidden,

    //====profile====
    visibleProfile,
    handleClickProfile,
    onHideProfile,
    formik,
    typeDocuments,
    genders,
    //====changePassword===
    handleClickChangePassword,
    visibleChangePassword,
    onHideChangePassword,
    formikChangePassword,
    user,

  }
}
