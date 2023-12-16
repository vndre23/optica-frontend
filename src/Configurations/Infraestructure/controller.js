import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
export const Controller = () => {
    const [visible, setVisible] = useState(false);
    const [visibleListAccess, setVisibleListAccess] = useState(false);
    const [visibleFormAccess,setVisibleFormAccess]=useState(false);
    const [jobs, setJobs] = useState([]);
    const [accesses,setAccesses] = useState([]);
    const init = async () => {
        await loadJobs();
        await loadAcceses();
    }
    const onHide = () => {
        formik.resetForm();
        setVisible(false);
    }
    const onHideListAccess = () => {
        console.log('cerrando')
        setVisibleListAccess(false);
    }
    const loadJobs = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs`);
            const jobsData = await response.json();
            console.log(jobsData);
            setJobs(jobsData);
        } catch (error) {

        }
    }
    const loadAcceses = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/access`);
            const jobsData = await response.json();
            console.log("loadAces",jobsData);
            setAccesses(jobsData);
        } catch (error) {

        }
    }
    const handleClickAdd = () => {
        console.log('por hacer');
        setVisible(true);
    }
    const formik = useFormik({
        initialValues: {
            name: '',

        },
        onSubmit: values => {

            if (values['_id'] !== undefined) {
                update(values);
            } else {
                create(values);
            }

            console.log(values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El cargo es obligatorio'),

        })
    })

    const create = async (values) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if (response.ok) {
            loadJobs();
            onHide();

        }
    }
    const update = async (values) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/jobs`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if (response.ok) {
            loadJobs();
            onHide();

        }
    }
    const handleClickUpdate = (rowData) => {
        setVisible(true);
        formik.setValues(rowData);
    }
    const handleClickAccess = (rowData) => {
        setVisibleListAccess(true);
    }
    const handleClickAddAccess=()=> {
        setVisibleFormAccess(true);
    }
    const formikAccess = useFormik({
        initialValues: {
            name: '',

        },
        onSubmit: values => {

            // if (values['_id'] !== undefined) {
            //     update(values);
            // } else {
            //     create(values);
            // }

            console.log(values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El cargo es obligatorio'),

        })
    })
    return {
        init,
        visible,
        onHide,
        handleClickAdd,
        formik,
        jobs,
        handleClickUpdate,
        handleClickAccess,
        visibleListAccess,
        onHideListAccess,
        accesses,
        handleClickAddAccess,
        visibleFormAccess,
        formikAccess
    }


}
