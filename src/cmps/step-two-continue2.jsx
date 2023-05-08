import React from 'react';

import { Formik, Form, Field } from "formik";


export default function StepTwoContinue2({ data, next, prev }) {

    const renderKidsForm = (numberOfKids) => {
        const kidsFormArr = []
        for (let i = 4; i <= numberOfKids; i++) {
            if (i > 5) return kidsFormArr
            kidsFormArr.push(
                <div key={`${i}`} className="flex gap">
                    <Field key={`kid_id${i}`} name={`kid_id${i}`} type="number" placeholder={`תז של ילד מספר ${i}`} />
                    <Field key={`kid_first_name${i}`} name={`kid_first_name${i}`} placeholder={`שם פרטי ${i}`} />
                    <Field key={`kid_last_name${i}`} name={`kid_last_name${i}`} placeholder={`שם משפחה ${i}`} />
                </div>
            )
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
                    {values.values.num_of_kids > 3 &&
                        <div className="input-container-formik" >
                            {renderKidsForm(values.values.num_of_kids)}
                        </div>
                    }
                    <div role="group">
                        <h4 style={{margin: '10px 0'}}>האם יש הורים / אחים / חברים או אחרים שתרצה להפריש להם מצוואתך?</h4>
                        <div className="status-group flex space-between input-btn">
                            <label className={`${values.values.give_to_family === "לא" ? 'active' : ''}`}>
                                <Field type="radio" name="give_to_family" value="לא" />
                                לא
                            </label>
                            <label className={`${values.values.give_to_family === "כן" ? 'active' : ''}`}>
                                <Field type="radio" name="give_to_family" value="כן" />
                                כן
                            </label>
                        </div>
                    </div>
                    {values.values.give_to_family === 'כן' &&
                        <div role="group" className="status-group flex space-between input-btn">
                            <label className={`${values.values.give_to_family_type === "הורים" ? 'active' : ''}`}>
                                <Field type="radio" name="give_to_family_type" value="הורים" />
                                הורים
                            </label>
                            <label className={`${values.values.give_to_family_type === "אחים אחיות" ? 'active' : ''}`}>
                                <Field type="radio" name="give_to_family_type" value="אחים אחיות" />
                                אחים אחיות
                            </label>
                            <label className={`${values.values.give_to_family_type === "חברים ומכרים" ? 'active' : ''}`}>
                                <Field type="radio" name="give_to_family_type" value="חברים ומכרים" />
                                חברים ומכרים
                            </label>
                            <label className={`${values.values.give_to_family_type === "נכדים נכדות" ? 'active' : ''}`}>
                                <Field type="radio" name="give_to_family_type" value="נכדים נכדות" />
                                נכדים נכדות
                            </label>
                        </div>
                    }
                    {values.values.give_to_family === 'כן' && values.values.give_to_family_type === 'הורים' &&
                        <div className='flex column gap'>
                            <div className='flex gap'>
                                <Field name="parents_first_name1" placeholder='שם פרטי' />
                                <Field name="parents_last_name1" placeholder='שם משפחה' />
                                <Field name="parents_id1" type="number" placeholder='ת.ז' />
                            </div>
                            <div className='flex gap'>
                                <Field name="parents_first_name2" placeholder='שם פרטי' />
                                <Field name="parents_last_name2" placeholder='שם משפחה' />
                                <Field name="parents_id2" type="number" placeholder='ת.ז' />
                            </div>
                        </div>
                    }
                    {values.values.give_to_family === 'כן' && values.values.give_to_family_type === 'אחים אחיות' &&
                        <div className='flex column gap'>
                            <div className='flex gap'>
                                <Field name="sibling_first_name1" placeholder='שם פרטי' />
                                <Field name="sibling_last_name1" placeholder='שם משפחה' />
                                <Field name="sibling_id1" type="number" placeholder='ת.ז' />
                            </div>
                            <div className='flex gap'>
                                <Field name="sibling_first_name2" placeholder='שם פרטי' />
                                <Field name="sibling_last_name2" placeholder='שם משפחה' />
                                <Field name="sibling_id2" type="number" placeholder='ת.ז' />
                            </div>
                        </div>
                    }
                    {values.values.give_to_family === 'כן' && values.values.give_to_family_type === 'נכדים נכדות' &&
                        <div className='flex column gap'>
                            <div className='flex gap'>
                                <Field name="grandchild_first_name1" placeholder='שם פרטי' />
                                <Field name="grandchild_last_name1" placeholder='שם משפחה' />
                                <Field name="grandchild_id1" type="number" placeholder='ת.ז' />
                            </div>
                            <div className='flex gap'>
                                <Field name="grandchild_first_name2" placeholder='שם פרטי' />
                                <Field name="grandchild_last_name2" placeholder='שם משפחה' />
                                <Field name="grandchild_id2" type="number" placeholder='ת.ז' />
                            </div>
                        </div>
                    }
                    {values.values.give_to_family === 'כן' && values.values.give_to_family_type === 'חברים ומכרים' &&
                        <div className='flex column gap'>
                            <div className='flex gap'>
                                <Field name="friend_first_name1" placeholder='שם פרטי' />
                                <Field name="friend_last_name1" placeholder='שם משפחה' />
                                <Field name="friend_id1" type="number" placeholder='ת.ז' />
                            </div>
                            <div className='flex gap'>
                                <Field name="friend_first_name2" placeholder='שם פרטי' />
                                <Field name="friend_last_name2" placeholder='שם משפחה' />
                                <Field name="friend_id2" type="number" placeholder='ת.ז' />
                            </div>
                        </div>
                    }
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
