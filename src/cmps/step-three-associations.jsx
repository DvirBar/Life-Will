import React, { useEffect, useState } from 'react';

import { Formik, Form, Field } from "formik";
import { assicuationService } from '../services/association.service';
import { useDebounce } from './use-debounce';


export default function StepThreeAssociations({ i, updatePropertyData }) {
    const [term, setTerm] = useState([]);
    const [associationsNames, setAssociationsNames] = useState([]);
    const DebounceSearch = useDebounce(term, 600)
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (DebounceSearch === '' || !DebounceSearch.length) return setAssociationsNames([])
        searchAssociations()
    }, [DebounceSearch]);

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
        // if(!associationsNames || !associationsNames.length) return
        setModal(!modal)
    }

    // TODO: This is where debounce was used - probably to prevent search from sending get request too often.
    const onGetInfo = (ev, association) => {
        console.log(association.replace(`(ע''ר)`, '').replace('(ע~ר)', '').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>;\{\}\[\]\\\/]/gi, ''));
        setModal(!modal)
    }

    return (
        <div className='input-container-formik'>
            <input onChange={(ev) => setTerm(ev.target.value)} name={`association_text${i}`} placeholder='שם העמותה' />
            <div className='on-open-modal' onClick={onToggleModal}>בחר עמותה</div>
            {modal && (associationsNames && associationsNames.length) && <>
                <div onClick={onToggleModal} className='fade'></div>
                <div className='association-container'>
                    {associationsNames.map((association, idx) => {
                        return <div className='association-info' onClick={(ev) => {
                            onGetInfo(ev, association)
                            updatePropertyData(ev, i, 'associationName')
                        }}
                            key={idx}>{association.replace(`(ע''ר)`, '').replace('(ע~ר)', '').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>;\{\}\[\]\\\/]/gi, '')}</div>
                    })}
                </div>
            </>}
        </div>
    )
}
