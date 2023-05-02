import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const stepOneValidationSchema = Yup.object({
    first_name: Yup.string().required().label("First Name"),
    last_name: Yup.string().required().label("Last Name")
})

export default function StepOne({ data, next }) {

    const handleSubmit = (values) => {
        const their_date = new Date(values.birthDate);
        const today = new Date();
        const date2 = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        const diff = new Date(date2.getTime() - their_date.getTime());
        const isAgeOver18 = diff.getUTCFullYear() - 1970 < 18 ? false : true
        next(values, false, false, isAgeOver18)
    }

    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => (
                <Form>
                    <div className="input-container">
                        <div className="input-container-formik">
                            <Field name="first_name" placeholder='שם פרטי' />
                            {/* <ErrorMessage name="first_name" /> */}

                            <Field name="last_name" placeholder='שם משפחה' />
                            {/* <ErrorMessage name="last_name" /> */}
                        </div>
                        <div className="input-container-formik">
                            <p>מה התאריך לידה שלך</p>
                            {/* <input placeholder='תאריך לידה' type="date" name="birthDate" required /> */}
                            <Field
                                name="birthDate"
                                type="date"
                                className="birthDate"
                            />
                            <div role="group">
                                <p>מגדר</p>
                                <div className="status-group flex space-between input-btn">
                                    <label className={`${values.values.gender === "זכר" ? 'active' : ''}`}>
                                        <Field type="radio" name="gender" value="זכר" />
                                        זכר
                                    </label>
                                    <label className={`${values.values.gender === "נקבה" ? 'active' : ''}`}>
                                        <Field type="radio" name="gender" value="נקבה" />
                                        נקבה
                                    </label>
                                </div>
                            </div>
                            <div role="group">
                                <p>האם ערכת את הצוואה לבד?</p>
                                <div className="status-group flex space-between input-btn">
                                    <label className={`${values.values.edited_by === "לא" ? 'active' : ''}`}>
                                        <Field type="radio" name="edited_by" value="לא" />
                                        לא
                                    </label>
                                    <label className={`${values.values.edited_by === "כן" ? 'active' : ''}`}>
                                        <Field type="radio" name="edited_by" value="כן" />
                                        כן
                                    </label>
                                </div>
                            </div>

                        </div>
                        <button type="submit">Next</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
