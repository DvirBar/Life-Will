import React from 'react';

import { Formik, Form, Field } from "formik";


export default function StepThreeContinue({ data, next, prev }) {

    const handleSubmit = (values) => {
        next(values, true, true)
    }

    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form className="input-container" style={{ width: "500px" }}>
                    <div className='input-container-formik'>
                        <h4 style={{ margin: '10px 0' }}>מהי צורת החלוקה?</h4>
                        <Field name="real_estate_share_percent" min="0" max="100" type="number" />
                        <h4 style={{ margin: '10px 0' }}>האם יש גם הערות בכתב שתרצה להוסיף?</h4>
                        <div className="status-group flex space-between input-btn">
                            <label className={`${values.values.real_estate_is_desc === "לא" ? 'active' : ''}`}>
                                <Field type="radio" name="real_estate_is_desc" value="לא" />
                                לא
                            </label>
                            <label className={`${values.values.real_estate_is_desc === "כן" ? 'active' : ''}`}>
                                <Field type="radio" name="real_estate_is_desc" value="כן" />
                                כן
                            </label>
                        </div>
                        {values.values.real_estate_is_desc === 'כן' &&
                            <Field name="real_estate_desc" placeholder="תיאור" />
                        }
                        <div className="status-group flex space-between input-btn">
                            <label className={`${values.values.real_estate_another === "לא" ? 'active' : ''}`}>
                                <Field type="radio" name="real_estate_another" value="לא" />
                                לא
                            </label>
                            <label className={`${values.values.real_estate_another === "כן" ? 'active' : ''}`}>
                                <Field type="radio" name="real_estate_another" value="כן" />
                                כן
                            </label>
                        </div>
                    </div>
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
