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
            {() => (
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

                            <p>מגדר</p>
                            <Field as="select" name="gender">
                                <option value="other">אחר</option>
                                <option value="male">זכר</option>
                                <option value="female">נקבה</option>
                            </Field>
                            <p>האם ערכת את הצוואה לבד?</p>
                            <Field as="select" name="edited_by">
                                <option value={false}>לא</option>
                                <option value={true}>כן</option>
                            </Field>
                        </div>
                        <button type="submit">Next</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
