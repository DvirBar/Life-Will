import React, { useEffect, useState } from 'react';

import { Formik, Form, Field } from "formik";
import { assicuationService } from '../services/association.service';
import { useDebounce } from './use-debounce';


export default function StepFour({ data, next, prev }) {
    const [term, setTerm] = useState([]);
    const [associationsNames, setAssociationsNames] = useState([]);
    const DebounceSearch = useDebounce(term, 600)
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (DebounceSearch === '' || !DebounceSearch.length) return setAssociationsNames([])
        searchAssociations()
    }, [DebounceSearch]);

    const handleSubmit = (values) => {
        next(values, true, true)
    }

    const searchAssociations = async () => {
        const results = await assicuationService.getAssociations(DebounceSearch)
        getAssociationsData(results.data.result.records)
    }

    const getAssociationsData = async (data) => {
        const details = await assicuationService.getAssociationsData(data)
        if (!details) return
        setAssociationsNames(details)
    }

    const onToggleModal = () => {
        setModal(!modal)
    }

    const onGetInfo = (association) => {
        console.log(association.replace(`(ע''ר)`,'').replace('(ע~ר)','').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>;\{\}\[\]\\\/]/gi,''));
        setModal(!modal)
    }

    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form className="input-container" style={{ width: "500px" }}>
                    <div className='input-container-formik'>
                        <input onChange={(ev) => setTerm(ev.target.value)} name="association_text" placeholder='שם העמותה' />
                        <div className='on-open-modal-association' onClick={onToggleModal}>בחר עמותה</div>
                        {modal && <>
                            <div onClick={onToggleModal} className='fade'></div>
                            <div className='association-container'>
                                {associationsNames.map((association, idx) => {
                                    return <div className='association-info' onClick={() => onGetInfo(association)} key={idx}>{association.replace(`(ע''ר)`,'').replace('(ע~ר)','').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>;\{\}\[\]\\\/]/gi,'')}</div>
                                })}
                            </div>
                        </>}
                    </div>
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
