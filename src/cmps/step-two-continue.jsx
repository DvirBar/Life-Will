import React, { useState } from 'react';

import { Formik, Form, Field } from "formik";


export default function StepTwoContinue({ data, next, prev }) {

    const [kidsCount, setKidsCount] = useState(1)

    const onAddKid = () => {
        if (kidsCount === 18) return
        setKidsCount(kidsCount + 1)
    }
    const onRemoveKid = () => {
        if (kidsCount === 1) return
        setKidsCount(kidsCount - 1)
    }

    const renderKidsForm = () => {
        const kidsFormArr = []
        var i
        if (kidsCount <= 6) i = 1
        else if (kidsCount <= 12) i = 7
        else i = 13
        for (i; i <= kidsCount; i++) {
            kidsFormArr.push(
                <div key={`${i}`} className="flex gap">
                    <div className='flex align-center pointer' onClick={onRemoveKid}>-</div>
                    <Field key={`kid_id${i}`} name={`kid_id${i}`} type="number" placeholder={`תז של ילד מספר ${i}`} />
                    <Field key={`kid_first_name${i}`} name={`kid_first_name${i}`} placeholder={`שם פרטי ${i}`} />
                    <Field key={`kid_last_name${i}`} name={`kid_last_name${i}`} placeholder={`שם משפחה ${i}`} />
                    <div className='flex align-center pointer' onClick={onAddKid}>+</div>
                </div>
            )
        }
        return kidsFormArr
    }

    const handleSubmit = (values) => {
        console.log(values);
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
                            {kidsCount <= 6 &&
                                <div className="input-container-formik" >
                                    {renderKidsForm()}
                                </div>
                            }
                            {(kidsCount > 6 && kidsCount <= 12) &&
                                <div className="input-container-formik">
                                    {renderKidsForm()}
                                </div>
                            }
                            {kidsCount > 12 &&
                                <div className="input-container-formik" >
                                    {renderKidsForm()}
                                </div>
                            }
                        </div>
                    }
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
