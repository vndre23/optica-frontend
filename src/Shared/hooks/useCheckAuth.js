import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { onLogin, onLogout } from "../../store/slices/auth/authSlice";
import opticaApi from '../../api/opticaApi';
export const useCheckAuth = () => {

    const {status,user} = useSelector(state=>state.auth);
    const dispatch= useDispatch();
    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if(!token){
            return dispatch(onLogout());
        }
        try {
            const {data} = await opticaApi.get('/users/refreshToken');
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            dispatch(onLogin(data));
        } catch (error) {
            console.log(error);
            localStorage.clear();
            dispatch(onLogout());
        }
    }
    
    
    return {
        status,
        checkAuthToken
    }
}