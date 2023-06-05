import React, { useState } from 'react';

import { Formik, Form, Field } from "formik";
import StepThreeAssociations from './step-three-associations';
import StepThreekids from './step-three-kids';


export default function StepFour({ data, next, prev }) {
    const [vehicleCount, setVehicleCount] = useState(0)

    const handleSubmit = (values) => {
        next(values, true)
    }
    const onRemoveRealEstate = (i) => {
        if (vehicleCount === 0) return
        setVehicleCount(vehicleCount - 1)
        data.vehicle_data.splice(i, 1)
    }
    const onAddRealEstate = (ev, i) => {
        setVehicleCount(vehicleCount + 1)
        data.vehicle_data.push({
            type: '',
            license_plate: '',
            manufacturer: '',
            model: '',
            year: '',
            color: '',
            description: '',
            size: '',
            ground_description: '',
            type_percent: 0,
            share_percent: 0,
            general_description: '',
            inheritor_type: '',
            inheritor: []
        })
    }

    const updateVehicleData = (ev, i, credentials = 'type') => {
        if (credentials === 'type') {
            data.vehicle_data[i].type = ev.target.value
        } else if (credentials === 'license_plate') {
            data.vehicle_data[i].license_plate = ev.target.value
        } else if (credentials === 'manufacturer') {
            data.vehicle_data[i].manufacturer = ev.target.value
        } else if (credentials === 'model') {
            data.vehicle_data[i].model = ev.target.value
        } else if (credentials === 'year') {
            data.vehicle_data[i].year = ev.target.value
        } else if (credentials === 'color') {
            data.vehicle_data[i].color = ev.target.value
        } else if (credentials === 'description') {
            data.vehicle_data[i].description = ev.target.value
        } else if (credentials === 'size') {
            data.vehicle_data[i].size = ev.target.value
        } else if (credentials === 'ground_description') {
            data.vehicle_data[i].ground_description = ev.target.value
        } else if (credentials === 'type_percent') {
            data.vehicle_data[i].type_percent = ev.target.value
        } else if (credentials === 'share_percent') {
            data.vehicle_data[i].share_percent = ev.target.value
        } else if (credentials === 'general_description') {
            data.vehicle_data[i].general_description = ev.target.value
        } else if (credentials === 'vehicle_is_desc') {
            data.vehicle_data[i].vehicle_is_desc = ev.target.value
        } else if (credentials === 'associationName') {
            data.vehicle_data[i].associationName = ev.target.innerText
        } else if (credentials === 'inheritor_type') {
            data.vehicle_data[i].inheritor_type = ev.target.value
        }
    }

    const renderVehiclesForm = (values) => {
        const RealEstateFormArr = []
        for (let i = 0; i < data.vehicle_data.length; i++) {
            RealEstateFormArr.push(
                <div key={`${i}`} className="flex gap column direction-rtl">
                    <h4 className='direction-rtl' style={{ margin: '0', display: (i >= 1) ? "flex" : "none" }}>סוג הרכב {i + 1}</h4>
                    <div className="status-group flex space-between input-btn">
                        <label className={`${values.values.vehicle_data[i].type === "משאית" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="משאית" />
                            משאית
                        </label>
                        <label className={`${values.values.vehicle_data[i].type === "אוטובוס" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="אוטובוס" />
                            אוטובוס
                        </label>
                        <label className={`${values.values.vehicle_data[i].type === "רכב" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="רכב" />
                            רכב
                        </label>
                        <label className={`${values.values.vehicle_data[i].type === "אופנוע" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="אופנוע" />
                            אופנוע
                        </label>
                        <label className={`${values.values.vehicle_data[i].type === "מטוס" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="מטוס" />
                            מטוס
                        </label>
                        <label className={`${values.values.vehicle_data[i].type === "סירה" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="סירה" />
                            סירה
                        </label>
                        <label className={`${values.values.vehicle_data[i].type === "יאכטה" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="יאכטה" />
                            יאכטה
                        </label>
                        <label className={`${values.values.vehicle_data[i].type === "אוניה" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i)} name={`type`} value="אוניה" />
                            אוניה
                        </label>
                    </div>
                    {values.values.vehicle_data[i].type &&
                        <div className='partner-details'>
                            <Field onChange={(ev) => updateVehicleData(ev, i, "license_plate")} name={`license_plate${i}`} placeholder='מספר זיהוי' />
                            <Field onChange={(ev) => updateVehicleData(ev, i, "manufacturer")} name={`manufacturer${i}`} placeholder='יצרן' />
                            <Field onChange={(ev) => updateVehicleData(ev, i, "model")} name={`model${i}`} placeholder='דגם' />
                            <Field onChange={(ev) => updateVehicleData(ev, i, "year")} name={`year${i}`} min="1000" max="3000" type="number" placeholder='שנה' />
                            <Field onChange={(ev) => updateVehicleData(ev, i, "color")} name={`color${i}`} placeholder='צבע' />
                            <textarea onChange={(ev) => updateVehicleData(ev, i, "description")} name={`description${i}`} placeholder='תיאור מדויק של הכלי'></textarea>
                        </div>
                    }
                    <h4 style={{ margin: '10px 0' }}>מי יירש את הכלי?</h4>
                    <div className="status-group flex space-between input-btn">
                        <label className={`${values.values.vehicle_data[i].inheritor_type === "יורשים" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i, "inheritor_type")} name={`inheritor_type`} value="יורשים" />
                            יורשים
                        </label>
                        <label className={`${values.values.vehicle_data[i].inheritor_type === "ילדים" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i, "inheritor_type")} name={`inheritor_type`} value="ילדים" />
                            ילדים
                        </label>
                        <label className={`${values.values.vehicle_data[i].inheritor_type === "בת זוג/בן זוג" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i, "inheritor_type")} name={`inheritor_type`} value="בת זוג/בן זוג" />
                            בת זוג/בן זוג
                        </label>
                        <label className={`${values.values.vehicle_data[i].inheritor_type === "עמותה" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i, "inheritor_type")} name={`inheritor_type`} value="עמותה" />
                            עמותה
                        </label>
                    </div>
                    {values.values.vehicle_data[i].inheritor_type === 'עמותה' &&
                        <StepThreeAssociations i={i} updatePropertyData={updateVehicleData} />
                    }
                    {values.values.vehicle_data[i].inheritor_type === 'ילדים' &&
                        <StepThreekids propertyData={values.values.vehicle_data[i]} data={data} i={i} />
                    }
                    <h4 style={{ margin: '10px 0' }}>מהי צורת החלוקה?</h4>
                    <Field onChange={(ev) => updateVehicleData(ev, i, "share_percent")} name="share_percent" min="0" max="100" type="number" />
                    <h4 style={{ margin: '10px 0' }}>האם יש גם הערות בכתב שתרצה להוסיף?</h4>
                    <div className="status-group flex space-between input-btn">
                        <label className={`${values.values.vehicle_data[i].vehicle_is_desc === "לא" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i, 'vehicle_is_desc')} name="vehicle_is_desc" value="לא" />
                            לא
                        </label>
                        <label className={`${values.values.vehicle_data[i].vehicle_is_desc === "כן" ? 'active' : ''}`}>
                            <Field type="radio" onClick={(ev) => updateVehicleData(ev, i, 'vehicle_is_desc')} name="vehicle_is_desc" value="כן" />
                            כן
                        </label>
                    </div>
                    {values.values.vehicle_data[i].vehicle_is_desc === 'כן' &&
                        <textarea onChange={(ev) => updateVehicleData(ev, i, "general_description")} name={`general_description${i}`} placeholder="תיאור"></textarea>
                    }
                    <h4 style={{ margin: '0', display: (i === data.vehicle_data.length - 1) ? "flex" : "none" }}>האם קיים ברשותך רכב נוסף?</h4>
                    <div className='flex gap row'>
                        <div className='flex align-center pointer add-btn' style={{ display: (i === data.vehicle_data.length - 1) ? "flex" : "none" }} onClick={onAddRealEstate}>כן</div>
                        <div className='flex align-center pointer add-btn' style={{ visibility: (i === data.vehicle_data.length - 1 && i > 0) ? "visible" : "hidden" }} onClick={() => onRemoveRealEstate(i)}>הסר רכב</div>
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
                        <h4 style={{ margin: '10px 0' }}>האם קיימים ברשותך רכבים?</h4>
                        <div className="status-group flex space-between input-btn">
                            <label className={`${values.values.vehicle === "לא" ? 'active' : ''}`}>
                                <Field type="radio" name="vehicle" value="לא" />
                                לא
                            </label>
                            <label className={`${values.values.vehicle === "כן" ? 'active' : ''}`}>
                                <Field type="radio" name="vehicle" value="כן" />
                                כן
                            </label>
                        </div>
                    </div>
                    {values.values.vehicle === 'כן' &&
                        <div className="input-container-formik real-estate-container direction-ltr" >
                            <h4 className='direction-rtl' style={{ margin: '10px 0' }}>סוג הרכב</h4>
                            {renderVehiclesForm(values)}
                        </div>
                    }



                    <button type="submit">המשך</button>
                </Form>
            )}
        </Formik>
    )
}
