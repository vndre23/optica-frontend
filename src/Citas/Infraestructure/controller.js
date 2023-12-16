import {useState} from 'react';
export const Controller = () =>{
    const [visible,setVisible] = useState(false);

    const onHide=()=>{
        setVisible(false);
    }
    const handleClickAddCita = () =>{
        setVisible(true);
    }
    return {
        visible,
        onHide,
        handleClickAddCita
    }
}