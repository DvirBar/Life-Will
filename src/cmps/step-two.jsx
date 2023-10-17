import React, { useContext } from 'react';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import StepTwoContinue from './step-two-continue';
import StepTwoContinue2 from './step-two-continue2';
import { SiteContext } from '../store/context';

const stepTwoValidationSchema = Yup.object({
    status: Yup.string().required(),
})

export default function StepTwo({ values, next, prev }) {

    const handleSubmit = (values) => {
        next(values)
    }

    const {
        moveNextStep
    } = useContext(SiteContext)

    return (
        <>
            <div>סטטוס</div>
            <div role="group" className="status-group flex space-between input-btn">
                <label className={`${values.values.status === "נשוי" ? 'active' : ''}`}>
                    <Field type="radio" name="status" value="נשוי" />
                    נשוי
                </label>
                <label className={`${values.values.status === "פרוד" ? 'active' : ''}`}>
                    <Field type="radio" name="status" value="פרוד" />
                    פרוד
                </label>
                <label className={`${values.values.status === "אלמן" ? 'active' : ''}`}>
                    <Field type="radio" name="status" value="אלמן" />
                    אלמן
                </label>
                <label className={`${values.values.status === "רווק" ? 'active' : ''}`}>
                    <Field type="radio" name="status" value="רווק" />
                    רווק
                </label>
                <label className={`${values.values.status === "ערירי" ? 'active' : ''}`}>
                    <Field type="radio" name="status" value="ערירי" />
                    ערירי
                </label>
                <label className={`${values.values.status === "שותפות" ? 'active' : ''}`}>
                    <Field type="radio" name="status" value="שותפות" />
                    שותפות
                </label>
                <label className={`${values.values.status === "גרוש" ? 'active' : ''}`}>
                    <Field type="radio" name="status" value="גרוש" />
                    גרוש
                </label>
            </div>
            {values.values.status === 'נשוי' && <div>
                <div className='partner-details'>
                    <h3>אני נשוי ל-</h3>
                    <div role="group" className="status-group flex space-between input-btn">
                        <label className={`${values.values.partner_gender === "גבר" ? 'active' : ''}`}>
                            <Field type="radio" name="partner_gender" value="גבר" />
                            גבר
                        </label>
                        <label className={`${values.values.partner_gender === "אישה" ? 'active' : ''}`}>
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
                    <div role="group" className="status-group flex space-between input-btn">
                        <label className={`${values.values.partner_gender === "גבר" ? 'active' : ''}`}>
                            <Field type="radio" name="partner_gender" value="גבר" />
                            גבר
                        </label>
                        <label className={`${values.values.partner_gender === "אישה" ? 'active' : ''}`}>
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
                <div role="group" className="status-group flex space-between input-btn">
                    <h5>האם תרצה להקצות  לגרוש/גרושתך מהצוואה?</h5>
                    <label className={`${values.values.ex_partner_gain === "לא" ? 'active' : ''}`} style={{ width: '40px' }}>
                        <Field type="radio" name="ex_partner_gain" value="לא" />
                        לא
                    </label>
                    <label className={`${values.values.ex_partner_gain === "כן" ? 'active' : ''}`} style={{ width: '40px' }}>
                        <Field type="radio" name="ex_partner_gain" value="כן" />
                        כן
                    </label>
                </div>
                {values.values.ex_partner_gain === 'כן' && <>
                    <div className='partner-details'>
                        <h3>פרטי זיהוי–</h3>
                        <div role="group" className="status-group flex space-between input-btn">
                            <label className={`${values.values.partner_gender === "גבר" ? 'active' : ''}`}>
                                <Field type="radio" name="partner_gender" value="גבר" />
                                גבר
                            </label>
                            <label className={`${values.values.partner_gender === "אישה" ? 'active' : ''}`}>
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
            {/* <StepTwoContinue next={next} prev={prev} data={data} />
            <StepTwoContinue2 next={next} prev={prev} data={data} /> */}

            <button onClick={() => moveNextStep()}>המשך</button>
        </>
    )
}
