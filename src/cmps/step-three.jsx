import React from 'react';

import { Formik, Form, Field } from "formik";


export default function StepThree({ data, next, prev }) {

    const handleSubmit = (values) => {
        console.log(values);
        if (values.real_estate === 'לא') next(values, false, true)
        else next(values, false)
    }

    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form className="input-container" style={{ width: "500px" }}>
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
                        <div role="group">
                            <h4 style={{ margin: '10px 0' }}>סוג הנכס נדלן</h4>
                            <div className="status-group flex space-between input-btn">
                                <label className={`${values.values.real_estate_type === "דירה" ? 'active' : ''}`}>
                                    <Field type="radio" name="real_estate_type" value="דירה" />
                                    דירה
                                </label>
                                <label className={`${values.values.real_estate_type === "מחסן" ? 'active' : ''}`}>
                                    <Field type="radio" name="real_estate_type" value="מחסן" />
                                    מחסן
                                </label>
                                <label className={`${values.values.real_estate_type === "חנות" ? 'active' : ''}`}>
                                    <Field type="radio" name="real_estate_type" value="חנות" />
                                    חנות
                                </label>
                                <label className={`${values.values.real_estate_type === "בניין" ? 'active' : ''}`}>
                                    <Field type="radio" name="real_estate_type" value="בניין" />
                                    בניין
                                </label>
                                <label className={`${values.values.real_estate_type === "קרקע" ? 'active' : ''}`}>
                                    <Field type="radio" name="real_estate_type" value="קרקע" />
                                    קרקע
                                </label>
                            </div>
                        </div>
                    }
                    {values.values.real_estate === 'כן' &&
                        <div className='input-container-formik'>
                            <h4 style={{ margin: '10px 0' }}>כמה אחוז בבעלותך?</h4>
                            <Field name="real_estate_type_percent" min="0" max="100" type="number" placeholder='כמה אחוז בבעלותך?' />
                        </div>
                    }
                    {(values.values.real_estate_type && values.values.real_estate_type !== 'בניין') && values.values.real_estate === 'כן' &&
                        <div className='partner-details'>
                            <Field name="real_estate_country" placeholder='מדינה' />
                            <Field name="real_estate_city" placeholder='עיר' />
                            <Field name="real_estate_street" placeholder='רחוב' />
                            <Field name="real_estate_house_number" type="number" placeholder='מספר בית' />
                        </div>
                    }
                    {(values.values.real_estate_type === 'בניין' && values.values.real_estate === 'כן') &&
                        <div className='partner-details'>
                            <Field name="real_estate_country" placeholder='מדינה' />
                            <Field name="real_estate_block" placeholder='גוש' />
                            <Field name="real_estate_lot" placeholder='חלקה' />
                            <Field name="real_estate_size" placeholder='גודל' />
                            <Field name="real_estate_description" placeholder='תיאור' />
                        </div>
                    }
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
