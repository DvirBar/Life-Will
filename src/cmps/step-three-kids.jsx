import React, { useEffect, useState } from 'react';

export default function StepThreekids({ data, propertyData }) {
    const [modal, setModal] = useState(false)
    const [kidsArr, setKidsArr] = useState([])
    const onToggleModal = (condition) => {
        setModal(!modal)
        // if (condition === 'finish') propertyData.inheritor = kidsArr
    }
    const onUpdateKidsArr = (newKid, index) => {
        const kidIdx = propertyData.inheritor.findIndex((kid) => kid.id === newKid.id)
        let newKidsArr = propertyData.inheritor.slice()
        if (kidIdx === -1) {
            propertyData.inheritor.push(newKid)
            // newKidsArr.push(newKid);
        } else {
            propertyData.inheritor = propertyData.inheritor.filter((kid) => kid.id !== newKid.id)
            // newKidsArr = newKidsArr.filter((kid) => kid.id !== newKid.id)
        }
        setKidsArr(newKidsArr)
    }
    const checkIsKidSelected = (newKid) => {
        const isKid = propertyData.inheritor.find((kid) => kid.id === newKid.id)
        return isKid ? true : false
    }

    return (
        <div className='input-container-formik'>
            <div className='on-open-modal' onClick={onToggleModal}>בחר ילדים</div>
            {modal && <>
                <div onClick={onToggleModal} className='fade'></div>
                <div className='association-container'>
                    {data.kids_data.map((kid, idx) => {
                        return <div className={`association-info ${checkIsKidSelected(kid) && 'kid-chosen'}`} onClick={(ev) => {
                            onUpdateKidsArr(kid, idx)

                        }}
                            key={idx}>{kid.first_name} {kid.last_name}</div>
                    })}
                </div>
                <button className='on-open-modal' style={{ zIndex: 30 }} onClick={() => onToggleModal('finish')}>סיים</button>
            </>}
        </div>
    )
}
