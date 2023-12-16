import { useFormik } from 'formik';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import opticaApi from '../../api/opticaApi';
export const Controller = () =>{
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(null);
    const [visible, setVisible] = useState(false);
    const [prescription,setPrescription]=useState(null);


    const init=async()=> {
        await dataPrescriptions();
    }

    const dataPrescriptions = async() => {
        try {
            const {data} = await opticaApi.get(`/prescriptions`);
            setData(data.prescriptions);
        } catch (error) {
            console.log(`${error}`);
        }
    }
    const handleClickAdd = () =>{
        navigate(`${process.env.REACT_APP_ROUTE_PRESCRIPTIONS_FORM}`)
    }

    const handleClickUpdate = (rowData) => {
        navigate(`${process.env.REACT_APP_ROUTE_PRESCRIPTIONS_FORM}/${rowData._id}`)
        console.log(rowData);
    }
    const onChangeFilter = (e) => {
        setFilter(e.target.value)
    }
    const handleClickAccept = async() => {
        try {
            const _id = prescription?._id;
            if(prescription.status.code===1){
                const {data} = await opticaApi.delete(`/prescriptions`,{data:{_id}});
                
                console.log(data);
                if(data.ok){
                    dataPrescriptions();
                }
            }
            else if (prescription.status.code===2){
                const {data} = await opticaApi.put(`/prescriptions/activate`,{_id})
                if(data.ok){
                    dataPrescriptions();
                }
            }
            
            
        } catch (error) {
            console.log(`${error}`);
        }

    }
    const handleClickReject = () => {
        console.log('se rechazo la anulacion')
    }
    const onHide = () => {
        setVisible(false);
    }
    const handleClickNullify=(rowData)=> {
        setPrescription(rowData);
        setVisible(true);
    }
    return {
        init,
        handleClickAdd,
        handleClickUpdate,
        data,
        filter,
        onChangeFilter,
        visible,
        onHide,
        handleClickAccept,
        handleClickReject,
        handleClickNullify,
        prescription,
    }
}