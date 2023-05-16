import React, { useState } from 'react';

import { Formik, Form, Field } from "formik";


export default function StepTwoContinue({ data, next, prev }) {

    const [kidsCount, setKidsCount] = useState(0)

    const onAddKid = (ev, i) => {
        setKidsCount(kidsCount + 1)
        data.kids_data.push({
            kid_id: '',
            kid_first_name: '',
            kid_last_name: '',
        })
    }
    const onRemoveKid = () => {
        if (kidsCount === 0) return
        setKidsCount(kidsCount - 1)
        data.kids_data.pop()
    }

    const updateKidsData = (ev, i, credentials = 'id') => {
        if (credentials === 'id') {
            data.kids_data[i].kid_id = ev.target.value
        } else if (credentials === 'first-name') {
            data.kids_data[i].kid_first_name = ev.target.value
        } else {
            data.kids_data[i].kid_last_name = ev.target.value
        }
    }

    const renderKidsForm = () => {
        const kidsFormArr = []
        for (let i = 0; i <= kidsCount; i++) {
            kidsFormArr.push(
                <div key={`${i}`} className="flex gap">
                    <div className='flex align-center pointer' onClick={onRemoveKid}>-</div>
                    <Field key={`kid_id${i}`} onChange={(ev) => updateKidsData(ev, i)} name={`kid_id${i}`} type="number" placeholder={`תז של ילד מספר ${i + 1}`} />
                    <Field key={`kid_first_name${i}`} onChange={(ev) => updateKidsData(ev, i, 'first-name')} name={`kid_first_name${i}`} placeholder={`שם פרטי ${i + 1}`} />
                    <Field key={`kid_last_name${i}`} onChange={(ev) => updateKidsData(ev, i, 'last-name')} name={`kid_last_name${i}`} placeholder={`שם משפחה ${i + 1}`} />
                    <div className='flex align-center pointer' onClick={onAddKid}>+</div>
                </div>
            )
        }
        return kidsFormArr
    }

    const handleSubmit = (values) => {
        next(values, false)
    }

    return (
        <Formik
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form className="input-container" style={{ width: "500px" }}>
                    <div role="group">
                        <p>ילדים-</p>
                        <div className="status-group input-btn">
                            <label className={`${values.values.kids === "לא" ? 'active' : ''}`}>
                                <Field type="radio" name="kids" value="לא" />
                                לא
                            </label>
                            <label className={`${values.values.kids === "כן" ? 'active' : ''}`}>
                                <Field type="radio" name="kids" value="כן" />
                                כן
                            </label>
                        </div>
                    </div>
                    {values.values.kids === 'כן' &&
                        // <div className="input-container-formik" >
                        //     <p>מספר-</p>
                        //     <Field name="num_of_kids" type="number" placeholder='מספר' />
                        // </div>
                        <div>
                            <div className="input-container-formik child-container" >
                                {renderKidsForm()}
                            </div>

                        </div>
                    }
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
