import React, { useState } from 'react';

import { Formik, Form, Field } from "formik";


export default function StepThree({ data, next, prev }) {
    const [realEstateCount, setRealEstateCount] = useState(0)

    const handleSubmit = (values) => {
        if (values.real_estate === 'לא') next(values, false, true)
        else next(values, false, true)
    }
    const onRemoveRealEstate = (i) => {
        if (realEstateCount === 0) return
        setRealEstateCount(realEstateCount - 1)
        data.real_estate_data.splice(i, 1)
    }
    const onAddRealEstate = (ev, i) => {
        setRealEstateCount(realEstateCount + 1)
        data.real_estate_data.push({
            type: '',
            country: '',
            city: '',
            street: '',
            house_number: '',
            block: '',
            lot: '',
            size: '',
            ground_description: '',
            type_percent: 0,
            share_percent: 0,
            general_description: ''
        })
    }

    const updateRealEstateData = (ev, i, credentials = 'type') => {
        if (credentials === 'type') {
            data.real_estate_data[i].type = ev.target.value
        } else if (credentials === 'country') {
            data.real_estate_data[i].country = ev.target.value
        } else if (credentials === 'city') {
            data.real_estate_data[i].city = ev.target.value
        } else if (credentials === 'street') {
            data.real_estate_data[i].street = ev.target.value
        } else if (credentials === 'house_number') {
            data.real_estate_data[i].house_number = ev.target.value
        } else if (credentials === 'block') {
            data.real_estate_data[i].block = ev.target.value
        } else if (credentials === 'lot') {
            data.real_estate_data[i].lot = ev.target.value
        } else if (credentials === 'size') {
            data.real_estate_data[i].size = ev.target.value
        } else if (credentials === 'ground_description') {
            data.real_estate_data[i].ground_description = ev.target.value
        } else if (credentials === 'type_percent') {
            data.real_estate_data[i].type_percent = ev.target.value
        } else if (credentials === 'share_percent') {
            data.real_estate_data[i].share_percent = ev.target.value
        } else if (credentials === 'general_description') {
            data.real_estate_data[i].general_description = ev.target.value
        } else if (credentials === 'real_estate_is_desc') {
            data.real_estate_data[i].real_estate_is_desc = ev.target.value
        }
    }

    const renderRealEstatesForm = (values) => {
        const RealEstateFormArr = []
        for (let i = 0; i < data.real_estate_data.length; i++) {
            console.log(data.real_estate_data.length, i);
            RealEstateFormArr.push(
                <div key={`${i}`} className="flex gap column direction-rtl">
                    <h4 className='direction-rtl' style={{ margin: '0', display: (i >= 1) ? "flex" : "none" }}>סוג הנכס נדלן {i + 1}</h4>
                    <div className="status-group flex space-between input-btn">
                        <label className={`${values.values.real_estate_data[i].type === "דירה" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateRealEstateData(ev, i)} name={`type`} value="דירה" />
                            דירה
                        </label>
                        <label className={`${values.values.real_estate_data[i].type === "מחסן" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateRealEstateData(ev, i)} name={`type`} value="מחסן" />
                            מחסן
                        </label>
                        <label className={`${values.values.real_estate_data[i].type === "חנות" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateRealEstateData(ev, i)} name={`type`} value="חנות" />
                            חנות
                        </label>
                        <label className={`${values.values.real_estate_data[i].type === "בניין" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateRealEstateData(ev, i)} name={`type`} value="בניין" />
                            בניין
                        </label>
                        <label className={`${values.values.real_estate_data[i].type === "קרקע" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateRealEstateData(ev, i)} name={`type`} value="קרקע" />
                            קרקע
                        </label>
                    </div>
                    <h4 style={{ margin: '10px 0' }}>כמה אחוז בבעלותך?</h4>
                    <Field onChange={(ev) => updateRealEstateData(ev, i, "type_percent")} name="type_percent" min="0" max="100" type="number" placeholder='כמה אחוז בבעלותך?' />
                    {(values.values.real_estate_data[i].type && values.values.real_estate_data[i].type !== 'בניין') &&
                        <div className='partner-details'>
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "country")} name={`country${i}`} placeholder='מדינה' />
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "city")} name={`city${i}`} placeholder='עיר' />
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "street")} name={`street${i}`} placeholder='רחוב' />
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "house_number")} name={`house_number${i}`} type="number" placeholder='מספר בית' />
                        </div>
                    }
                    {values.values.real_estate_data[i].type === 'בניין' &&
                        <div className='partner-details'>
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "country")} name={`country${i}`} placeholder='מדינה' />
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "block")} name={`block${i}`} placeholder='גוש' />
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "lot")} name={`lot${i}`} placeholder='חלקה' />
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "size")} name={`size${i}`} placeholder='גודל' />
                            <Field onChange={(ev) => updateRealEstateData(ev, i, "ground_description")} name={`ground_description${i}`} placeholder='תיאור' />
                        </div>
                    }
                    <h4 style={{ margin: '10px 0' }}>מהי צורת החלוקה?</h4>
                    <Field onChange={(ev) => updateRealEstateData(ev, i, "share_percent")} name="share_percent" min="0" max="100" type="number" />
                    <h4 style={{ margin: '10px 0' }}>האם יש גם הערות בכתב שתרצה להוסיף?</h4>
                    <div className="status-group flex space-between input-btn">
                        <label className={`${values.values.real_estate_data[i].real_estate_is_desc === "לא" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateRealEstateData(ev, i, 'real_estate_is_desc')} name="real_estate_is_desc" value="לא" />
                            לא
                        </label>
                        <label className={`${values.values.real_estate_data[i].real_estate_is_desc === "כן" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateRealEstateData(ev, i, 'real_estate_is_desc')} name="real_estate_is_desc" value="כן" />
                            כן
                        </label>
                    </div>
                    {values.values.real_estate_data[i].real_estate_is_desc === 'כן' &&
                        <Field onChange={(ev) => updateRealEstateData(ev, i, "general_description")} name="general_description" placeholder="תיאור" />
                    }
                    <h4 style={{ margin: '0', display: (i === data.real_estate_data.length - 1) ? "flex" : "none" }}>האם קיים ברשותך נכס נדלן נוסף?</h4>
                    <div className='flex gap row'>
                        <div className='flex align-center pointer add-btn' style={{ display: (i === data.real_estate_data.length - 1) ? "flex" : "none" }} onClick={onAddRealEstate}>כן</div>
                        <div className='flex align-center pointer add-btn' style={{ visibility: (i === data.real_estate_data.length - 1 && i > 0) ? "visible" : "hidden" }} onClick={() => onRemoveRealEstate(i)}>הסר נדלן</div>
                    </div>
                </div>

            )
        }
        return RealEstateFormArr
    }

    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form className="input-container" style={{ minWidth: "500px" }}>
                    <div role="group">
                        <h4 style={{ margin: '10px 0' }}>האם קיימים ברשותך נכסי נדלן?</h4>
                        <div className="status-group flex space-between input-btn">
                            <label className={`${values.values.real_estate === "לא" ? 'active' : ''}`}>
                                <Field type="radio" name="real_estate" value="לא" />
                                לא
                            </label>
                            <label className={`${values.values.real_estate === "כן" ? 'active' : ''}`}>
                                <Field type="radio" name="real_estate" value="כן" />
                                כן
                            </label>
                        </div>
                    </div>
                    {values.values.real_estate === 'כן' &&
                        <div className="input-container-formik real-estate-container direction-ltr" >
                            <h4 className='direction-rtl' style={{ margin: '10px 0' }}>סוג הנכס נדלן</h4>
                            {renderRealEstatesForm(values)}
                        </div>
                    }



                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
