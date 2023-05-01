import React from 'react';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const stepTwoValidationSchema = Yup.object({
    status: Yup.string().required(),
})

export default function StepTwo({ data, next, prev }) {

    const handleSubmit = (values) => {
        console.log(values);
        next(values, true)
    }

    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form className="input-container" style={{ width: "500px" }}>
                    <div>סטטוס</div>
                    <div role="group" className="status-group">
                        <label>
                            <Field type="radio" name="status" value="נשוי" />
                            נשוי
                        </label>
                        <label>
                            <Field type="radio" name="status" value="פרוד" />
                            פרוד
                        </label>
                        <label>
                            <Field type="radio" name="status" value="אלמן" />
                            אלמן
                        </label>
                        <label>
                            <Field type="radio" name="status" value="רווק" />
                            רווק
                        </label>
                        <label>
                            <Field type="radio" name="status" value="ערירי" />
                            ערירי
                        </label>
                        <label>
                            <Field type="radio" name="status" value="שותפות" />
                            שותפות
                        </label>
                        <label>
                            <Field type="radio" name="status" value="גרוש" />
                            גרוש
                        </label>
                    </div>
                    {values.values.status === 'נשוי' && <div>
                        <div className='partner-details'>
                            <h3>אני נשוי ל-</h3>
                            <div role="group" className="status-group">
                                <label>
                                    <Field type="radio" name="partner_gender" value="גבר" />
                                    גבר
                                </label>
                                <label>
                                    <Field type="radio" name="partner_gender" value="אישה" />
                                    אישה
                                </label>
                            </div>
                        </div>
                        <div className='partner-details'>
                            <Field name="partner_first_name" placeholder='שם פרטי' />
                            <Field name="partner_last_name" placeholder='שם משפחה' />
                            <Field name="partner_id" type="number" placeholder='ת.ז' />
                        </div>
                    </div>}
                    {values.values.status === 'שותפות' && <div>
                        <div className='partner-details'>
                            <h3>אני מנהל זוגיות עם- </h3>
                            <div role="group" className="status-group">
                                <label>
                                    <Field type="radio" name="partner_gender" value="גבר" />
                                    גבר
                                </label>
                                <label>
                                    <Field type="radio" name="partner_gender" value="אישה" />
                                    אישה
                                </label>
                            </div>
                        </div>
                        <div className='partner-details'>
                            <Field name="partner_first_name" placeholder='שם פרטי' />
                            <Field name="partner_last_name" placeholder='שם משפחה' />
                            <Field name="partner_id" type="number" placeholder='ת.ז' />
                        </div>
                    </div>}
                    {values.values.status === 'גרוש' && <div>
                        <div role="group" className="status-group">
                        <h5>האם תרצה להקצות  לגרוש/גרושתך מהצוואה?</h5>
                            <label style={{width: '40px'}}>
                                <Field type="radio" name="ex_partner_gain" value="לא" />
                                לא
                            </label>
                            <label style={{width: '40px'}}>
                                <Field type="radio" name="ex_partner_gain" value="כן" />
                                כן
                            </label>
                        </div>
                        {values.values.ex_partner_gain === 'כן' && <>
                            <div className='partner-details'>
                                <div role="group" className="status-group">
                                    <label>
                                        <Field type="radio" name="partner_gender" value="גבר" />
                                        גבר
                                    </label>
                                    <label>
                                        <Field type="radio" name="partner_gender" value="אישה" />
                                        אישה
                                    </label>
                                </div>
                            </div>
                            <div className='partner-details'>
                                <Field name="partner_first_name" placeholder='שם פרטי' />
                                <Field name="partner_last_name" placeholder='שם משפחה' />
                                <Field name="partner_id" type="number" placeholder='ת.ז' />
                            </div>
                        </>}
                    </div>}
                    <button type="submit">Next</button>
                </Form>
            )}

        </Formik>
    )
}
