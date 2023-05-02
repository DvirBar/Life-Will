import React, { useState } from 'react';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


export default function StepTwoContinue({ data, next, prev }) {

    const [numberOfKids, setNumberOfKids] = useState(0)

    const logOnMe = (num) => {
        setNumberOfKids(num)
        console.log(num);
        // return <div>{num}</div>
    }

    const renderKidsForm = () => {
        const kidsFormArr = []
        for (let i = 1; i <= numberOfKids; i++) {
            kidsFormArr.push(<Field key={`kid_id${i}`} name={`kid_id${i}`} type="number" placeholder={`תז של ילד מספר ${i}`} />)
        }
        return kidsFormArr
    }

    const handleSubmit = (values) => {
        console.log(values);
        next(values, false, true)
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
                        <div className="input-container-formik" >
                            <p>מספר-</p>
                            <Field onSubmit={logOnMe(values.values.num_of_kids)} name="num_of_kids" type="number" placeholder='מספר' />
                        </div>
                    }
                    <div className="input-container-formik" >
                        {renderKidsForm()}
                    </div>
                    {/* {logOnMe(values.values.num_of_kids)} */}
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
